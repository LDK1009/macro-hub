import { ArticleBlockType } from "@/types/auto-press/block";
import { searchImage } from "@/utils/core/image";

export const makeSectionImgTag = async (imageKeyword: string) => {
  const imgLink = await searchImage(imageKeyword);
  return `<img src="${imgLink}" alt="${imageKeyword}" />`;
};


export const makeSectionTextTag = (block: ArticleBlockType) => {
  if (block.type === "text") {
    return `<p class="custom-text">${block.content}</p>`;
  }
  if (block.type === "subject") {
    return `<h2 class="custom-subject">${block.title}</h2><p class="custom-text">${block.text}</p>`;
  }
  if (block.type === "table") {
    const head = block.content.items[0].map((item) => `<th>${item}</th>`).join("");
    const body = block.content.items.slice(1).map((item) => `<tr>${item.map((item) => `<td>${item}</td>`).join("")}</tr>`).join("");
    return `<figure class="block-editor-block-list__block wp-block wp-block-table custom-table" ><table><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table></figure>`;
  }
  if (block.type === "button") {
    return `<a href="${block.content.url}" target="_blank" class="custom-button">${block.content.text}</a>`;
  }
  if (block.type === "list") {
    return `<ul class="custom-list">${block.content.map((item) => `<li>${item}</li>`).join("")}</ul>`;
  }
};
