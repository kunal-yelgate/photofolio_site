"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { profileData } from "@/data/profile";
import { navItems } from "./Navigation";
import { Mail, ArrowUp, FileText, BookOpen } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export function SiteFooter() {
  const [currentYear, setCurrentYear] = useState<number>(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t-2 border-[#171717] bg-[#171717] text-zinc-300 font-sans">
      {/* Top Banner */}
      <div className="border-b border-zinc-800 bg-[#121212] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#C8FF00] text-[#171717] font-mono font-black flex items-center justify-center border-2 border-black shadow-[3px_3px_0px_0px_#FFFFFF]">
              KY
            </div>
            <div>
              <p className="font-mono text-base font-black text-white tracking-tight">
                KUNAL YELGATE
              </p>
              <p className="font-mono text-xs text-zinc-400">
                CS Undergraduate // Systems &bull; AI Tooling &bull; Backend
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <span className="flex items-center gap-2 text-white font-bold">
              <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
              STATUS: READY FOR INTERNSHIPS
            </span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 border-2 border-white bg-[#171717] text-white hover:bg-[#C8FF00] hover:text-[#171717] font-bold transition-colors shadow-[2px_2px_0px_0px_#FFFFFF] active:translate-x-0.5 active:translate-y-0.5"
              aria-label="Scroll back to top"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1: Statement */}
          <div className="md:col-span-2 space-y-4">
            <p className="font-mono text-xs uppercase tracking-widest text-[#C8FF00] font-black">
              // ARCHITECTURAL PHILOSOPHY
            </p>
            <p className="text-zinc-300 text-sm leading-relaxed max-w-md font-medium">
              Software is best built through curiosity, rigorous architecture, and honest testing.
              Every project here reflects real experimentation, source code, and practical trade-offs.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={profileData.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border-2 border-zinc-700 bg-[#222222] text-white hover:bg-[#C8FF00] hover:text-black transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={profileData.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border-2 border-zinc-700 bg-[#222222] text-white hover:bg-[#3155E7] transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={profileData.links.devto}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border-2 border-zinc-700 bg-[#222222] text-white hover:bg-[#C8FF00] hover:text-black transition-colors"
                aria-label="DEV Community"
              >
                <BookOpen className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${profileData.links.email}`}
                className="p-2 border-2 border-zinc-700 bg-[#222222] text-white hover:bg-[#FF7048] transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={profileData.links.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border-2 border-zinc-700 bg-[#222222] text-white hover:bg-[#C8FF00] hover:text-black transition-colors"
                aria-label="Resume PDF"
              >
                <FileText className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-[#00D5E8] mb-4 font-black">
              DIRECTORY
            </p>
            <ul className="space-y-2 font-mono text-xs font-bold">
              {navItems.slice(0, 4).map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-[#C8FF00] transition-colors inline-block py-0.5 text-zinc-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Sections & Writing */}
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-[#FF7048] mb-4 font-black">
              EXPLORE
            </p>
            <ul className="space-y-2 font-mono text-xs font-bold">
              {navItems.slice(4).map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-[#00D5E8] transition-colors inline-block py-0.5 text-zinc-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={profileData.links.devto}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C8FF00] transition-colors inline-block py-0.5 text-zinc-300"
                >
                  DEV Articles &rarr;
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-zinc-500">
          <p>&copy; {currentYear} Kunal Yelgate. Built with Next.js 16, TypeScript &amp; Neo-Brutalist CSS.</p>
          <p className="flex items-center gap-2">
            <span className="text-zinc-400">UPTIME: 100%</span>
            <span>&bull;</span>
            <span className="text-[#10B981]">WCAG 2.2 AA VERIFIED</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
