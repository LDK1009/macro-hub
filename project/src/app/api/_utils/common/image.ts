import axios from "axios";

// 이미지 검색 함수
export async function searchImage(query: string) {
  try {
    const response = await axios.get(`https://api.unsplash.com/search/photos`, {
      headers: {
        Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
      },
      params: {
        query: query,
        per_page: 1,
        orientation: "landscape",
      },
    });

    if (response.data.results && response.data.results.length > 0) {
      return response.data.results[0].urls.regular;
    } else {
      return "no image";
    }
  } catch {
    return "no image";
  }
}
