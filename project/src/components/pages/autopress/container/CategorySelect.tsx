import { ExtractContentEncodedParamsType } from "@/app/api/_utils/autopress/make-article";
import { useAutoUploadStore } from "@/store/autopress/AutoUpload";
import { mixinMuiTextInputBorder } from "@/styles/mixins";
import { InputLabel, MenuItem, Select, Stack, styled } from "@mui/material";
import React from "react";

const CategorySelect = () => {
  const { category, setCategory } = useAutoUploadStore();
  const categoryList = [
    {
      value: "random",
      label: "🎲 랜덤",
    },
    {
      value: "latest",
      label: "🔥 최신",
    },
    {
      value: "headlines",
      label: "📰 헤드라인",
    },
    {
      value: "politics",
      label: "⚖️ 정치",
    },
    {
      value: "economy",
      label: "📈 경제",
    },
    {
      value: "society",
      label: "🏛️ 사회",
    },
    {
      value: "local",
      label: "🏡 지역",
    },
    {
      value: "international",
      label: "🌏 세계",
    },
    {
      value: "culture",
      label: "🎬 문화 · 연예",
    },
    {
      value: "sports",
      label: "🏆 스포츠",
    },
    {
      value: "weather",
      label: "🌤️ 날씨",
    },
  ];

  return (
    <Container>
      <InputLabel>카테고리</InputLabel>
      <StyledSelect
        value={category}
        onChange={(e) => {
          setCategory(e.target.value as ExtractContentEncodedParamsType);
        }}
        MenuProps={{
          PaperProps: {
            sx: {
              "& .MuiList-root": {
                padding: 0,
                backgroundColor: (theme) => theme.palette.background.default,
                border: (theme) => `1px solid ${theme.palette.primary.light}`,
                borderRadius: "0px 0px 8px 8px",
                borderTop: "none",
              },
            },
          },
        }}
      >
        {categoryList.map((el) => {
          return (
            <StyledMenuItem key={el.value} value={el.value}>
              {el.label}
            </StyledMenuItem>
          );
        })}
      </StyledSelect>
    </Container>
  );
};

export default CategorySelect;

const Container = styled(Stack)`
  width: 100%;
  row-gap: 8px;

  & .MuiSvgIcon-root {
    color: ${({ theme }) => theme.palette.primary.light};
  }
`;

const StyledSelect = styled(Select)`
  width: 100%;
  color: ${({ theme }) => theme.palette.text.primary};

  & .MuiOutlinedInput-notchedOutline span {
    color: ${({ theme }) => theme.palette.text.primary};
  }

  ${({ theme }) => mixinMuiTextInputBorder(theme)}
`;

const StyledMenuItem = styled(MenuItem)`
  padding: 8px 16px;

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.dark};
  }

  transition: background-color 0.3s ease;
`;
