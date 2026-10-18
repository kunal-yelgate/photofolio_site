"use client";

import React, { useState } from "react";
import { projectsData } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Project } from "@/types/portfolio";
import { ShieldCheck } from "lucide-react";

export function FeaturedProjects() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const categories = [
    { label: "All Repositories", value: "all" },
    { label: "Developer Tools", value: "developer-tools" },
    { label: "AI & Intelligence", value: "ai-tooling" },
    { label: "Security & Full-Stack", value: "security" },
  ];

  const colorThemes: ("cobalt" | "coral" | "cyan" | "violet" | "lime")[] = [
    "cobalt",
    "coral",
    "cyan",
    "violet",
    "lime",
    "cobalt",
    "coral",
  ];

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "security") {
      return project.category === "security" || project.category === "full-stack";
    }
    return project.category === activeFilter;
  });

  return (
    <section id="projects" className="py-24 border-b-2 border-[#171717] bg-[#F6F0E5] bg-ivory-dots">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="02"
          tag="PRIMARY EVIDENCE"
          title="FEATURED PROJECTS"
          subtitle="Real projects solving codebase comprehension, fraud heuristics, and repository telemetry. Verified codebases, genuine architecture trade-offs, and live deployments."
          accentColor="coral"
        />

        {/* Filter Tabs */}
        <div className="mb-10 flex flex-wrap items-center gap-2.5 font-mono text-xs font-bold uppercase">
          {categories.map((cat) => {
            const isActive = activeFilter === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => setActiveFilter(cat.value)}
                className={`px-4 py-2 border-2 border-[#171717] transition-all duration-150 ${
                  isActive
                    ? "bg-[#171717] text-[#C8FF00] shadow-[3px_3px_0px_0px_#171717] font-black"
                    : "bg-[#FFFFFF] text-[#171717] hover:bg-[#E7DEFF] shadow-[2.5px_2.5px_0px_0px_#171717]"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Varied Color-Themed Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filteredProjects.map((project, idx) => (
            <ProjectCard
              key={project.slug}
              project={project}
              colorTheme={colorThemes[idx % colorThemes.length]}
            />
          ))}
        </div>

        {/* Audit Guarantee Banner */}
        <div className="mt-14 p-5 border-2 border-[#171717] bg-[#FFFFFF] shadow-[4px_4px_0px_0px_#171717] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#C8FF00] border-2 border-[#171717] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4 text-[#171717]" />
            </div>
            <span className="text-[#171717] font-bold">
              All project repositories inspected and cross-referenced with public GitHub API commits &amp; live deployments.
            </span>
          </div>
          <span className="bg-[#3155E7] text-white px-3 py-1 font-black text-[11px] border-2 border-[#171717] shadow-[2px_2px_0px_0px_#171717] uppercase shrink-0">
            ZERO FABRICATED METRICS
          </span>
        </div>
      </div>
    </section>
  );
}
