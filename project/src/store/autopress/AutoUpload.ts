import { ExtractContentEncodedParamsType } from "@/app/api/_utils/autopress/make-article";
import { create } from "zustand";

interface AutoUploadStoreType {
  isAutoUploadRunning: boolean;
  setIsAutoUploadRunning: (value: boolean) => void;

  uploadedArticleList: string[];
  setUploadedArticleList: (value: string[]) => void;
  addUploadedArticle: (value: string) => void;

  category: ExtractContentEncodedParamsType;
  setCategory: (value: ExtractContentEncodedParamsType) => void;
}

export const useAutoUploadStore = create<AutoUploadStoreType>((set) => ({
  ////////// 자동 업로드 실행 상태
  isAutoUploadRunning: false,
  setIsAutoUploadRunning: (value) =>
    set(() => ({
      isAutoUploadRunning: value,
    })),

  ////////// 업로드 완료 목록
  uploadedArticleList: [],
  setUploadedArticleList: (value) =>
    set(() => ({
      uploadedArticleList: value,
    })),
  addUploadedArticle: (value) =>
    set((state) => ({
      uploadedArticleList: [...state.uploadedArticleList, value],
    })),

  ////////// 카테고리
  category: "random",
  setCategory: (value) =>
    set(() => ({
      category: value,
    })),
}));
