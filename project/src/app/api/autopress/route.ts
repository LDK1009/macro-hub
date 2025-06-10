import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

// OpenAI 클라이언트 초기화
const openai = new OpenAI({
  // apiKey: process.env.OPENAI_API_KEY,
  apiKey:
    "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",
});

/**
 * POST 요청 처리 예시
 *
 * 요청 본문(body)에서 데이터를 받아 처리하는 방법을 보여줍니다.
 */
export async function POST(req: NextRequest) {
  try {
    // const body = await req.json();

    // 실제 데이터 처리 로직이 여기에 들어갑니다
    // console.log("받은 데이터:", body);

    // Basic 인증 헤더 생성
    // const basicAuth = "Basic " + Buffer.from(`${wpId}:${wpApplicationPw}`).toString("base64");
    const basicAuth = "Basic " + Buffer.from(`m3088787:hONc Hojo dlsv EfFd AUHd dqwk`).toString("base64");

    // 요청 헤더 설정
    const axiosConfig = {
      headers: {
        "Content-Type": "application/json",
        Authorization: basicAuth,
      },
    };

    const systemPrompt = `
    당신은 전문적인 블로그 포스팅 작성 AI입니다. 다음 규칙을 엄격히 준수해주세요:
    
    [HTML 출력 규칙]
    1. HTML 태그를 사용하여 구조화된 포스트를 작성합니다.
    2. 줄바꿈은 반드시 <br> 태그나 적절한 HTML 태그를 사용합니다.
    3. 원시 텍스트의 \\n 문자를 절대 사용하지 않습니다.
    4. 단락은 <p> 태그로 구분합니다.
    5. 제목은 <h1>, <h2>, <h3> 등의 태그를 사용합니다.
    6. 목록은 <ul>, <ol>, <li> 태그를 사용합니다.
    7. 코드 블록은 <pre><code> 태그를 사용합니다.
    8. 강조는 <strong>, <em> 태그를 사용합니다.
    9. 모든 HTML은 한 줄로 작성되어야 합니다. (줄바꿈 없이 출력)
    
    [콘텐츠 작성 규칙]
    10. 주어진 키워드와 주제를 기반으로 실제 독자에게 유익한 정보를 제공합니다.
    11. 도입 – 본문 – 결론의 구조로 자연스럽게 구성하고, 각 부분을 적절한 제목 태그로 구분합니다.
    12. 이미지가 필요한 위치에는 <img src="이미지URL" alt="설명"> 태그를 삽입하며, 주제와 관련된 무료 이미지를 사용한 것처럼 작성합니다.
    13. SEO를 고려해 키워드를 자연스럽게 본문에 여러 번 노출시킵니다.
    14. 글 하단에는 메타 설명 한 줄(<p>태그 사용)과 관련 태그 목록(<p>#태그1, #태그2</p>)을 포함합니다.
    15. 문체는 친근하면서도 전문적인 느낌으로 작성합니다.
    `;
    

    const userPrompt = `
    다음 주제에 대해 전문적이고 상세한 블로그 포스트를 작성해주세요.
    주제: 파이썬 가상환경 설정 가이드
    
    포함해야 할 내용:
    1. 가상환경의 개념과 필요성
    2. venv를 사용한 가상환경 생성 방법
    3. 가상환경 활성화/비활성화 방법
    4. pip를 사용한 패키지 관리
    5. requirements.txt 활용법
    6. 실제 프로젝트에서의 모범 사례
    
    각 섹션은 명확한 HTML 구조로 구분하고, 코드 예제를 포함해주세요.
    `;

    // OpenAI API를 호출하여 AI 판결 생성
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: systemPrompt,
        },
        {
          role: "user",
          content: userPrompt,
        },
      ],
    });

    // API 응답을 파싱
    const response = completion.choices[0].message.content;

    const parsedResponse = JSON.parse(response || "{}");

    // WordPress API 요청 본문 구성
    const axiosBody = {
      title: "테스트",
      content: parsedResponse, // HTML 형식의 컨텐츠
      status: "publish",
    };

    // WordPress에 포스트 업로드
    await axios.post(`https://m3088787.mycafe24.com/wp-json/wp/v2/posts`, axiosBody, axiosConfig);

    return NextResponse.json(
      {
        message: "POST 요청 성공",
        receivedData: parsedResponse,
      },
      { status: 201 }
    );
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
