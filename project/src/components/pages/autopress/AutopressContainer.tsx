"use client";

import { Stack, styled } from "@mui/material";
import InputSection from "./container/InputSection";
import UploadedArticle from "./container/UploadedArticle";
import { mixinFlex } from "@/styles/mixins";
import ButtonGroup from "./container/ButtonGroup";
import CategorySelect from "./container/CategorySelect";

const AutopressContainer = () => {
  return (
    <Container>
      <ContentContainer>
        <InputSection />
        <CategorySelect/>
        <UploadedArticle />
        <ButtonGroup />
      </ContentContainer>
    </Container>
  );
};

export default AutopressContainer;

const Container = styled(Stack)`
  width: 100%;
  height: 100vh;
  ${mixinFlex("column", "center", "center")};
`;

const ContentContainer = styled(Stack)`
  width: 1200px;
  row-gap: 24px;
`;
