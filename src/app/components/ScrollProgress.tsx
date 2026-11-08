
"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;

      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (scrollHeight <= 0) {
        setProgress(0);
        return;
      }

      const percentage = (scrollTop / scrollHeight) * 100;

      setProgress(Math.min(100, Math.max(0, percentage)));
    };

    window.addEventListener("scroll", updateProgress, { passive: true });

    updateProgress();

    return () => {
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  return (
    <div
      className="fixed left-0 top-0 z-[10000] h-1 w-full bg-black/10"
      aria-hidden="true"
    >
      <div
        className="h-full bg-[#d7ff00] transition-[width] duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
