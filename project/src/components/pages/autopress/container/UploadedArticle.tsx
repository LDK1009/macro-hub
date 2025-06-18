import { useAutoUploadStore } from "@/store/autopress/AutoUpload";
import { mixinEllipsis, mixinFlex, mixinMultilineEllipsis } from "@/styles/mixins";
import { Box, Button, keyframes, Stack, styled, Typography } from "@mui/material";
import React from "react";

const UploadedArticle = () => {
  const { uploadedArticleList, addUploadedArticle } = useAutoUploadStore();

  return (
    <Container>
      {uploadedArticleList.map((article) => (
        <UploadedArticleItem key={article}>
          <ArticleTitle>{article}</ArticleTitle>
        </UploadedArticleItem>
      ))}
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          addUploadedArticle("가나다라마바사아자차카타파사가나다라마바사아자차카타파사");
        }}
      >
        추가
      </Button>
    </Container>
  );
};

export default UploadedArticle;

const Container = styled(Stack)`
  width: 100%;
  ${mixinFlex("column", "center", "center")};
  row-gap: 8px;
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
  ${mixinFlex("column", "center", "center")}
  width: 200px;
  height: 50px;
  padding: 8px 16px;

  border: 1px solid ${({ theme }) => theme.palette.secondary.dark};
  border-radius: 8px;
  color: ${({ theme }) => theme.palette.text.primary};

  animation: ${fadeIn} 0.5s ease-in-out;
`;

const ArticleTitle = styled(Typography)`
  ${mixinEllipsis()}
`;
