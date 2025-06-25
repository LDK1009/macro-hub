"use client";

import { Stack, styled } from "@mui/material";
import MacroItem from "./container/MacroItem";
import { mixinFlex } from "@/styles/mixins";

const MainContainer = () => {
  return (
    <Container>
      <MacroItem />
    </Container>
  );
};

export default MainContainer;

const Container = styled(Stack)`
  ${mixinFlex("column", "center", "center")}
  width: 100%;
  height: 100vh;
  padding-top: 64px;
`;
