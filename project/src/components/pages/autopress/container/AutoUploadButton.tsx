import api from "@/lib/apiClient";
import { useAutoUploadStore } from "@/store/autopress/AutoUpload";
import { Button } from "@mui/material";
import axios, { CancelTokenSource } from "axios";
import React, { useCallback, useEffect, useState } from "react";

const AutoUploadButton = () => {
  const { isAutoUploadRunning, setIsAutoUploadRunning, addUploadedArticle } = useAutoUploadStore();
  const [currentApiSource, setCurrentApiSource] = useState<CancelTokenSource>();

  ////////// 게시물 업로드
  const articleUpload = useCallback(async () => {
    try {
      const source = axios.CancelToken.source();
      setCurrentApiSource(source);

      // API 요청
      const response = await api.post(
        "/autopress/articles",
        {
          wpUrl: "https://m3088787.mycafe24.com",
          wpId: "m3088787",
          wpApplicationPw: "hONc Hojo dlsv EfFd AUHd dqwk",
          category: "random",
        },
        {
          cancelToken: source.token,
        }
      );

      // 업로드 완료 목록에 추가
      addUploadedArticle(response.data);

      return response;
    } catch (error) {
      console.error("게시물 업로드 오류:", error);
      setIsAutoUploadRunning(false);
      throw new Error("게시물 업로드 오류");
    }
  }, [setIsAutoUploadRunning, addUploadedArticle]);

  ////////// 게시물 업로드 반복
  const articleUploadLoop = useCallback(async () => {
    await articleUpload();
    setTimeout(articleUploadLoop, 3 * 1000);
  }, [articleUpload]);

  ////////// API 요청 취소
  const cancelCurrentApi = useCallback(() => {
    currentApiSource?.cancel("API 요청 취소");
    setCurrentApiSource(undefined);
  }, [currentApiSource]);

  ////////// 시작 버튼 클릭
  const handleUploadStartButtonClick = () => {
    setIsAutoUploadRunning(!isAutoUploadRunning);
  };

  ////////// 자동 업로드 상태 변경 시
  useEffect(() => {
    cancelCurrentApi();

    if (isAutoUploadRunning) {
      articleUploadLoop();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAutoUploadRunning]);

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleUploadStartButtonClick}>
        {isAutoUploadRunning ? "중지" : "업로드 시작"}
      </Button>
    </>
  );
};

export default AutoUploadButton;
