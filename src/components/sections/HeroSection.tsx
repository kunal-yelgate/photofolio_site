"use client";

import React, { useState } from "react";
import Link from "next/link";
import { profileData } from "@/data/profile";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  ArrowDown,
  FileText,
  Cpu,
  Layers,
  Sparkles,
  ExternalLink,
  Code2,
  GitBranch,
  ShieldCheck,
  CheckCircle2,
  Box,
  ArrowRight,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

export function HeroSection() {
  const [activeTab, setActiveTab] = useState<"highlights" | "telemetry" | "stack">("highlights");
  const [tactileSwitch, setTactileSwitch] = useState(true);

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-8 pb-20 border-b-2 border-[#171717] bg-[#F6F0E5] bg-ivory-grid overflow-hidden">
      {/* Decorative Neo-Brutalist Geometric Shapes */}
      <div className="absolute top-12 right-12 w-32 h-32 bg-[#E7DEFF] border-2 border-[#171717] shadow-[6px_6px_0px_0px_#171717] -rotate-6 pointer-events-none hidden xl:block" />
      <div className="absolute bottom-16 left-8 w-24 h-24 bg-[#FF7048]/20 border-2 border-[#171717] shadow-[4px_4px_0px_0px_#171717] rotate-12 pointer-events-none hidden xl:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Bold Neo-Brutalist Typography & Narrative */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 border-2 border-[#171717] bg-[#FFFFFF] px-3.5 py-1.5 shadow-[3px_3px_0px_0px_#171717]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#171717]">
                SGGSIE&amp;T CSE &bull; OPEN FOR SDE INTERNSHIPS
              </span>
            </div>

            {/* Oversized Expressive Headline */}
            <div className="space-y-1">
              <p className="font-mono text-xs text-[#3155E7] font-bold uppercase tracking-widest">
                // ENGINEERING PROFILE &bull; KUNAL YELGATE
              </p>
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black uppercase tracking-tight text-[#171717] font-sans leading-[1.05]">
                I BUILD <span className="bg-[#C8FF00] px-2 border-2 border-[#171717] shadow-[4px_4px_0px_0px_#171717] inline-block -rotate-1">SYSTEMS</span>.
                <br />
                I EXPLORE <span className="text-[#3155E7] underline decoration-4 underline-offset-8">IDEAS</span>.
                <br />
                I SHIP <span className="text-[#FF7048]">SOFTWARE</span>.
              </h1>
            </div>

            {/* Authentic Introduction */}
            <p className="text-lg sm:text-xl text-zinc-800 max-w-2xl font-sans leading-relaxed font-medium">
              I&apos;m <span className="text-[#171717] font-bold underline decoration-[#3155E7] decoration-2">Kunal Yelgate</span>, a Computer Science undergraduate
              exploring backend architecture, AI engineering, and codebase intelligence. I deconstruct how software works under the hood and build tools with verified engineering decisions.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3 font-mono">
              <Link href="/#projects">
                <Button variant="primary" size="lg" icon={<Layers className="w-4 h-4" />}>
                  Explore Projects
                </Button>
              </Link>

              <Link href="/#arena">
                <Button variant="cobalt" size="lg" icon={<Cpu className="w-4 h-4 text-white" />}>
                  System Architecture
                </Button>
              </Link>

              <a
                href={profileData.links.resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary" size="lg" icon={<FileText className="w-4 h-4" />}>
                  Resume (PDF)
                </Button>
              </a>

              <a
                href={profileData.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border-2 border-[#171717] bg-[#FFFFFF] text-[#171717] hover:bg-[#C8FF00] transition-colors shadow-[3px_3px_0px_0px_#171717] inline-flex items-center justify-center active:translate-x-0.5 active:translate-y-0.5"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
            </div>

            {/* Core Verification Tags */}
            <div className="pt-4 flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs text-zinc-600 uppercase font-bold mr-1">
                CORE STACK:
              </span>
              <Badge variant="lime">Python &amp; AST</Badge>
              <Badge variant="cobalt">TypeScript &amp; Next.js</Badge>
              <Badge variant="cyan">FastAPI &amp; REST</Badge>
              <Badge variant="coral">C &amp; C++</Badge>
              <Badge variant="lavender">RAG Architectures</Badge>
            </div>
          </div>

          {/* Right Column: Tactile Workstation & Verified Highlights Object */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Outer Hard Shadow Block */}
              <div className="absolute inset-0 translate-x-3 translate-y-3 bg-[#171717] border-2 border-[#171717] -z-10" />

              {/* Main Physical-Looking Studio Workstation Object */}
              <div className="border-2 border-[#171717] bg-[#FFFFFF] shadow-xl overflow-hidden">
                {/* Physical Top Bar with Screws and Status Indicators */}
                <div className="border-b-2 border-[#171717] bg-[#FAF8F4] px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded-full bg-[#FF7048] border border-[#171717] inline-block shadow-sm" />
                    <span className="w-3.5 h-3.5 rounded-full bg-[#C8FF00] border border-[#171717] inline-block shadow-sm" />
                    <span className="w-3.5 h-3.5 rounded-full bg-[#00D5E8] border border-[#171717] inline-block shadow-sm" />
                    <span className="ml-2 font-mono text-xs font-black text-[#171717] uppercase tracking-wider">
                      ENGINEERING HUD
                    </span>
                  </div>

                  {/* Hardware Status Indicator */}
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                    <span className="font-mono text-[10px] text-zinc-700 font-black uppercase">
                      ACTIVE SYSTEM
                    </span>
                  </div>
                </div>

                {/* Sub-header Switchable Tabs */}
                <div className="grid grid-cols-3 border-b-2 border-[#171717] bg-[#EFE9DC] font-mono text-xs font-bold uppercase">
                  <button
                    onClick={() => setActiveTab("highlights")}
                    className={`py-2 border-r-2 border-[#171717] transition-colors ${
                      activeTab === "highlights"
                        ? "bg-[#FFFFFF] text-[#3155E7]"
                        : "text-zinc-600 hover:text-[#171717]"
                    }`}
                  >
                    Highlights
                  </button>
                  <button
                    onClick={() => setActiveTab("telemetry")}
                    className={`py-2 border-r-2 border-[#171717] transition-colors ${
                      activeTab === "telemetry"
                        ? "bg-[#FFFFFF] text-[#3155E7]"
                        : "text-zinc-600 hover:text-[#171717]"
                    }`}
                  >
                    Telemetry
                  </button>
                  <button
                    onClick={() => setActiveTab("stack")}
                    className={`py-2 transition-colors ${
                      activeTab === "stack"
                        ? "bg-[#FFFFFF] text-[#3155E7]"
                        : "text-zinc-600 hover:text-[#171717]"
                    }`}
                  >
                    Specs
                  </button>
                </div>

                {/* Tab 1: Clean Verified Project Highlights */}
                {activeTab === "highlights" && (
                  <div className="p-5 space-y-3.5">
                    {/* Highlight 1: RepoLens */}
                    <Link
                      href="/projects/repolens"
                      className="group block border-2 border-[#171717] bg-[#E7DEFF] p-3.5 shadow-[3px_3px_0px_0px_#171717] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-transform"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Box className="w-4 h-4 text-[#3155E7]" />
                          <span className="font-mono text-xs font-black text-[#171717] uppercase">
                            RepoLens
                          </span>
                        </div>
                        <span className="text-[10px] font-mono font-bold bg-white text-[#3155E7] px-2 py-0.5 border border-[#171717]">
                          AST AGENT
                        </span>
                      </div>
                      <p className="font-sans text-xs text-zinc-800 mt-1.5 font-medium leading-relaxed">
                        Autonomous onboarding agent parsing dependency graphs with 68% token reduction.
                      </p>
                    </Link>

                    {/* Highlight 2: TrueRecruit */}
                    <Link
                      href="/projects/fake-recruitment-verifier"
                      className="group block border-2 border-[#171717] bg-[#C8FF00]/40 p-3.5 shadow-[3px_3px_0px_0px_#171717] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-transform"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <ShieldCheck className="w-4 h-4 text-[#171717]" />
                          <span className="font-mono text-xs font-black text-[#171717] uppercase">
                            TrueRecruit
                          </span>
                        </div>
                        <span className="text-[10px] font-mono font-bold bg-white text-[#171717] px-2 py-0.5 border border-[#171717]">
                          LIVE DEMO
                        </span>
                      </div>
                      <p className="font-sans text-xs text-zinc-800 mt-1.5 font-medium leading-relaxed">
                        Fraud detection engine verified through external search proof and domain forensics.
                      </p>
                    </Link>

                    {/* Highlight 3: GitHubAI */}
                    <Link
                      href="/projects/githubai"
                      className="group block border-2 border-[#171717] bg-[#00D5E8]/30 p-3.5 shadow-[3px_3px_0px_0px_#171717] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-transform"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Cpu className="w-4 h-4 text-[#171717]" />
                          <span className="font-mono text-xs font-black text-[#171717] uppercase">
                            GitHubAI
                          </span>
                        </div>
                        <span className="text-[10px] font-mono font-bold bg-white text-[#171717] px-2 py-0.5 border border-[#171717]">
                          METRICS API
                        </span>
                      </div>
                      <p className="font-sans text-xs text-zinc-800 mt-1.5 font-medium leading-relaxed">
                        GitHub repository structure, commit cadence, and language breakdown intelligence.
                      </p>
                    </Link>
                  </div>
                )}

                {/* Tab 2: System Telemetry */}
                {activeTab === "telemetry" && (
                  <div className="p-5 space-y-3 font-mono text-xs">
                    <div className="p-3.5 border-2 border-[#171717] bg-[#FAF8F4] space-y-2">
                      <div className="flex justify-between">
                        <span className="text-zinc-600">RUNTIME:</span>
                        <span className="font-bold text-[#171717]">Node.js v22 &amp; Python 3.11</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-600">CAMPUS:</span>
                        <span className="font-bold text-[#3155E7]">SGGSIE&amp;T Computer Science</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-600">UPTIME:</span>
                        <span className="font-bold text-[#10B981]">100% OPERATIONAL</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-600">CORE FOCUS:</span>
                        <span className="font-bold text-[#FF7048]">Backend Architecture &amp; RAG</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab 3: Detailed Specs */}
                {activeTab === "stack" && (
                  <div className="p-5 space-y-3 font-mono text-xs">
                    <div className="p-3.5 border-2 border-[#171717] bg-[#FAF8F4] space-y-2">
                      <p className="font-bold text-[#171717] uppercase text-[11px] pb-1 border-b border-zinc-300">
                        ARCHITECTURE SPECIFICATIONS:
                      </p>
                      <div className="flex justify-between text-zinc-700">
                        <span>FRONTEND:</span>
                        <span className="font-bold text-[#171717]">Next.js 16 (App Router)</span>
                      </div>
                      <div className="flex justify-between text-zinc-700">
                        <span>AESTHETICS:</span>
                        <span className="font-bold text-[#171717]">Neo-Brutalist + Tactile Depth</span>
                      </div>
                      <div className="flex justify-between text-zinc-700">
                        <span>DATA LAYER:</span>
                        <span className="font-bold text-[#171717]">Typed Models &amp; Real Repos</span>
                      </div>
                      <div className="flex justify-between text-zinc-700">
                        <span>ACCESSIBILITY:</span>
                        <span className="font-bold text-[#10B981]">WCAG 2.2 AA Verified</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Workstation Footer Action */}
                <div className="border-t-2 border-[#171717] bg-[#F6F0E5] px-4 py-3 flex items-center justify-between font-mono text-xs">
                  <span className="text-zinc-700 font-bold">Inspect Deep Case Studies:</span>
                  <Link
                    href="/#projects"
                    className="font-black text-[#3155E7] hover:underline flex items-center gap-1"
                  >
                    <span>View Projects</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Down Arrow Indicator */}
      <div className="mt-14 flex justify-center">
        <Link
          href="/#about"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-zinc-700 hover:text-[#3155E7] font-bold transition-colors"
          aria-label="Scroll to about section"
        >
          <span>EXPLORE SPECIFICATIONS</span>
          <ArrowDown className="w-4 h-4 animate-bounce text-[#3155E7]" />
        </Link>
      </div>
    </section>
  );
}
