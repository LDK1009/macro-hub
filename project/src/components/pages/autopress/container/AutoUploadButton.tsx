import api from "@/lib/apiClient";
import { Button } from "@mui/material";
import React from "react";

const AutoUploadButton = () => {
  async function handleAutoUpload() {
    try {
      const response = await api.post("/autopress/articles", {
        wpUrl: "https://m3088787.mycafe24.com",
        wpId: "m3088787",
        wpApplicationPw: "hONc Hojo dlsv EfFd AUHd dqwk",
        category: "latest",
      });

      console.log(response.data);
    } catch (error) {
      console.log(error);
      alert("에러 발생");
    }
  }

  return (
    <Button variant="contained" color="primary" onClick={handleAutoUpload}>
      업로드
    </Button>
  );
};

export default AutoUploadButton;
