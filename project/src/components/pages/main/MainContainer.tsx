"use client";

import { mixinContainer } from "@/styles/mixins";
import { Box, styled } from "@mui/material";

const MainContainer = () => {
  return <Container>메인 페이지</Container>;
};

export default MainContainer;

const Container = styled(Box)`
  ${mixinContainer}
`;
