"use client";

import React from "react";
import { experienceData } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { ExternalLink, GitBranch, Terminal } from "lucide-react";

export function ExperienceSection() {
  const typeBadgeColors = {
    "open-source": "bg-[#3155E7] text-white",
    "community": "bg-[#FF7048] text-white",
    "leadership": "bg-[#C8FF00] text-[#171717]",
    "project": "bg-[#00D5E8] text-[#171717]",
  };

  return (
    <section id="experience" className="py-24 border-b-2 border-[#171717] bg-[#FAF8F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="05"
          tag="TRACK RECORD"
          title="EXPERIENCE &amp; OPEN-SOURCE"
          subtitle="Honest account of open-source repository investigations, technical writing, and peer engineering collaboration."
          accentColor="cyan"
        />

        <div className="space-y-6">
          {experienceData.map((item, index) => (
            <div
              key={item.id}
              className="border-2 border-[#171717] bg-[#FFFFFF] shadow-[5px_5px_0px_0px_#171717] p-6 sm:p-8 hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-[#171717] pb-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span
                      className={`font-mono text-xs font-black uppercase px-2 py-0.5 border border-[#171717] shadow-sm ${
                        typeBadgeColors[item.type] || "bg-[#171717] text-white"
                      }`}
                    >
                      0{index + 1} // {item.type.toUpperCase()}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-[#171717] font-sans">
                    {item.role}
                  </h3>
                  <p className="font-mono text-sm text-[#3155E7] font-bold mt-0.5">
                    {item.organization} &bull; <span className="text-zinc-600">{item.location}</span>
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Badge variant="outline" size="md">
                    {item.period}
                  </Badge>
                  {item.verifiedLink && (
                    <a
                      href={item.verifiedLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 border-2 border-[#171717] bg-[#FAF8F4] text-[#171717] hover:bg-[#C8FF00] transition-colors shadow-[2px_2px_0px_0px_#171717]"
                      aria-label={`View evidence for ${item.role}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-zinc-800 text-base mb-5 font-sans leading-relaxed font-medium">
                {item.summary}
              </p>

              <div className="space-y-2 mb-6">
                <p className="font-mono text-xs font-black uppercase tracking-wider text-[#171717]">
                  KEY CONTRIBUTIONS &amp; LEARNING EVIDENCE:
                </p>
                <ul className="space-y-2 font-sans text-sm text-zinc-800 font-medium">
                  {item.contributions.map((contribution, cIdx) => (
                    <li key={cIdx} className="flex items-start gap-2.5">
                      <span className="text-[#3155E7] font-mono font-black mt-0.5">&gt;</span>
                      <span>{contribution}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-3 border-t-2 border-[#171717]">
                <span className="font-mono text-[10px] text-zinc-600 uppercase font-black mr-1">
                  SKILLS:
                </span>
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[11px] font-mono font-bold px-2 py-0.5 border border-[#171717] bg-[#FAF8F4] text-[#171717] shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
