"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        setScrollProgress((totalScroll / windowHeight) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[3.5px] bg-transparent z-50 pointer-events-none">
      <div
        className="h-full bg-[#3155E7] transition-all duration-75 ease-out shadow-[0_0_6px_#3155E7]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}
