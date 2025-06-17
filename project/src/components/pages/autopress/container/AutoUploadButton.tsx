import api from "@/lib/apiClient";
import { useAutoUploadStore } from "@/store/autopress/AutoUpload";
import { Button } from "@mui/material";
import React, { useEffect, useCallback } from "react";

const AutoUploadButton = () => {
  const { isAutoUploadRunning, setIsAutoUploadRunning } = useAutoUploadStore();

  async function handleIsAutoUploadRunning() {
    setIsAutoUploadRunning(!isAutoUploadRunning);
  }

  ////////// 게시물 업로드
  const articleUpload = useCallback(async () => {
    try {
      const response = await api.post("/autopress/articles", {
        wpUrl: "https://m3088787.mycafe24.com",
        wpId: "m3088787",
        wpApplicationPw: "hONc Hojo dlsv EfFd AUHd dqwk",
        category: "random",
      });

      return response;
    } catch (error) {
      console.error("게시물 업로드 오류:", error);
      setIsAutoUploadRunning(false);
      throw new Error("게시물 업로드 오류");
    }
  }, [setIsAutoUploadRunning]);

  async function articleUploadLoop() {
    try {
      await articleUpload();
      setTimeout(articleUploadLoop, 3 * 1000);
    } catch {
      return;
    }
  }

  return (
    <Button variant="contained" color="primary" onClick={articleUploadLoop}>
      {isAutoUploadRunning ? "중지" : "업로드 시작"}
    </Button>
  );
};

export default AutoUploadButton;
