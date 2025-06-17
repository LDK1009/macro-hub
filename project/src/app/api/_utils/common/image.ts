import { getRandomInt } from "@/utils/random";
import axios from "axios";

// 이미지 검색 함수
export async function searchImage(query: string) {
  try {
    const response = await axios.get(`https://pixabay.com/api?key=${process.env.PIXABAY_API_KEY}&q=${query}`);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const imageLinkList = response.data.hits.map((hit: any) => hit.webformatURL);

    if (imageLinkList.length === 0) {
      return "no image";
    }
    const randomImageLink = imageLinkList[getRandomInt(0, imageLinkList.length - 1)];

    return randomImageLink;
  } catch {
    throw new Error("이미지 검색 실패");
  }
}
