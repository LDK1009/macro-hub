import { NextRequest, NextResponse } from "next/server";
import { extractContentEncoded, makeContentHtml } from "@/app/api/_utils/autopress/make-article";
import { postWordpressArticle, validateWordpressUser, WordpressArticleInfoType } from "@/app/api/_utils/common/wordpress";
import { openai } from "@/app/api/_lib/openAi";


////////// POST
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { wpUrl, wpId, wpApplicationPw } = body;

    await validateWordpressUser({ wpUrl, wpId, wpApplicationPw });

    const newsContent = await extractContentEncoded();

    // 시스템 프롬프트
    const articleSystemPrompt = `
    당신은 SEO에 최적화된 블로그 포스트 작성 AI입니다. 아래 규칙을 반드시 따르세요:
    
    1. 전체 글 분량은 최소 1500자 이상이며, 자연스럽고 실용적인 어조를 유지합니다.
    2. 제목(title)은 핵심 키워드를 포함하고, 숫자, 혜택, 행동 유도 표현을 반드시 포함합니다. (예: "하루 10분으로 3kg 감량한 자취생 다이어트 꿀팁 5가지")
    3. 글은 도입부, 본문, 요약, 결론 4개의 섹션으로 나뉘며, 각 섹션은 하나의 section 객체로 구성됩니다.
    4. 각 section은  type, title, sectionKeyword, blocks 속성을 갖습니다. sectionKeyword는 해당 섹션을 대표하는 이미지 검색용 영문 키워드입니다.
    5. blocks는 아래 타입 중 하나로 구성되며, 각 블록은 자연스러운 흐름으로 이어지도록 배치해야 합니다:
    
       - text: 일반 문단 서술 (300자 이상)
       - subject: 소제목과 해당 설명. 하나의 주제 단위.
       - list: 정보 요약이나 팁을 항목별로 제시
       - table: 비교 또는 정리용 표 (예: 가격 비교, 장단점 비교 등)
       - button: CTA 버튼 (예: 구매하러 가기, 관련 글 보기)
       - link: 참고 링크 (예: "공식 사이트 보기")
    
    6. 각 section은 목적이 분명해야 하며 다음과 같은 내용을 담습니다:
    
       - 도입부: 문제 제기, 공감 유도, 핵심 요약. 독자의 시선을 끌어야 합니다.
       - 본문: 실제 정보, 방법, 팁, 사례 등 핵심 내용. 소제목 중심으로 논리적으로 구성합니다.
       - 요약: 내용을 정리하고 표와 리스트를 통해 복습합니다.
       - 결론: 핵심 요약 + 독자에게 적용하라는 제안. CTA 버튼 또는 링크 포함.
    
    7. SEO를 위해 keyword는 제목, 도입부, 본문, 결론에 최소 1회 이상 자연스럽게 삽입합니다 (총 3~5회 이상).
    8. 출력 형식은 반드시 아래 JSON 형식을 따르며, 모든 값은 이중 따옴표로 감싸야 합니다.
    
    [도입부 섹션 규칙]
    type은 반드시 "도입부"여야 합니다.
    blocks에는 text 블럭만 사용하며, 1~2개 포함해야 합니다.
    첫 번째 문단은 문제 제기 또는 독자의 공감을 유도하는 내용으로 시작합니다.
    이어지는 문단은 글의 목적과 앞으로 다룰 내용을 간단히 예고하는 내용을 포함해야 합니다.
    전체 분량은 300자 이상이어야 하며, 자연스럽고 친근한 어조를 사용합니다.

    [본문 섹션 규칙]
    type은 반드시 "본문"이어야 합니다.
    blocks 내 subject 블럭은 최소 5개 이상 포함해야 합니다.
    각 subject 블럭 아래에는 해당 주제를 설명하는 text 블럭을 1개 이상 포함해야 합니다.
    list 블럭은 최소 2개 이상 포함, 각 리스트는 항목 3개 이상으로 구성해야 합니다.
    table 블럭은 최소 1개 이상 포함, 각 테이블은 3열 이상, 3행 이상으로 구성해야 합니다.
    button 또는 link 블럭은 최소 1개 포함해야 하며, 사용자 행동(CTA)을 유도해야 합니다.
    각 subject 단위(소제목 + 설명)는 300자 이상이어야 하며, 단순 나열이 아니라 팁, 경험, 비교 중심으로 작성되어야 합니다.
    전체 블럭은 논리적 흐름에 따라 구성되며, 독자 입장에서 실용적이고 알찬 정보를 제공해야 합니다.

    [요약 섹션 규칙]
    type은 반드시 "요약"이어야 합니다.
    table 블럭은 최소 2개 이상 포함, 각 테이블은 3열 이상, 3행 이상으로 구성해야 합니다.
    list 블럭은 최소 1개 이상 포함, 각 리스트는 항목 3개 이상으로 구성해야 합니다.
    요약 내용은 본문 내용을 단순 반복하지 않고, 독자가 전체 내용을 한눈에 정리하고 복습할 수 있도록 구성해야 합니다.
    가능한 경우 비교, 분류, 장단점 요약 등 구조적 정리 방식을 활용합니다.

    [결론 섹션 규칙]
    type은 반드시 "결론"이어야 합니다.
    text 블럭은 최소 2개 이상 포함해야 하며, 핵심 내용 요약 및 실천 방향 제시를 포함해야 합니다.
    button 또는 link 블럭은 1개 이상 포함하여, 독자의 행동(CTA)을 유도해야 합니다.
    마지막 문장은 독자에게 질문을 던지거나 실천을 유도하는 문장으로 마무리해야 합니다.
    전체 흐름은 자연스럽게 마무리되며, 앞서 읽은 내용이 기억에 남도록 정리합니다.
    `;

    const jsonSystemPrompt = `
      답변은 반드시 아래 json 형식으로 출력합니다.

      {
      title: "제목",
      sections: [
        {
          type: "도입부",
          title: "섹션 제목",
          sectionKeyword: "섹션에 삽입할 이미지 키워드 1개(영문)",
          blocks: [
            {
              type: "text",
              content: "일반 텍스트"
            },
            {
              type: "subject",
              title: "소제목",
              text: "설명"
            },
            {
              type: "list",
              content: ["리스트 아이템1", "리스트 아이템2", "리스트 아이템3"]
            },
            {
              type: "table",
              content: {
                items: [["헤드1", "헤드2", "헤드3"], ["내용1", "내용2", "내용3"]]
              }
            },
            {
              type: "button",
              content: {
                text: "버튼 텍스트",
                url: "버튼 링크"
              };
            },
            ...
          ]
        },
        {
          type: "본문",
          title: "섹션 제목",
          sectionKeyword: "섹션에 삽입할 이미지 키워드 1개",
          blocks: [
            {
              type: "text",
              content: "일반 텍스트"
            },
            {
              type: "subject",
              title: "소제목",
              text: "설명"
            },
            {
              type: "list",
              content: ["리스트 아이템1", "리스트 아이템2", "리스트 아이템3"]
            },
            {
              type: "table",
              content: {
                items: [["헤드1", "헤드2", "헤드3"], ["내용1", "내용2", "내용3"]]
              }
            },
            {
              type: "button",
              content: {
                text: "버튼 텍스트",
                url: "버튼 링크"
              };
            },
            ...
          ]
        },
        {
          type: "요약",
          title: "섹션 제목",
          sectionKeyword: "섹션에 삽입할 이미지 키워드 1개",
          blocks: [
            {
              type: "text",
              content: "일반 텍스트"
            },
            {
              type: "subject",
              title: "소제목",
              text: "설명"
            },
            {
              type: "list",
              content: ["리스트 아이템1", "리스트 아이템2", "리스트 아이템3"]
            },
            {
              type: "table",
              content: {
                items: [["헤드1", "헤드2", "헤드3"], ["내용1", "내용2", "내용3"]]
              }
            },
            {
              type: "button",
              content: {
                text: "버튼 텍스트",
                url: "버튼 링크"
              };
            },
            ...
          ]
        },
        {
          type: "결론",
          title: "섹션 제목",
          sectionKeyword: "섹션에 삽입할 이미지 키워드 1개",
          blocks: [
            {
              type: "text",
              content: "일반 텍스트"
            },
            {
              type: "subject",
              title: "소제목",
              text: "설명"
            },
            {
              type: "list",
              content: ["리스트 아이템1", "리스트 아이템2", "리스트 아이템3"]
            },
            {
              type: "table",
              content: {
                items: [["헤드1", "헤드2", "헤드3"], ["내용1", "내용2", "내용3"]]
              }
            },
            {
              type: "button",
              content: {
                text: "버튼 텍스트",
                url: "버튼 링크"
              };
            },
            ...
          ]
        },
      ]
    }
    `;

    // GPT API 요청
    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: articleSystemPrompt,
        },
        {
          role: "system",
          content: jsonSystemPrompt,
        },
        {
          role: "user",
          content: `${newsContent[0]} 위 내용을 기반으로 글 작성해줘, 사람들이 모를것 같은 용어는 꼭 설명해줘}`,
        },
      ],
      response_format: { type: "json_object" },
    });

    // GPT 응답
    const gptResponse = JSON.parse(completion.choices[0].message.content || "");

    // 콘텐츠 HTML 생성
    const contentHtml = await makeContentHtml(gptResponse);

    // 워드프레스 게시물 정보
    const articleInfo = {
      title: gptResponse.title,
      content: contentHtml,
      status: "publish",
    };

    await postWordpressArticle({
      wpUrl,
      wpId,
      wpApplicationPw,
      articleInfo: articleInfo as WordpressArticleInfoType,
    });

    return NextResponse.json(articleInfo, { status: 201 });
  } catch (error) {
    console.log(error);
    const errorMessage = error instanceof Error ? error.message : "알 수 없는 에러";
    return NextResponse.json(errorMessage, { status: 500 });
  }
}
