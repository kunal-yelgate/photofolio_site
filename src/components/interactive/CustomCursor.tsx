"use client";

import { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);
  const [isLink, setIsLink] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    // Only enable if pointer is fine and user has not requested reduced motion
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!finePointer || prefersReducedMotion) {
      return;
    }

    setIsSupported(true);

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest("a, button, input, textarea, [role='button']");
        const linkElem = target.closest("a");
        setHovered(!!interactive);
        setIsLink(!!linkElem);
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  // Smooth follower animation
  useEffect(() => {
    if (!isSupported) return;

    let animationFrameId: number;
    const follow = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.22,
        y: prev.y + (position.y - prev.y) * 0.22,
      }));
      animationFrameId = requestAnimationFrame(follow);
    };

    animationFrameId = requestAnimationFrame(follow);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position, isSupported]);

  if (!isSupported || !isVisible) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden transition-opacity duration-300">
      {/* Central Indicator */}
      <div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#171717] transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-75"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      />

      {/* Trailing Ring with context-aware expansion */}
      <div
        className={`fixed top-0 left-0 rounded-full border-2 border-[#171717] transition-all duration-150 transform -translate-x-1/2 -translate-y-1/2 ${
          hovered
            ? isLink
              ? "w-10 h-10 bg-[#C8FF00]/50 border-[#171717] shadow-sm"
              : "w-8 h-8 bg-[#3155E7]/30 border-[#3155E7]"
            : "w-6 h-6 border-[#171717]/50 opacity-60"
        }`}
        style={{
          transform: `translate3d(${trailingPos.x - (hovered ? (isLink ? 20 : 16) : 12)}px, ${
            trailingPos.y - (hovered ? (isLink ? 20 : 16) : 12)
          }px, 0)`,
        }}
      />
    </div>
  );
}
