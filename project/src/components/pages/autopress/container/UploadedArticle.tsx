import { useAutoUploadStore } from "@/store/autopress/AutoUpload";
import { mixinEllipsis, mixinFlex, mixinHideScrollbar } from "@/styles/mixins";
import { Box, CircularProgress, keyframes, Stack, styled, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";

const UploadedArticle = () => {
  const { isAutoUploadRunning, uploadedArticleList } = useAutoUploadStore();
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (gridRef.current) {
      gridRef.current.scrollTop = gridRef.current.scrollHeight;
    }
  }, [uploadedArticleList]);

  return (
    <Container>
      {/* 게시물 목록 */}
      <ArticleContainer ref={gridRef}>
        {uploadedArticleList.map((article, index) => (
          <UploadedArticleItem key={index}>
            <ArticleTitle>{article}</ArticleTitle>
          </UploadedArticleItem>
        ))}
      </ArticleContainer>

      {/* 게시물 개수 */}
      <ArticleCountContainer>
        {isAutoUploadRunning && <LoadingCircle />}
        <ArticleCount variant="h5">{uploadedArticleList.length}</ArticleCount>
      </ArticleCountContainer>
    </Container>
  );
};

export default UploadedArticle;

const Container = styled(Stack)`
  position: relative;
  width: 100%;
  ${mixinFlex("column", "center", "center")};
  row-gap: 8px;
`;

const ArticleContainer = styled(Stack)`
  width: 100%;
  height: 500px;
  padding: 24px;
  row-gap: 8px;

  border: 2px solid ${({ theme }) => theme.palette.primary.main};
  border-radius: 8px;

  overflow-y: auto;
  ${mixinHideScrollbar}
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
}
to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const UploadedArticleItem = styled(Box)`
  width: 100%;
  padding: 16px;

  border: 1px solid ${({ theme }) => theme.palette.primary.light};
  border-radius: 8px;
  color: ${({ theme }) => theme.palette.text.primary};

  animation: ${fadeIn} 0.5s ease-in-out;
`;

const ArticleTitle = styled(Typography)`
  text-align: center;
  ${mixinEllipsis()}
`;

const ArticleCountContainer = styled(Stack)`
  ${mixinFlex("row", "center", "center")}
  column-gap: 8px;

  padding: 8px 16px;
  border-radius: 8px;

  position: absolute;
  bottom: 16px;
  right: 16px;

  background-color: ${({ theme }) => theme.palette.background.default + "99"};
`;

const LoadingCircle = styled(CircularProgress)`
  width: 24px !important;
  height: 24px !important;
`;

const ArticleCount = styled(Typography)`
  font-weight: bold;
  color: ${({ theme }) => theme.palette.text.primary};
`;
