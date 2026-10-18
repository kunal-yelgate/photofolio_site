"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Navigation } from "./Navigation";
import { MobileNavigation } from "./MobileNavigation";
import { profileData } from "@/data/profile";
import { FileText, ArrowUpRight, Mail } from "lucide-react";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 border-b-2 border-[#171717] ${
        scrolled
          ? "bg-[#F6F0E5]/95 backdrop-blur-md shadow-[0_4px_12px_rgba(23,23,23,0.08)]"
          : "bg-[#F6F0E5]"
      }`}
    >
      {/* Top Telemetry Strip */}
      <div className="border-b border-zinc-300 bg-[#EFE9DC] px-4 py-1 font-mono text-[11px] text-zinc-700 hidden sm:flex justify-between items-center select-none font-semibold">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-[#171717]">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            STATION: SGGSIE&amp;T NANDED
          </span>
          <span className="text-zinc-400">|</span>
          <span className="text-[#3155E7] font-bold">STATUS: READY FOR SDE ROLES</span>
          <span className="text-zinc-400">|</span>
          <span className="text-zinc-600">{profileData.systemSpecs.focus}</span>
        </div>
        <div className="flex items-center gap-3 text-zinc-700">
          <span>PORTFOLIO_V2.5</span>
          <span className="text-zinc-400">|</span>
          <a
            href={profileData.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#3155E7] transition-colors flex items-center gap-1 font-bold"
          >
            <span>GITHUB/kunal-yelgate</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Wordmark Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 focus-visible:outline-3 focus-visible:outline-offset-2"
          aria-label="Kunal Yelgate - Home"
        >
          <div className="w-9 h-9 bg-[#C8FF00] text-[#171717] font-mono font-black flex items-center justify-center border-2 border-[#171717] shadow-[2.5px_2.5px_0px_0px_#171717] group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform text-sm">
            KY
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-base font-black tracking-tight text-[#171717] group-hover:text-[#3155E7] transition-colors">
              KUNAL YELGATE
            </span>
            <span className="font-mono text-[10px] text-zinc-600 tracking-wider uppercase -mt-1 font-bold">
              CS // SYSTEMS &bull; AI TOOLING
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <Navigation />

        {/* Action CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 font-mono text-xs font-bold text-[#171717] border-2 border-[#171717] bg-[#FFFFFF] hover:bg-[#E7DEFF] transition-colors shadow-[2px_2px_0px_0px_#171717]"
          >
            <Mail className="w-3.5 h-3.5 text-[#3155E7]" />
            <span>Contact</span>
          </Link>

          <a
            href={profileData.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 font-mono text-xs font-bold uppercase tracking-wider bg-[#C8FF00] text-[#171717] border-2 border-[#171717] shadow-[2.5px_2.5px_0px_0px_#171717] hover:bg-[#bbf200] active:translate-x-0.5 active:translate-y-0.5 transition-all"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Nav Button */}
        <MobileNavigation />
      </div>
    </header>
  );
}
