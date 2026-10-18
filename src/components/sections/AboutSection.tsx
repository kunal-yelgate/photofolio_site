"use client";

import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profileData } from "@/data/profile";
import { Badge } from "@/components/ui/Badge";
import {
  Workflow,
  Cpu,
  BookOpen,
  ArrowUpRight,
  Sparkles,
  Layers,
  Terminal,
} from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-24 border-b-2 border-[#171717] bg-[#FAF8F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="01"
          tag="ENGINEERING PROFILE"
          title="HOW I THINK ABOUT SYSTEMS"
          subtitle="Building software that is useful beyond a demo: decomposing complex codebases, verifying outputs, and learning through deliberate implementation."
          accentColor="cobalt"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Narrative Column */}
          <div className="lg:col-span-7 space-y-6 text-[#171717] font-sans leading-relaxed text-base sm:text-lg">
            <div className="border-2 border-[#171717] bg-[#FFFFFF] p-6 sm:p-8 shadow-[4px_4px_0px_0px_#171717]">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#3155E7]" />
                <p className="font-mono text-xs text-[#3155E7] font-black uppercase tracking-wider">
                  // UNDERGRADUATE CONTEXT
                </p>
              </div>
              <p className="font-medium text-zinc-800">
                I&apos;m currently pursuing my B.Tech in Computer Science and Engineering at{" "}
                <span className="text-[#171717] font-black underline decoration-[#C8FF00] decoration-4">
                  Shri Guru Gobind Singhji Institute of Engineering and Technology (SGGSIE&amp;T)
                </span>
                , Nanded. Rather than collecting frameworks without depth, my engineering method centers on{" "}
                <span className="bg-[#E7DEFF] px-1.5 py-0.5 border border-[#171717] font-bold">
                  building software, reading open-source codebases, and documenting trade-offs
                </span>
                .
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-black text-[#171717] font-sans uppercase tracking-tight flex items-center gap-2">
                <Workflow className="w-6 h-6 text-[#3155E7]" />
                What Problems Interest Me
              </h3>
              <p className="text-zinc-700 font-medium">
                I am drawn to domains where engineering friction is real and solvable through thoughtful architecture:
              </p>
              <div className="space-y-3 font-sans text-base">
                <div className="border-2 border-[#171717] bg-[#FFFFFF] p-4 shadow-[3px_3px_0px_0px_#171717] flex items-start gap-3">
                  <span className="font-mono text-xs font-black text-[#171717] bg-[#C8FF00] px-2 py-0.5 border-2 border-[#171717] shadow-[1.5px_1.5px_0px_0px_#171717] mt-0.5 shrink-0">
                    01
                  </span>
                  <div>
                    <strong className="text-[#171717] font-bold block mb-0.5">Codebase Comprehension &amp; AST Analysis</strong>
                    <span className="text-zinc-700 text-sm">
                      How can automated developer tools parse abstract syntax trees (ASTs) and module dependency graphs so engineers onboard in hours instead of weeks? (Led to{" "}
                      <span className="font-mono font-bold text-[#3155E7]">RepoLens</span>).
                    </span>
                  </div>
                </div>

                <div className="border-2 border-[#171717] bg-[#FFFFFF] p-4 shadow-[3px_3px_0px_0px_#171717] flex items-start gap-3">
                  <span className="font-mono text-xs font-black text-white bg-[#FF7048] px-2 py-0.5 border-2 border-[#171717] shadow-[1.5px_1.5px_0px_0px_#171717] mt-0.5 shrink-0">
                    02
                  </span>
                  <div>
                    <strong className="text-[#171717] font-bold block mb-0.5">Evidence-Based Risk Scoring</strong>
                    <span className="text-zinc-700 text-sm">
                      How can we detect recruitment fraud using external search proof and domain registration forensics rather than superficial text matching? (Led to{" "}
                      <span className="font-mono font-bold text-[#FF7048]">TrueRecruit</span>).
                    </span>
                  </div>
                </div>

                <div className="border-2 border-[#171717] bg-[#FFFFFF] p-4 shadow-[3px_3px_0px_0px_#171717] flex items-start gap-3">
                  <span className="font-mono text-xs font-black text-[#171717] bg-[#00D5E8] px-2 py-0.5 border-2 border-[#171717] shadow-[1.5px_1.5px_0px_0px_#171717] mt-0.5 shrink-0">
                    03
                  </span>
                  <div>
                    <strong className="text-[#171717] font-bold block mb-0.5">Backend Reliability &amp; Caching</strong>
                    <span className="text-zinc-700 text-sm">
                      Designing APIs with strict schemas, rate-limiting resilience, and predictable database access patterns.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Published Article Highlight */}
            <div className="border-2 border-[#171717] bg-[#E7DEFF] p-6 shadow-[4px_4px_0px_0px_#171717] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="font-mono text-[11px] text-[#3155E7] uppercase font-black tracking-wider bg-white px-2 py-0.5 border border-[#171717]">
                  FEATURED DEV ARTICLE
                </span>
                <p className="font-mono text-base font-black text-[#171717] mt-2">
                  &ldquo;I Built RepoLens — an autonomous developer onboarding agent&rdquo;
                </p>
                <p className="text-xs text-zinc-700 mt-1 font-medium">
                  Published on DEV Community &bull; Explaining AST extraction, LLM context window optimization, and dependency mapping.
                </p>
              </div>
              <a
                href={profileData.links.devto}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 font-mono text-xs font-black bg-[#C8FF00] text-[#171717] border-2 border-[#171717] shadow-[2.5px_2.5px_0px_0px_#171717] hover:bg-[#bbf200] transition-colors"
              >
                <span>Read Article</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Architectural Pillars & Priorities */}
          <div className="lg:col-span-5 space-y-6">
            <div className="border-2 border-[#171717] bg-[#FFFFFF] p-6 shadow-[5px_5px_0px_0px_#171717]">
              <p className="font-mono text-xs font-black uppercase tracking-wider text-[#171717] mb-4 flex items-center justify-between pb-2 border-b-2 border-[#171717]">
                <span>CORE PRINCIPLES</span>
                <span className="text-[#3155E7]">03 PILLARS</span>
              </p>

              <div className="space-y-4 font-mono text-xs">
                {profileData.pillars.map((pillar, idx) => (
                  <div
                    key={pillar.title}
                    className="p-3.5 border-2 border-[#171717] bg-[#FAF8F4] shadow-[2px_2px_0px_0px_#171717]"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#C8FF00] border border-[#171717]" />
                      <span className="font-black text-[#171717] uppercase text-xs">
                        {pillar.title}
                      </span>
                    </div>
                    <p className="text-zinc-700 font-sans leading-relaxed text-xs font-medium">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Current Engineering Learning Priorities */}
            <div className="border-2 border-[#171717] bg-[#FFFFFF] p-6 shadow-[5px_5px_0px_0px_#171717]">
              <p className="font-mono text-xs font-black uppercase tracking-wider text-[#171717] mb-3 flex items-center gap-2 pb-2 border-b-2 border-[#171717]">
                <Cpu className="w-4 h-4 text-[#FF7048]" />
                CURRENT LEARNING PRIORITIES
              </p>
              <div className="space-y-2.5 font-mono text-xs">
                <div className="flex items-center justify-between p-2.5 bg-[#FAF8F4] border-2 border-[#171717]">
                  <span className="text-[#171717] font-bold">Backend Systems &amp; APIs</span>
                  <Badge variant="cobalt" size="sm">Active</Badge>
                </div>
                <div className="flex items-center justify-between p-2.5 bg-[#FAF8F4] border-2 border-[#171717]">
                  <span className="text-[#171717] font-bold">RAG &amp; Vector Embeddings</span>
                  <Badge variant="lime" size="sm">Active</Badge>
                </div>
                <div className="flex items-center justify-between p-2.5 bg-[#FAF8F4] border-2 border-[#171717]">
                  <span className="text-[#171717] font-bold">Containers &amp; Docker Builds</span>
                  <Badge variant="cyan" size="sm">Active</Badge>
                </div>
                <div className="flex items-center justify-between p-2.5 bg-[#FAF8F4] border-2 border-[#171717]">
                  <span className="text-[#171717] font-bold">DSA in C++ (Competitive &amp; Core)</span>
                  <Badge variant="coral" size="sm">Ongoing</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
