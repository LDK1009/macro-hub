import { useAutoUploadStore } from "@/store/autopress/AutoUpload";
import { mixinEllipsis, mixinFlex, mixinHideScrollbar } from "@/styles/mixins";
import { Grid2, keyframes, Stack, styled, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";

const UploadedArticle = () => {
  const { uploadedArticleList } = useAutoUploadStore();
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (gridRef.current) {
      gridRef.current.scrollTop = gridRef.current.scrollHeight;
    }
  }, [uploadedArticleList]);

  return (
    <Container>
      <Typography variant="h5">업로드 개수 : {uploadedArticleList.length}</Typography>
      <GridContainer ref={gridRef} container spacing={2}>
        {uploadedArticleList.map((article, index) => (
          <Grid2 key={index} size={6}>
            <UploadedArticleItem key={index}>
              <ArticleTitle>{article}</ArticleTitle>
            </UploadedArticleItem>
          </Grid2>
        ))}
      </GridContainer>
    </Container>
  );
};

export default UploadedArticle;

const Container = styled(Stack)`
  width: 100%;
  ${mixinFlex("column", "center", "center")};
  row-gap:8px;
`;

const GridContainer = styled(Grid2)`
  width: 100%;
  height: 500px;
  padding: 24px;

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

const UploadedArticleItem = styled(Grid2)`
  ${mixinFlex("column", "center", "center")}
  width: 100%;
  height: 50px;
  padding: 8px 16px;

  border: 1px solid ${({ theme }) => theme.palette.primary.light};
  border-radius: 8px;
  color: ${({ theme }) => theme.palette.text.primary};

  animation: ${fadeIn} 0.5s ease-in-out;
`;

const ArticleTitle = styled(Typography)`
  ${mixinEllipsis()}
`;
