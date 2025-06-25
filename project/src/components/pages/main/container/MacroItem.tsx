import { useLoadingRouter } from "@/hooks/useLoadingRouter";
import { mixinFlex } from "@/styles/mixins";
import { Stack, styled, Typography } from "@mui/material";
import React from "react";

const MacroItem = () => {
  const { navigateWithLoading } = useLoadingRouter();
  return (
    <Container onClick={() => navigateWithLoading("/autopress")}>
      <Typography variant="h2" fontWeight={"bold"}>
        ⚙ 오토프레스
      </Typography>
    </Container>
  );
};

export default MacroItem;

const Container = styled(Stack)`
  ${mixinFlex("column", "center", "center")}
  background-color: ${({ theme }) => theme.palette.primary.dark};
  width: 500px;
  height: 500px;
  border-radius: 10px;
  cursor: pointer;
`;
