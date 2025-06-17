import { ArticleBlockType, ArticleSectionType } from "@/types/autopress/block";
import { searchImage } from "@/app/api/_utils/common/image";
import axios from "axios";
import * as cheerio from "cheerio";
import { getRandomInt } from "@/utils/random";

////////// 섹션 타이틀 HTML 생성
export const makeSectionTitleHtml = (title: string) => {
  return `<h2 class="custom-section-title">${title}</h2>`;
};

////////// 섹션 이미지 HTML 생성
export const makeSectionImgHtml = async (imageKeyword: string) => {
  const imgLink = await searchImage(imageKeyword);
  return `<img src="${imgLink}" alt="${imageKeyword}" class="custom-section-img"/>`;
};

////////// 섹션 블럭 별 HTML 생성
export const makeSectionTextTag = (block: ArticleBlockType) => {
  if (block.type === "text") {
    return `<p class="custom-text">${block.content}</p>`;
  }
  if (block.type === "subject") {
    return `<h2 class="custom-subject">${block.title}</h2><p class="custom-text">${block.text}</p>`;
  }
  if (block.type === "table") {
    const head = block.content.items[0].map((item) => `<th>${item}</th>`).join("");
    const body = block.content.items
      .slice(1)
      .map((item) => `<tr>${item.map((item) => `<td>${item}</td>`).join("")}</tr>`)
      .join("");
    return `<figure class="block-editor-block-list__block wp-block wp-block-table custom-table" ><table><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table></figure>`;
  }
  if (block.type === "button") {
    return `<a href="${block.content.url}" target="_blank" class="custom-button">${block.content.text}></a>`;
  }
  if (block.type === "list") {
    return `<ul class="custom-list">${block.content.map((item) => `<li>${item}</li>`).join("")}</ul>`;
  }
};

////////// 섹션 블럭 별 HTML 생성
export const makeSectionBlockListHtml = (blockList: ArticleBlockType[]) => {
  // 블럭 HTML 배열 생성
  const sectionBlockHtmlList = blockList.map((block: ArticleBlockType) => {
    return makeSectionTextTag(block);
  });

  // 블럭 전체 HTML
  const sectionBlockHtml = sectionBlockHtmlList.join("");

  return sectionBlockHtml;
};

////////// 헤드라인 뉴스 링크 가져오기
export const getHeadlineNewsLink = async () => {
  const response = await axios.get("https://www.yonhapnewstv.co.kr/category/news/headline/feed/");
  const $ = cheerio.load(response.data, {
    xmlMode: true,
  });

  const newsItems: { link: string; title: string }[] = [];
  $("item")
    .slice(0, 3)
    .each((_, element) => {
      const link = $(element).find("link").text();
      const title = $(element).find("title").text();
      if (link && title) {
        newsItems.push({ link, title });
      }
    });

  return newsItems;
};

////////// 헤드라인 뉴스 블럭 가져오기
export const getHeadlineNewsBlock = async () => {
  const headlineNewsObjList = await getHeadlineNewsLink();

  const headlineNewsBlockList = headlineNewsObjList.map(
    (item) => `<a href="${item.link}" target="_blank" class="custom-news-headline">${item.title.trim()}</a>`
  );

  // 최종 블럭
  const finalBlock = `
  <h2 class="custom-section-title">헤드라인 뉴스</h2>
  ${headlineNewsBlockList.join("")}
  `;

  return finalBlock;
};

////////// 내 최신 게시물 3개 가져오기
export const getMyLatestArticle = async () => {
  // 내 게시물 가져오기
  const response = await axios.get("https://m3088787.mycafe24.com/wp-json/wp/v2/posts");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const postList = response.data.slice(0, 3).map((el: any) => {
    const title = el.title.rendered;
    const url = el.link;

    return { title, url };
  });

  return postList;
};

////////// 내 최신 게시물 블럭 가져오기
export const getMyLatestArticleBlock = async () => {
  const myLatestArticleList = await getMyLatestArticle();
  const myLatestArticleBlockList = myLatestArticleList.map((article: { title: string; url: string }) => {
    return `<a href="${article.url}" target="_blank" class="custom-my-latest-article">${article.title.trim()}</a>`;
  });

  // 최종 블럭
  const finalBlock = `
  <h2 class="custom-section-title">다른 글 보기</h2>
  ${myLatestArticleBlockList.join("")}
  `;

  return finalBlock;
};

////////// 게시물 콘텐츠 HTML 생성
export const makeContentHtml = async (gptResponse: { title: string; sections: ArticleSectionType[] }) => {
  try {
    // 섹션별 HTML 배열 생성
    const sectionHtmlList = await Promise.all(
      gptResponse.sections.map(async (section: ArticleSectionType) => {
        // 섹션 이미지
        const sectionImgHtml = await makeSectionImgHtml(section.sectionKeyword);
        // 섹션 제목
        const sectionTitleHtml = makeSectionTitleHtml(section.title);
        // 섹션 블럭
        const sectionBlockListHtml = makeSectionBlockListHtml(section.blocks);

        return `${sectionTitleHtml}${sectionImgHtml}${sectionBlockListHtml}`;
      })
    );

    // 섹션 전체 HTML
    const contentHtml = sectionHtmlList.join("");

    // 헤드라인 뉴스, 내 최신 게시물 블럭 가져오기
    const headlineNewsHtml = await getHeadlineNewsBlock();
    const myLatestArticleHtml = await getMyLatestArticleBlock();

    // 최종 컨텐츠 HTML
    const finalContentHtml = `${headlineNewsHtml}${contentHtml}${myLatestArticleHtml}`;

    return finalContentHtml;
  } catch (error) {
    throw error;
  }
};

////////// 뉴스 콘텐츠 추출
export type ExtractContentEncodedParamsType =
  | "random"
  | "latest"
  | "headlines"
  | "politics"
  | "economy"
  | "society"
  | "local"
  | "international"
  | "culture"
  | "sports"
  | "weather";

export const extractContentEncoded = async (category: ExtractContentEncodedParamsType) => {
  let response;

  const categoryList = [
    "latest",
    "headlines",
    "politics",
    "economy",
    "society",
    "local",
    "international",
    "culture",
    "sports",
    "weather",
  ];
  const finalCategory = category === "random" ? categoryList[getRandomInt(0, categoryList.length - 1)] : category;

  switch (finalCategory) {
    case "latest":
      response = await axios.get("https://www.yonhapnewstv.co.kr/browse/feed/");
      break;
    case "headlines":
      response = await axios.get("https://www.yonhapnewstv.co.kr/category/news/headline/feed/");
      break;
    case "politics":
      response = await axios.get("https://www.yonhapnewstv.co.kr/category/news/politics/feed/");
      break;
    case "economy":
      response = await axios.get("https://www.yonhapnewstv.co.kr/category/news/economy/feed/");
      break;
    case "society":
      response = await axios.get("https://www.yonhapnewstv.co.kr/category/news/society/feed/");
      break;
    case "local":
      response = await axios.get("https://www.yonhapnewstv.co.kr/category/news/local/feed/");
      break;
    case "international":
      response = await axios.get("https://www.yonhapnewstv.co.kr/category/news/international/feed/");
      break;
    case "culture":
      response = await axios.get("https://www.yonhapnewstv.co.kr/category/news/culture/feed/");
      break;
    case "sports":
      response = await axios.get("https://www.yonhapnewstv.co.kr/category/news/sports/feed/");
      break;
    case "weather":
      response = await axios.get("https://www.yonhapnewstv.co.kr/category/news/weather/feed/");
      break;
    default:
      throw new Error("올바르지 않은 카테고리입니다.");
  }

  const $ = cheerio.load(response.data, {
    xmlMode: true,
  });

  const contents = $("content\\:encoded").eq(0).text();

  return contents;
};
