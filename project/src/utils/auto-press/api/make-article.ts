import { ArticleBlockType } from "@/types/auto-press/block";
import { searchImage } from "@/utils/core/image";
import axios from "axios";
import * as cheerio from "cheerio";

////////// 이미지 블럭으로 변환
export const makeSectionImgTag = async (imageKeyword: string) => {
  const imgLink = await searchImage(imageKeyword);
  return `<img src="${imgLink}" alt="${imageKeyword}" />`;
};

////////// 블럭으로 변환
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
    return `<a href="${block.content.url}" target="_blank" class="custom-button">${block.content.text}</a>`;
  }
  if (block.type === "list") {
    return `<ul class="custom-list">${block.content.map((item) => `<li>${item}</li>`).join("")}</ul>`;
  }
};

////////// 헤드라인 뉴스 링크 가져오기
export const getHeadlineNewsLink = async () => {
  const response = await axios.get("https://www.yonhapnewstv.co.kr/category/news/headline/feed/");
  const $ = cheerio.load(response.data, {
    xmlMode: true,
  });

  const newsItems: { link: string; title: string }[] = [];
  $("item").slice(0, 3).each((_, element) => {
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
    (item) =>
      `<a href="${item.link}" target="_blank" className="custom-button">
      ${item.title}
    </a>`
  );

  return headlineNewsBlockList.join("");
};

////////// 내 최신 게시물 5개 가져오기
export const getMyLatestArticle = async () => {
  // 내 게시물 가져오기
  const response = await axios.get("https://m3088787.mycafe24.com/wp-json/wp/v2/posts");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const postList = response.data.slice(0, 5).map((el: any) => {
    const title = el.title.rendered;
    const url = el.link;

    return { title, url };
  });

  return postList;
};


export const extractContentEncoded = async() => {
  const response = await axios.get("https://www.yonhapnewstv.co.kr/category/news/politics/feed/");
  const $ = cheerio.load(response.data, {
    xmlMode: true,
  });

// 모든 content:encoded 태그를 찾아서 처리
const contents = $('content\\:encoded').map((_, element) => {
  return $(element).text();
}).get();

  // 연속된 공백 제거 및 줄바꿈 정리
  return contents
};
