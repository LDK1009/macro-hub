import { WpInfoType } from "@/types/autopress/wordpress";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface WordpressInfoStoreType {
  wpInfo: WpInfoType;
  setWpInfo: (value: WpInfoType) => void;
}

export const useWordpressInfoStore = create<WordpressInfoStoreType>()(
  persist(
    (set) => ({
      ////////// 워드프레스 정보
      wpInfo: {
        wpUrl: "",
        wpId: "",
        wpApplicationPw: "",
      },
      setWpInfo: (value) => set(() => ({ wpInfo: value })),
    }),
    {
      name: "wordpress-info-storage", // localStorage 키 이름 (선택사항)
    }
  )
);