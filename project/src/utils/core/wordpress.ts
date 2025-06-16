import axios from "axios";

type PostWordpressArticleType = {
  wpUrl: string;
  wpId: string;
  wpApplicationPw: string;
  articleInfo: WordpressArticleInfoType;
};

export type WordpressArticleInfoType = {
  title: string;
  content: string;
  status: "publish" | "future" | "draft" | "pending" | "private";
};

export const postWordpressArticle = async (wpInfo: PostWordpressArticleType) => {
  try {
    const { wpUrl, wpId, wpApplicationPw, articleInfo } = wpInfo;

    const basicAuth = "Basic " + Buffer.from(`${wpId}:${wpApplicationPw}`).toString("base64");

    // 워드프레스 요청 헤더 설정
    const httpConfig = {
      headers: {
        "Content-Type": "application/json",
        Authorization: basicAuth,
      },
    };

    const response = await axios.post(`${wpUrl}/wp-json/wp/v2/posts`, articleInfo, httpConfig);

    return { data: response.data, error: null };
  } catch (error) {
    return { data: null, error: error };
  }
};
