"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface NavItem {
  name: string;
  href: string;
  isExternal?: boolean;
}

export const navItems: NavItem[] = [
  { name: "About", href: "/#about" },
  { name: "Projects", href: "/#projects" },
  { name: "Architecture", href: "/#arena" },
  { name: "Skills", href: "/#skills" },
  { name: "Experience", href: "/#experience" },
  { name: "Education", href: "/#education" },
  { name: "Contact", href: "/#contact" },
];

export function Navigation() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    if (pathname !== "/") return;

    const sections = navItems
      .filter((item) => item.href.startsWith("/#"))
      .map((item) => item.href.replace("/#", ""));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-25% 0px -65% 0px" }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return (
    <nav className="hidden lg:flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider">
      {navItems.map((item) => {
        const sectionId = item.href.replace("/#", "");
        const isActive = pathname === "/" && activeSection === sectionId;

        return (
          <Link
            key={item.name}
            href={item.href}
            className={`px-3 py-1.5 transition-all duration-150 relative border-2 ${
              isActive
                ? "bg-[#171717] text-[#C8FF00] border-[#171717] shadow-[2.5px_2.5px_0px_0px_#171717]"
                : "text-zinc-700 border-transparent hover:text-[#171717] hover:border-[#171717] hover:bg-[#FFFFFF] shadow-none"
            }`}
          >
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
}
