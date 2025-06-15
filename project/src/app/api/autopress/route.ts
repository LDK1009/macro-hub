import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import * as cheerio from "cheerio";
import { makeSectionImgTag, makeSectionTextTag } from "@/utils/auto-press/api/make-article";
import { ArticleBlockType, ArticleSectionType } from "@/types/auto-press/block";

// OpenAI 클라이언트 초기화
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

/**
 * POST 요청 처리 예시
 *
 * 요청 본문(body)에서 데이터를 받아 처리하는 방법을 보여줍니다.
 */
export async function POST(req: NextRequest) {
  try {
    const response = await axios.get("https://google.nongsaro.co.kr/170");
    const $ = cheerio.load(response.data);
    const articleContent = $("p,h1,h2,h3,h4,h5,h6,li,a").text();
    console.log(articleContent);

    // const body = await req.json();

    // 실제 데이터 처리 로직이 여기에 들어갑니다
    // console.log("받은 데이터:", body);

    // 워드프레스 Basic 인증 헤더 생성
    // const basicAuth = "Basic " + Buffer.from(`${wpId}:${wpApplicationPw}`).toString("base64");
    const basicAuth = "Basic " + Buffer.from(`m3088787:hONc Hojo dlsv EfFd AUHd dqwk`).toString("base64");

    // 워드프레스 요청 헤더 설정
    const axiosConfig = {
      headers: {
        "Content-Type": "application/json",
        Authorization: basicAuth,
      },
    };

    // 시스템 프롬프트
    const articleSystemPrompt = `
    당신은 고급 블로그 콘텐츠를 작성하는 AI입니다. 
    아래 규칙을 반드시 따르세요:

    # 콘텐츠 구조
    1. 콘텐츠의 계층구조는 블럭과 섹션 순으로 구조화됩니다.
    2. 블럭이란 섹션의 하위 요소입니다. 블럭은 텍스트, 소제목 + 텍스트, 테이블, 버튼, 리스트로 분류되며, 블럭을 조합하여 섹션을 구성합니다.
    3. 섹션은 콘텐츠의 최상위 요소입니다. 섹션은 제목, 도입부, 본문, 요약, 결론, 행동 유도로 분류됩니다. 섹션을 조합하여 콘텐츠를 구성합니다.

    # 콘텐츠 구성 규칙
    1. 하나의 콘텐츠는 최소 6개 이상의 섹션으로 구성되어야하며, '제목, 도입부, 본문, 요약, 결론, 행동 유도' 섹션은 필수로 포함되어야 합니다.
    2. 하나의 섹션은 최소 3개 이상의 블럭으로 구성되어야 합니다.
    3. 모든 섹션은 텍스트 블럭을 필수로 포함하여야합니다.
    4. 본문 섹션은 최소 10개 이상의 블럭을 포함하여야합니다.
    5. 본문의 글자수는 1,500 ~ 2,500자 사이로 작성합니다.
    6. 행동 유도 섹션은 최소 1개 이상의 버튼 블럭을 포함하여야합니다.
    7. 섹션 키워드에는 이미지 검색 키워드 1개를 입력합니다.
    
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
              content: "텍스트"
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
              type: "subject",
              title: "소분류 제목",
              text: "소분류 내용"
            },
            {
              type: "text",
              content: "텍스트"
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
              type: "table",
              content: {
                items: [
                  ["텍스트", "텍스트" , "텍스트"],
                  ["텍스트", "텍스트", "텍스트"],
                ]
              }
            },
            {
              type: "list",
              content: [
                "텍스트",
                "텍스트",
                "텍스트",
              ]
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
              content: {
                text: "텍스트",
              }
            },
            ...
          ]
        },
        {
          type: "행동 유도",
          title: "섹션 제목",
          sectionKeyword: "섹션에 삽입할 이미지 키워드 1개",
          blocks: [
            {
              type: "link",
              content: {
                text: "텍스트",
                url: "https://www.google.com" 
              }
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
          content: `${articleContent} 위 내용을 참고하여 아주 비슷한 글을 작성해줘`,
        },
      ],
      response_format: { type: "json_object" },
    });

    // GPT 응답
    const gptResponse = JSON.parse(completion.choices[0].message.content || "");

    // 섹션 HTML 추가
    const sectionHtmls = await Promise.all(
      gptResponse.sections.map(async (section: ArticleSectionType) => {
        const sectionThumbnail = await makeSectionImgTag(section.sectionKeyword);
        const sectionTitle = `<h2>${section.title}</h2>`;
        const sectionBlockList = section.blocks.map((block: ArticleBlockType) => {
          return makeSectionTextTag(block);
        });
        const sectionBlockHtml = sectionBlockList.join("");
        return `${sectionTitle}${sectionThumbnail}${sectionBlockHtml}`;
      })
    );

    // 최종 컨텐츠 HTML
    const articleHtml = sectionHtmls.join("");

    // article
    const articleInfo = {
      title: gptResponse.title,
      content: articleHtml,
      status: "publish",
    };

    // WordPress에 포스트 업로드
    await axios.post(`https://m3088787.mycafe24.com/wp-json/wp/v2/posts`, articleInfo, axiosConfig);

    return NextResponse.json(articleInfo, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "POST 요청 처리 실패" }, { status: 500 });
  }
}

/**
 * PUT 요청 처리 예시
 *
 * 리소스 업데이트를 위한 요청 처리 방법을 보여줍니다.
 */
export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();

    // 실제 업데이트 로직이 여기에 들어갑니다

    return NextResponse.json(
      {
        message: "PUT 요청 성공",
        updatedData: body,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "PUT 요청 처리 실패" }, { status: 500 });
  }
}
