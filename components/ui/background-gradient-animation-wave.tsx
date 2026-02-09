"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

/** Wave gradient animation — uses wave/waveReverse keyframes from globals.css (--animate-wave-*). Theme: primary #072446. */
export const BackgroundGradientAnimationWave = ({
  gradientBackgroundStart = "rgb(180, 200, 230)",
  gradientBackgroundEnd = "rgb(7, 34, 70)",
  firstColor = "7, 34, 70",
  secondColor = "30, 60, 110",
  thirdColor = "50, 90, 150",
  fourthColor = "80, 120, 180",
  fifthColor = "100, 140, 200",
  pointerColor = "7, 34, 70",
  size = "80%",
  blendingValue = "hard-light",
  children,
  className,
  interactive = true,
  containerClassName,
}: {
  gradientBackgroundStart?: string;
  gradientBackgroundEnd?: string;
  firstColor?: string;
  secondColor?: string;
  thirdColor?: string;
  fourthColor?: string;
  fifthColor?: string;
  pointerColor?: string;
  size?: string;
  blendingValue?: string;
  children?: React.ReactNode;
  className?: string;
  interactive?: boolean;
  containerClassName?: string;
}) => {
  const interactiveRef = useRef<HTMLDivElement>(null);

  const [tgX, setTgX] = useState(0);
  const [tgY, setTgY] = useState(0);

  useEffect(() => {
    document.body.style.setProperty(
      "--gradient-background-start",
      gradientBackgroundStart
    );
    document.body.style.setProperty(
      "--gradient-background-end",
      gradientBackgroundEnd
    );
    document.body.style.setProperty("--first-color", firstColor);
    document.body.style.setProperty("--second-color", secondColor);
    document.body.style.setProperty("--third-color", thirdColor);
    document.body.style.setProperty("--fourth-color", fourthColor);
    document.body.style.setProperty("--fifth-color", fifthColor);
    document.body.style.setProperty("--pointer-color", pointerColor);
    document.body.style.setProperty("--size", size);
    document.body.style.setProperty("--blending-value", blendingValue);
  }, [
    gradientBackgroundStart,
    gradientBackgroundEnd,
    firstColor,
    secondColor,
    thirdColor,
    fourthColor,
    fifthColor,
    pointerColor,
    size,
    blendingValue,
  ]);

  const curRef = useRef({ x: 0, y: 0 });
  useEffect(() => {
    if (!interactive) return;
    let id: number;
    function move() {
      if (!interactiveRef.current) return;
      curRef.current.x += (tgX - curRef.current.x) / 20;
      curRef.current.y += (tgY - curRef.current.y) / 20;
      interactiveRef.current.style.transform = `translate(${Math.round(curRef.current.x)}px, ${Math.round(curRef.current.y)}px)`;
      id = requestAnimationFrame(move);
    }
    id = requestAnimationFrame(move);
    return () => cancelAnimationFrame(id);
  }, [interactive, tgX, tgY]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (interactiveRef.current) {
      const rect = interactiveRef.current.getBoundingClientRect();
      setTgX(event.clientX - rect.left);
      setTgY(event.clientY - rect.top);
    }
  };

  const [isSafari] = useState(
    () =>
      typeof navigator !== "undefined" &&
      /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
  );

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        containerClassName
      )}
    >
      {/* Gradient layer: absolute background only, no layout */}
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))]"
        aria-hidden
      />
      <svg className="absolute h-0 w-0" aria-hidden>
        <defs>
          <filter id="blurMe">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div
        className={cn(
          "gradients-container absolute inset-0 z-0",
          !interactive && "pointer-events-none",
          isSafari ? "blur-2xl" : "[filter:url(#blurMe)_blur(40px)]"
        )}
      >
        <div
          className="absolute left-[calc(50%-var(--size)/2)] top-[calc(50%-var(--size)/2)] h-[var(--size)] w-[var(--size)] opacity-100 [background:radial-gradient(circle_at_center,rgb(var(--first-color))_0%,transparent_50%)_no-repeat] [mix-blend-mode:var(--blending-value)] [transform-origin:center_center]"
          style={{ animation: "var(--animate-wave-first)" }}
        />
        <div
          className="absolute left-[calc(50%-var(--size)/2)] top-[calc(50%-var(--size)/2)] h-[var(--size)] w-[var(--size)] opacity-100 [background:radial-gradient(circle_at_center,rgba(var(--second-color),0.8)_0,rgba(var(--second-color),0)_50%)_no-repeat] [mix-blend-mode:var(--blending-value)] [transform-origin:calc(50%-400px)]"
          style={{ animation: "var(--animate-wave-second)" }}
        />
        <div
          className="absolute left-[calc(50%-var(--size)/2)] top-[calc(50%-var(--size)/2)] h-[var(--size)] w-[var(--size)] opacity-100 [background:radial-gradient(circle_at_center,rgba(var(--third-color),0.8)_0,rgba(var(--third-color),0)_50%)_no-repeat] [mix-blend-mode:var(--blending-value)] [transform-origin:calc(50%+400px)]"
          style={{ animation: "var(--animate-wave-third)" }}
        />
        <div
          className="absolute left-[calc(50%-var(--size)/2)] top-[calc(50%-var(--size)/2)] h-[var(--size)] w-[var(--size)] opacity-70 [background:radial-gradient(circle_at_center,rgba(var(--fourth-color),0.8)_0,rgba(var(--fourth-color),0)_50%)_no-repeat] [mix-blend-mode:var(--blending-value)] [transform-origin:calc(50%-200px)]"
          style={{ animation: "var(--animate-wave-fourth)" }}
        />
        <div
          className="absolute left-[calc(50%-var(--size)/2)] top-[calc(50%-var(--size)/2)] h-[var(--size)] w-[var(--size)] opacity-100 [background:radial-gradient(circle_at_center,rgba(var(--fifth-color),0.8)_0,rgba(var(--fifth-color),0)_50%)_no-repeat] [mix-blend-mode:var(--blending-value)] [transform-origin:calc(50%-800px)_calc(50%+800px)]"
          style={{ animation: "var(--animate-wave-fifth)" }}
        />
        {interactive && (
          <div
            ref={interactiveRef}
            onMouseMove={handleMouseMove}
            className="absolute -left-1/2 -top-1/2 h-full w-full opacity-70 [background:radial-gradient(circle_at_center,rgba(var(--pointer-color),0.8)_0,rgba(var(--pointer-color),0)_50%)_no-repeat] [mix-blend-mode:var(--blending-value)]"
          />
        )}
      </div>

      {/* Content layer: above gradient (z-0) but below header (z-50) so nav dropdown isn't covered */}
      <div
        className={cn(
          "absolute inset-0 z-10 flex items-center justify-center",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};
