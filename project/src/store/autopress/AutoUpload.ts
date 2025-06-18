import { create } from "zustand";

interface AutoUploadStoreType {
  isAutoUploadRunning: boolean;
  setIsAutoUploadRunning: (value: boolean) => void;

  uploadedArticleList: string[];
  setUploadedArticleList: (value: string[]) => void;
  addUploadedArticle: (value: string) => void;
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
}));
