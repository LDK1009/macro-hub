import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import * as cheerio from 'cheerio';

// Unsplash API 설정
// const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;
const UNSPLASH_ACCESS_KEY = "cPatHqFae0VA8ddwXyQ7MtVMNXxe4y3K5ltKYZL9wbQ";

// 이미지 검색 함수
async function searchImage(query: string): Promise<string> {
  try {
    const response = await axios.get(`https://api.unsplash.com/search/photos`, {
      headers: {
        Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
      },
      params: {
        query: query,
        per_page: 1,
        orientation: "landscape",
      },
    });

    if (response.data.results && response.data.results.length > 0) {
      return response.data.results[0].urls.regular;
    }

    throw new Error("이미지를 찾을 수 없습니다.");
  } catch (error) {
    console.error("이미지 검색 중 오류 발생:", error);
    return "https://via.placeholder.com/400x300?text=No+Image+Found";
  }
}

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
    const subject = "노션을 활용한 업무 생산성 향상 방법";
    const targetList = "프리랜서, 직장인, 대학생";
    const style = "친근하고 쉽게 설명";

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

    // 시스템 프롬프트
    const rolePrompt = `
      당신은 JSON 데이터만 출력하는 AI입니다. 다음 규칙을 반드시 따르세요:

      1. 응답은 반드시 올바른 JSON 형식으로 출력해야 합니다.
      2. 문자열, 숫자, 불리언 등 JSON 데이터 타입만 사용하세요.
      3. 절대 설명, 서론, 말머리 텍스트 없이 JSON만 출력하세요.
      4. \`\`\`json 등의 포맷팅 없이 오직 순수 JSON만 출력하세요.

      [응답 형식]
      {
        "imageKeywords": ["키워드1", "키워드2", ...],
        "content": "HTML 컨텐츠"
      }

      [응답 예시]
      {
        "imageKeywords": ["Notion", "Productivity", "Workspace"],
        "content": "<h1>노션을 활용한 업무 생산성 향상 방법</h1><p>노션은 강력한 업무 관리 도
        구로 다양한 기능을 제공하여 업무 생산성을 향상시킬 수 있습니다.<p/>
        ..."
      } 
    `

    
    const systemPrompt1 = `
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
      1. 주어진 키워드와 주제를 기반으로 실제 독자에게 유익한 정보를 제공합니다.
      2. 도입 – 본문 – 결론의 구조로 자연스럽게 구성하고, 각 부분을 적절한 제목 태그로 구분합니다.
      3. 이미지가 필요한 위치에는 searchImage 함수를 호출하여 실제 이미지 URL을 가져와 사용합니다(예를 들어 <img src="이미지URL" alt="설명"> 태그를 삽입합니다).
      4. 이미지는 최소 3개 이상 삽입합니다.
      5. SEO를 고려해 키워드를 자연스럽게 본문에 여러 번 노출시킵니다.
    `;


    const systemPrompt2 = `
      당신은 전문적인 블로그 포스팅 작성 AI입니다. 다음 규칙을 엄격히 준수해주세요:

      1. 컨텐츠 내 텍스트는 최소 1000자 이상으로 작성합니다.
      2. 이미지는 최소 3개 이상 삽입하며 되도록 섹션별로 이미지를 삽입합니다.
      3. 워드프레스 rankMath SEO를 최적화합니다.
      4. 워드프레스에 최적화된 HTML 형식으로 출력합니다.
      5. 적절하게 섹션을 나누어 출력합니다.
      6. 이미지의 최대너비는 컨텐츠의 너비와 동일하며, 이미지 비율을 유지합니다.
      7. SEO를 위해 키워드를 자연스럽게 본문에 여러 번 노출시킵니다.
      
    `;

    // 사용자 프롬프트
    const userPrompt = `
    1. 📌 주제: ${subject}
    2. 🧑‍💻 대상 독자: ${targetList}
    3. ✍️ 글 스타일: ${style}
    `;

    // OpenAI API를 호출하여 AI 판결 생성
    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: rolePrompt,
        },
        {
          role: "system",
          content: systemPrompt2,
        },
        {
          role: "user",
          content: userPrompt,
        },
      ],
      response_format: { type: "json_object" },
    });

    // AI 응답 처리
    const gptResponse = completion.choices[0].message.content;
    console.log(gptResponse);
    const gptResponseObj = JSON.parse(gptResponse || "");
    const imageKeywords = gptResponseObj.imageKeywords;
    const articleHtml = gptResponseObj.content;

    const imageUrls = await Promise.all(
      imageKeywords.map(async (keyword: string) => {
        return await searchImage(keyword);
      })
    );

    // cheerio를 사용하여 HTML 파싱
    const $ = cheerio.load(articleHtml);
    
    // 모든 img 태그를 찾아서 src 속성 업데이트
    $('img').each((index, element) => {
      if (index < imageUrls.length) {
        $(element).attr('src', imageUrls[index]);
      }
    });

    const finalContent = $.html();

    // WordPress API 요청 본문 구성
    const axiosBody = {
      title: "테스트",
      content: finalContent,
      status: "publish",
    };

    // WordPress에 포스트 업로드
    await axios.post(`https://m3088787.mycafe24.com/wp-json/wp/v2/posts`, axiosBody, axiosConfig);

    return NextResponse.json(
      {
        message: "POST 요청 성공",
        receivedData: finalContent,
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
