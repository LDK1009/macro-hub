import { Box, styled, Typography } from "@mui/material";
import React from "react";

const ImageBanner = () => {
  return (
    <Container>
      <StyledImage src="/img/main-banner.jpg" alt="main-banner" />
      <Layer>
        <Typography variant="h1">MacroHub</Typography>
        <Typography variant="h6">모든 매크로 집합소</Typography>
        <Typography variant="h6">매크로, 이젠 구독제로 이용하세요! </Typography>
      </Layer>
    </Container>
  );
};

export default ImageBanner;

const Container = styled(Box)`
  width: 100%;
  height: auto;
  position: relative;
`;

const StyledImage = styled("img")`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const Layer = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3));

  color : ${({theme}) => theme.palette.common.white};
`;
