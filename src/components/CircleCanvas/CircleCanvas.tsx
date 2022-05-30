import React, { ElementRef, LegacyRef, useEffect } from "react";
import { CanvasProps } from "../../interfaces/CanvasProps";

export const CircleCanvas = (props: CanvasProps) => {
  const { width, height, pointCount, animationSpeed }: CanvasProps = props;
  const canvasRef: LegacyRef<HTMLCanvasElement> = React.createRef();

  useEffect(() => {
    const ctx: CanvasRenderingContext2D | null | undefined =
      canvasRef.current?.getContext("2d");
    if (!ctx) return;
    drawOnCanvas(ctx);
  });

  const drawOnCanvas = (ctx: CanvasRenderingContext2D) => {
    ctx.moveTo(0, 0);
    ctx.lineTo(200, 100);
    ctx.stroke();
  };

  return <canvas ref={canvasRef} width={width} height={height}></canvas>;
};
