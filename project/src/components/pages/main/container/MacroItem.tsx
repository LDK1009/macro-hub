import { useLoadingRouter } from "@/hooks/useLoadingRouter";
import { mixinFlex } from "@/styles/mixins";
import { Stack, styled, Typography } from "@mui/material";
import React from "react";

const MacroItem = ({name, link}:{name:string, link:string}) => {
  const { navigateWithLoading } = useLoadingRouter();
  return (
    <Container onClick={() => navigateWithLoading(link)}>
      <Typography variant="h2" fontWeight={"bold"}>
        {name}
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
