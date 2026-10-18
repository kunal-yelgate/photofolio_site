"use client";

import React, { useState } from "react";
import { skillsData } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Layers, CheckCircle2, BookOpen } from "lucide-react";

export function SkillsSection() {
  const categoryHeaderAccents: Record<string, string> = {
    "Languages": "bg-[#FF7048] text-white",
    "Frontend & UI Systems": "bg-[#3155E7] text-white",
    "Backend & API Architecture": "bg-[#C8FF00] text-[#171717]",
    "Databases & Storage": "bg-[#00D5E8] text-[#171717]",
    "AI Engineering & Code Intelligence": "bg-[#8A63F6] text-white",
    "DevOps & Developer Tooling": "bg-[#E7DEFF] text-[#171717]",
  };

  return (
    <section id="skills" className="py-24 border-b-2 border-[#171717] bg-[#FAF8F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="04"
          tag="TECHNICAL INVENTORY"
          title="ENGINEERING TOOLKIT"
          subtitle="Honest division between technologies actively implemented in deployed projects and concepts currently being explored or studied."
          accentColor="lime"
        />

        {/* Legend */}
        <div className="mb-10 flex flex-wrap items-center gap-6 font-mono text-xs border-2 border-[#171717] bg-[#FFFFFF] p-4 shadow-[4px_4px_0px_0px_#171717]">
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 bg-[#C8FF00] border-2 border-[#171717] inline-block shadow-sm" />
            <span className="text-[#171717] font-black uppercase">Applied in Projects</span>
            <span className="text-zinc-600 font-medium">(Verified in RepoLens, TrueRecruit, Whiteboard, etc.)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 bg-[#3155E7] border-2 border-[#171717] inline-block shadow-sm" />
            <span className="text-[#171717] font-black uppercase">Active Learning / Coursework</span>
            <span className="text-zinc-600 font-medium">(System patterns, academic modules &amp; exploration)</span>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category) => (
            <div
              key={category.category}
              className="border-2 border-[#171717] bg-[#FFFFFF] shadow-[5px_5px_0px_0px_#171717] flex flex-col justify-between overflow-hidden"
            >
              <div>
                <div
                  className={`border-b-2 border-[#171717] px-4 py-3 flex items-center justify-between font-mono text-xs font-black uppercase ${
                    categoryHeaderAccents[category.category] || "bg-[#171717] text-white"
                  }`}
                >
                  <h3 className="tracking-wider">{category.category}</h3>
                  <span className="text-[10px] px-1.5 py-0.5 bg-black/10 border border-current rounded-none">
                    {category.skills.length} TOOLS
                  </span>
                </div>

                <div className="p-5">
                  <p className="text-xs text-zinc-600 mb-4 font-sans font-medium leading-relaxed">
                    {category.description}
                  </p>

                  <div className="space-y-2.5">
                    {category.skills.map((skill) => {
                      const isApplied = skill.status === "applied-in-projects";
                      return (
                        <div
                          key={skill.name}
                          className={`p-2.5 border-2 border-[#171717] font-mono text-xs flex flex-col gap-1 transition-all ${
                            isApplied
                              ? "bg-[#FAF8F4] shadow-[2px_2px_0px_0px_#171717]"
                              : "bg-[#FFFFFF] shadow-[1px_1px_0px_0px_#171717]"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-black text-[#171717] flex items-center gap-2">
                              <span
                                className={`w-2 h-2 rounded-full border border-[#171717] ${
                                  isApplied ? "bg-[#C8FF00]" : "bg-[#3155E7]"
                                }`}
                              />
                              {skill.name}
                            </span>
                            <span
                              className={`text-[9px] uppercase px-1.5 py-0.5 font-black border border-[#171717] ${
                                isApplied
                                  ? "bg-[#C8FF00] text-[#171717]"
                                  : "bg-[#3155E7] text-white"
                              }`}
                            >
                              {isApplied ? "Applied" : "Learning"}
                            </span>
                          </div>
                          {skill.context && (
                            <span className="text-[11px] text-zinc-600 font-sans truncate font-medium">
                              {skill.context}
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
