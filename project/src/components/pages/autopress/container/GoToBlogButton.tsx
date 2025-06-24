import { useWordpressInfoStore } from "@/store/autopress/WordpressInfo";
import { Button, styled } from "@mui/material";
import React from "react";

const GoToBlogButton = () => {
  const { wpInfo } = useWordpressInfoStore();

  return (
    <StyledButton variant="outlined" onClick={() => window.open(wpInfo.wpUrl, "_blank")}>
      🔗 블로그 바로가기
    </StyledButton>
  );
};

export default GoToBlogButton;

const StyledButton = styled(Button)`
  height: 50px;

  border-color: ${({ theme }) => theme.palette.primary.light};
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: 16px;

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.dark};
  }

  transition: background-color 0.3s ease;
`;
