import React from "react";
import AutoUploadButton from "./AutoUploadButton";
import GoToBlogButton from "./GoToBlogButton";
import { Stack, styled } from "@mui/material";

const ButtonGroup = () => {
  return (
    <Container>
      <AutoUploadButton />
      <GoToBlogButton />
    </Container>
  );
};

export default ButtonGroup;

const Container = styled(Stack)`
  width: 100%;
  row-gap: 8px;
`;
