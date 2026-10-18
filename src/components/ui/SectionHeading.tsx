import React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps {
  number: string;
  tag: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
  accentColor?: "lime" | "cobalt" | "coral" | "cyan" | "violet";
}

export function SectionHeading({
  number,
  tag,
  title,
  subtitle,
  className,
  align = "left",
  accentColor = "lime",
}: SectionHeadingProps) {
  const accentStyles = {
    lime: "bg-[#C8FF00] text-[#171717]",
    cobalt: "bg-[#3155E7] text-white",
    coral: "bg-[#FF7048] text-white",
    cyan: "bg-[#00D5E8] text-[#171717]",
    violet: "bg-[#8A63F6] text-white",
  };

  return (
    <div
      className={cn(
        "mb-12 sm:mb-16",
        align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-3xl",
        className
      )}
    >
      <div
        className={cn(
          "inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest mb-3 border-2 border-[#171717] px-3 py-1 shadow-[3px_3px_0px_0px_#171717]",
          accentStyles[accentColor],
          align === "center" ? "justify-center" : ""
        )}
      >
        <span>{number}</span>
        <span>//</span>
        <span>{tag}</span>
      </div>
      <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#171717] uppercase font-sans leading-[1.08]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-zinc-700 font-sans leading-relaxed font-medium">
          {subtitle}
        </p>
      )}
    </div>
  );
}
