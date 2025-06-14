// 텍스트 줄바꿈 및 중앙 정렬 함수
export const canvasWrapText = (ctx: CanvasRenderingContext2D, text: string, maxWidth: number) => {
  const words = text.split("");
  const lines = [];
  let currentLine = words[0];

  for (let i = 1; i < words.length; i++) {
    const word = words[i];
    const width = ctx.measureText(currentLine + word).width;

    if (width < maxWidth) {
      currentLine += word;
    } else {
      lines.push(currentLine);
      currentLine = word;
    }
  }
  lines.push(currentLine);
  return lines;
};
