"use client";

import React from "react";
import Link from "next/link";
import { Project } from "@/types/portfolio";
import { Badge } from "@/components/ui/Badge";
import { ExternalLink, ArrowRight, Terminal } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

export interface ProjectCardProps {
  project: Project;
  colorTheme?: "cobalt" | "coral" | "lime" | "cyan" | "violet";
}

export function ProjectCard({ project, colorTheme = "cobalt" }: ProjectCardProps) {
  const isLive = project.status === "live" && !!project.demoUrl;

  const headerColors = {
    cobalt: "bg-[#3155E7] text-white",
    coral: "bg-[#FF7048] text-white",
    lime: "bg-[#C8FF00] text-[#171717]",
    cyan: "bg-[#00D5E8] text-[#171717]",
    violet: "bg-[#8A63F6] text-white",
  };

  const borderAccentColors = {
    cobalt: "hover:border-[#3155E7]",
    coral: "hover:border-[#FF7048]",
    lime: "hover:border-[#171717]",
    cyan: "hover:border-[#00D5E8]",
    violet: "hover:border-[#8A63F6]",
  };

  return (
    <article
      className={`group relative border-2 border-[#171717] bg-[#FFFFFF] shadow-[4px_4px_0px_0px_#171717] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[7px_7px_0px_0px_#171717] transition-all duration-150 flex flex-col justify-between overflow-hidden ${borderAccentColors[colorTheme]}`}
    >
      {/* Color-Blocked Header Bar */}
      <div
        className={`border-b-2 border-[#171717] px-4 py-2.5 flex items-center justify-between text-xs font-mono font-bold ${headerColors[colorTheme]}`}
      >
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-current opacity-80" />
          <span className="uppercase tracking-wider">
            {project.category.replace("-", " ")}
          </span>
        </div>

        {isLive ? (
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-[#FFFFFF] text-[#171717] border border-[#171717] text-[10px] font-black uppercase shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-ping" />
            LIVE DEMO
          </span>
        ) : (
          <span className="inline-flex items-center px-2 py-0.5 bg-[#171717] text-white text-[10px] uppercase font-bold">
            SOURCE ONLY
          </span>
        )}
      </div>

      {/* Main Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
        <div className="space-y-3">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-2xl font-black text-[#171717] uppercase tracking-tight font-sans group-hover:text-[#3155E7] transition-colors">
              {project.title}
            </h3>
            <span className="font-mono text-xs text-zinc-500 font-bold shrink-0">
              // {project.slug}
            </span>
          </div>

          <p className="font-mono text-xs text-[#3155E7] font-bold leading-relaxed">
            {project.tagline}
          </p>

          <p className="text-zinc-700 text-sm leading-relaxed font-sans font-medium">
            {project.description}
          </p>

          {/* Problem / Decision Note Box */}
          <div className="border-2 border-[#171717] bg-[#FAF8F4] p-3 text-xs font-mono space-y-1 shadow-[2px_2px_0px_0px_#171717]">
            <p className="text-zinc-600 font-black uppercase tracking-wider text-[10px]">
              ENGINEERING DECISION
            </p>
            <p className="text-zinc-800 leading-snug font-medium">
              {project.engineeringDecisions[0]}
            </p>
          </div>
        </div>

        {/* Tech Stack Pills & CTAs */}
        <div className="space-y-4">
          <div className="flex flex-wrap gap-1.5">
            {project.verifiedStack.flatMap((s) => s.items).slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-mono font-bold px-2 py-0.5 border border-[#171717] bg-[#FAF8F4] text-[#171717]"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="pt-4 border-t-2 border-[#171717] flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-1.5 font-black text-[#171717] hover:text-[#3155E7] group/link transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              <span>Read Case Study</span>
              <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform text-[#3155E7]" />
            </Link>

            <div className="flex items-center gap-2">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border-2 border-[#171717] bg-[#FFFFFF] text-[#171717] hover:bg-[#C8FF00] transition-colors shadow-[2px_2px_0px_0px_#171717]"
                aria-label={`View ${project.title} source code on GitHub`}
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              {isLive && project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#C8FF00] text-[#171717] font-black border-2 border-[#171717] shadow-[2px_2px_0px_0px_#171717] hover:bg-[#bbf200] active:translate-x-0.5 active:translate-y-0.5 transition-all"
                  aria-label={`Open live demo for ${project.title}`}
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
