"use client";

import { Box, styled } from "@mui/material";
import ImageBanner from "./container/ImageBanner";

const MainContainer = () => {
  return (
    <Container>
      <ImageBanner />
      메인 페이지
    </Container>
  );
};

export default MainContainer;

const Container = styled(Box)`
  padding-top: 64px;
`;
