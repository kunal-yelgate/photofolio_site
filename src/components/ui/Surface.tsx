import React from "react";
import { cn } from "@/lib/utils";

export interface SurfaceProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "skeuomorphic" | "inset" | "accent-border";
  headerTitle?: string;
  headerBadge?: React.ReactNode;
  statusLed?: "green" | "lime" | "amber" | "none";
}

export function Surface({
  className,
  variant = "default",
  headerTitle,
  headerBadge,
  statusLed = "none",
  children,
  ...props
}: SurfaceProps) {
  const variantStyles = {
    default:
      "bg-[#11141b] border-2 border-[#242c3b] shadow-[4px_4px_0px_0px_#000000]",
    elevated:
      "bg-[#161a23] border-2 border-[#2d374a] shadow-[6px_6px_0px_0px_#000000]",
    skeuomorphic:
      "skeuo-panel",
    inset:
      "skeuo-inset",
    "accent-border":
      "bg-[#11141b] border-2 border-[#ccff00] shadow-[4px_4px_0px_0px_#ccff00]",
  };

  const ledStyles = {
    green: "led-green",
    lime: "led-lime",
    amber: "led-amber",
    none: "",
  };

  return (
    <div className={cn(variantStyles[variant], className)} {...props}>
      {headerTitle && (
        <div className="flex items-center justify-between border-b border-[#242c3b] bg-[#0c0e13]/80 px-4 py-2.5">
          <div className="flex items-center gap-2">
            {statusLed !== "none" && <span className={cn("led-indicator", ledStyles[statusLed])} />}
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-zinc-300">
              {headerTitle}
            </span>
          </div>
          {headerBadge && <div>{headerBadge}</div>}
        </div>
      )}
      <div className={headerTitle ? "p-4 sm:p-6" : ""}>{children}</div>
    </div>
  );
}
