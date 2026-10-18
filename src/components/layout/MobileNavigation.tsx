"use client";

import React, { useState } from "react";
import Link from "next/link";
import { navItems } from "./Navigation";
import { Menu, X, FileText, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { profileData } from "@/data/profile";

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        className="p-2 border-2 border-[#171717] bg-[#FFFFFF] text-[#171717] hover:bg-[#C8FF00] transition-colors shadow-[2px_2px_0px_0px_#171717]"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {isOpen && (
        <div className="fixed inset-x-0 top-[65px] bottom-0 bg-[#F6F0E5] border-b-2 border-[#171717] z-50 p-6 flex flex-col justify-between overflow-y-auto">
          <div className="flex flex-col gap-2 font-mono text-sm uppercase">
            <span className="text-zinc-600 text-xs tracking-widest mb-2 font-black">
              // DIRECTORY INDEX
            </span>
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between p-3.5 border-2 border-[#171717] bg-[#FFFFFF] hover:bg-[#C8FF00] hover:translate-x-1 transition-all shadow-[2.5px_2.5px_0px_0px_#171717]"
              >
                <span className="font-black text-[#171717]">{item.name}</span>
                <span className="text-xs text-zinc-500 font-bold">0{index + 1}</span>
              </Link>
            ))}

            <a
              href={profileData.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center justify-center gap-2 p-3.5 bg-[#C8FF00] text-[#171717] font-black border-2 border-[#171717] shadow-[3px_3px_0px_0px_#171717]"
              onClick={() => setIsOpen(false)}
            >
              <FileText className="w-4 h-4" />
              <span>Resume (PDF)</span>
            </a>
          </div>

          <div className="mt-8 pt-6 border-t-2 border-[#171717]">
            <div className="flex items-center justify-around text-[#171717]">
              <a
                href={profileData.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border-2 border-[#171717] bg-white hover:bg-[#C8FF00] shadow-[2px_2px_0px_0px_#171717]"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={profileData.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border-2 border-[#171717] bg-white hover:bg-[#3155E7] hover:text-white shadow-[2px_2px_0px_0px_#171717]"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${profileData.links.email}`}
                className="p-2 border-2 border-[#171717] bg-white hover:bg-[#FF7048] hover:text-white shadow-[2px_2px_0px_0px_#171717]"
                aria-label="Email Kunal"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-center font-mono text-xs text-zinc-600 mt-4 font-bold">
              KUNAL YELGATE // SGGSIE&amp;T CS WORKSTATION
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
