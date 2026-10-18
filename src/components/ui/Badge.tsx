import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "lime" | "cobalt" | "coral" | "cyan" | "lavender" | "emerald" | "ink" | "outline";
  size?: "sm" | "md";
  dot?: boolean;
  pulse?: boolean;
}

export function Badge({
  className,
  variant = "default",
  size = "md",
  dot = false,
  pulse = false,
  children,
  ...props
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center font-mono font-bold tracking-tight border-2 border-[#171717] select-none shadow-[2px_2px_0px_0px_#171717]";

  const variantStyles = {
    default: "bg-[#FFFFFF] text-[#171717]",
    lime: "bg-[#C8FF00] text-[#171717]",
    cobalt: "bg-[#3155E7] text-white",
    coral: "bg-[#FF7048] text-white",
    cyan: "bg-[#00D5E8] text-[#171717]",
    lavender: "bg-[#E7DEFF] text-[#171717]",
    emerald: "bg-[#10B981] text-white",
    ink: "bg-[#171717] text-[#C8FF00]",
    outline: "bg-transparent text-[#171717]",
  };

  const sizeStyles = {
    sm: "text-[10px] uppercase px-2 py-0.5 gap-1.5",
    md: "text-xs px-2.5 py-1 gap-2",
  };

  const dotColors = {
    default: "bg-[#171717]",
    lime: "bg-[#171717]",
    cobalt: "bg-white",
    coral: "bg-white",
    cyan: "bg-[#171717]",
    lavender: "bg-[#3155E7]",
    emerald: "bg-white",
    ink: "bg-[#C8FF00]",
    outline: "bg-[#171717]",
  };

  return (
    <span className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)} {...props}>
      {dot && (
        <span className="relative flex h-2 w-2">
          {pulse && (
            <span
              className={cn(
                "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
                dotColors[variant]
              )}
            />
          )}
          <span className={cn("relative inline-flex rounded-full h-2 w-2", dotColors[variant])} />
        </span>
      )}
      {children}
    </span>
  );
}
