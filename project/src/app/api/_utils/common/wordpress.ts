import axios from "axios";

////////// 워드프레스 게시물 업로드
type WordpressUserInfoType = {
  wpUrl: string;
  wpId: string;
  wpApplicationPw: string;
};

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

////////// 워드프레스 게시물 업로드
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
  } catch {
    throw new Error("postWordpressArticle() : 워드프레스 게시물 업로드 오류");
  }
};

/////////// 워드프레스 인증
// 워드프레스 사용자 검증 함수
export async function validateWordpressUser(wpInfo: WordpressUserInfoType) {
  try {
    const { wpUrl, wpId, wpApplicationPw } = wpInfo;

    await fetch(`${wpUrl}/wp-json/wp/v2/users/me`, {
      headers: {
        Authorization: `Basic ${Buffer.from(`${wpId}:${wpApplicationPw}`).toString("base64")}`,
      },
    });
  } catch {
    throw new Error(`워드프레스 사용자 검증 중 오류 발생`);
  }
}
