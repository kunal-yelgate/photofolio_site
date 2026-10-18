"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "cobalt" | "coral" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      icon,
      iconPosition = "left",
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-mono font-bold uppercase tracking-tight transition-all duration-100 focus-visible:outline-3 focus-visible:outline-offset-2 active:translate-x-0.5 active:translate-y-0.5 disabled:opacity-50 disabled:pointer-events-none select-none cursor-pointer";

    const variantStyles = {
      primary:
        "bg-[#C8FF00] text-[#171717] border-2 border-[#171717] shadow-[3px_3px_0px_0px_#171717] hover:bg-[#bbf200] hover:shadow-[5px_5px_0px_0px_#171717] active:shadow-[1px_1px_0px_0px_#171717]",
      cobalt:
        "bg-[#3155E7] text-white border-2 border-[#171717] shadow-[3px_3px_0px_0px_#171717] hover:bg-[#2745c9] hover:shadow-[5px_5px_0px_0px_#171717] active:shadow-[1px_1px_0px_0px_#171717]",
      coral:
        "bg-[#FF7048] text-white border-2 border-[#171717] shadow-[3px_3px_0px_0px_#171717] hover:bg-[#f25c31] hover:shadow-[5px_5px_0px_0px_#171717] active:shadow-[1px_1px_0px_0px_#171717]",
      secondary:
        "bg-[#FFFFFF] text-[#171717] border-2 border-[#171717] shadow-[3px_3px_0px_0px_#171717] hover:bg-[#FAF6EE] hover:text-[#3155E7] hover:shadow-[5px_5px_0px_0px_#171717] active:shadow-[1px_1px_0px_0px_#171717]",
      outline:
        "bg-transparent text-[#171717] border-2 border-[#171717] shadow-[3px_3px_0px_0px_#171717] hover:bg-[#FFFFFF] hover:shadow-[5px_5px_0px_0px_#171717] active:shadow-[1px_1px_0px_0px_#171717]",
      ghost:
        "bg-transparent text-[#171717] hover:bg-black/5 border border-transparent",
    };

    const sizeStyles = {
      sm: "text-xs px-3 py-1.5 gap-1.5",
      md: "text-xs sm:text-sm px-4 py-2 gap-2",
      lg: "text-sm sm:text-base px-6 py-3 gap-2.5",
    };

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      >
        {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";
