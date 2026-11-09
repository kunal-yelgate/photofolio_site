
"use client";

import { useState } from "react";

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative z-50 border-b-2 border-black bg-[#f4f1e8] px-5 py-5 md:px-12">
      <div className="flex items-center justify-between">
        {/* LOGO */}
        <a
          href="#home"
          className="text-2xl font-black tracking-tighter"
          onClick={() => setMenuOpen(false)}
        >
          KY<span className="text-[#777]">.</span>
        </a>

        {/* DESKTOP MENU */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-black uppercase tracking-wider transition hover:text-[#777]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="flex h-11 w-11 items-center justify-center border-2 border-black text-2xl font-black md:hidden"
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="absolute left-0 top-full w-full border-b-2 border-black bg-[#d7ff00] p-5 md:hidden">
          <div className="flex flex-col">
            {navLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="border-b-2 border-black py-5 text-xl font-black uppercase tracking-wider"
              >
                <span className="mr-4 text-sm">0{index + 1}</span>
                {link.label}
                <span className="float-right">↗</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
