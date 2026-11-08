
"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });

      setVisible(true);

      const target = event.target as HTMLElement | null;

      setHovering(
        !!target?.closest("a, button, input, textarea, select")
      );
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        opacity: visible ? 1 : 0,
      }}
    >
      <div
        className={`-translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-black bg-[#d7ff00] transition-all duration-150 ${
          hovering ? "h-12 w-12" : "h-5 w-5"
        }`}
      />
    </div>
  );
}
