import { useWordpressInfoStore } from "@/store/autopress/WordpressInfo";
import { Button } from "@mui/material";
import React from "react";

const GoToBlogButton = () => {
  const { wpInfo } = useWordpressInfoStore();

  return (
    <Button variant="outlined" onClick={() => window.open(wpInfo.wpUrl, "_blank")}>
      🔗 블로그 바로가기
    </Button>
  );
};

export default GoToBlogButton;
