import { create } from "zustand";

interface AutoUploadStoreType {
  isAutoUploadRunning: boolean;
  setIsAutoUploadRunning: (value: boolean) => void;

  uploadedArticleList: string[];
  setUploadedArticleList: (value: string[]) => void;
  addUploadedArticle: (value: string) => void;
}

export const useAutoUploadStore = create<AutoUploadStoreType>((set) => ({
  isAutoUploadRunning: false,
  setIsAutoUploadRunning: (value) =>
    set(() => ({
      isAutoUploadRunning: value,
    })),

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
