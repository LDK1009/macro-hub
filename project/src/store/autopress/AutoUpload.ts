import { create } from "zustand";

interface AutoUploadStoreType {
  isAutoUploadRunning: boolean;
  setIsAutoUploadRunning: (value: boolean) => void;
}

export const useAutoUploadStore = create<AutoUploadStoreType>((set) => ({
  isAutoUploadRunning: false,
  setIsAutoUploadRunning: (value) =>
    set(() => ({
      isAutoUploadRunning: value,
    })),
}));
