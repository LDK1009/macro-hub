"use client";

import { canvasWrapText } from "@/utils/canvas";
import { useState } from "react";
import React from "react";

const MainContainer = () => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const generateAndDownloadImage = async () => {
    setLoading(true);

    const img = new Image();
    img.src = "/apple.png"; // public 디렉토리에 사과 이미지 넣기

    img.onload = async () => {
      // 캔버스 생성
      const canvas = document.createElement("canvas");
      // 캔버스 크기
      const width = 740;
      const height = 740;

      // 캔버스 크기 설정
      canvas.width = width;
      canvas.height = height;

      // 캔버스 컨텍스트 생성
      const ctx = canvas.getContext("2d");

      // 캔버스 컨텍스트 생성 확인
      if (!ctx) return;

      // 배경색 설정
      ctx.fillStyle = "#26539C"; // 흰색 배경
      ctx.fillRect(0, 0, width, height);

      // 배경 이미지 그리기
      ctx?.drawImage(img, 0, 0, width, height);

      // 텍스트 색상 설정
      ctx.fillStyle = "#FFFFFF"; // 텍스트 색상
      ctx.font = "bold 60px sans-serif";

      // 텍스트 줄바꿈
      const maxWidth = width - 300; // 좌우 여백 50px씩
      const lines = canvasWrapText(ctx, text, maxWidth);

      // 텍스트 중앙 정렬
      const lineHeight = 90; // 줄 간격
      const totalHeight = lines.length * lineHeight;
      const startY = (height - totalHeight) / 2 + lineHeight; // 수직 중앙 정렬

      // 텍스트 그리기
      lines.forEach((line, index) => {
        const textWidth = ctx.measureText(line).width;
        const x = (width - textWidth) / 2; // 수평 중앙 정렬
        const y = startY + index * lineHeight;
        ctx.fillText(line, x, y);
      });

      // 캔버스를 이미지로 변환
      canvas.toBlob((blob) => {
        if (!blob) return;

        // 이미지 다운로드
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "thumbnail.png";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        setLoading(false);
      }, "image/png");
    };
  };

  return (
    <div className="p-10">
      <input
        type="text"
        value={text}
        placeholder="예: 맛있는 사과"
        onChange={(e) => setText(e.target.value)}
        className="border px-4 py-2 rounded"
      />
      <button
        onClick={generateAndDownloadImage}
        className="ml-4 bg-blue-600 text-white px-4 py-2 rounded"
        disabled={loading}
      >
        {loading ? "생성 중..." : "썸네일 생성"}
      </button>
    </div>
  );
};

export default MainContainer;
