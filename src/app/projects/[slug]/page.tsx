import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  ArrowLeft,
  ExternalLink,
  Layers,
  Cpu,
  ShieldCheck,
  AlertTriangle,
  Lightbulb,
  Workflow,
  CheckCircle2,
  Calendar,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const isLive = project.status === "live" && !!project.demoUrl;

  return (
    <div className="min-h-screen bg-[#F6F0E5] text-[#171717] font-sans pb-24">
      {/* Top Header Bar */}
      <div className="border-b-2 border-[#171717] bg-[#EFE9DC] py-4">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 font-mono text-xs font-black uppercase tracking-wider text-[#171717] hover:text-[#3155E7] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>&larr; Back to Portfolio</span>
          </Link>

          <div className="flex items-center gap-3">
            {isLive ? (
              <Badge variant="lime" size="sm" dot pulse>
                LIVE SYSTEM
              </Badge>
            ) : (
              <Badge variant="outline" size="sm">
                SOURCE VERIFIED
              </Badge>
            )}
          </div>
        </div>
      </div>

      {/* Case Study Hero */}
      <header className="border-b-2 border-[#171717] bg-[#FFFFFF] py-16 bg-ivory-grid">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
          <div className="flex items-center gap-2 font-mono text-xs text-[#3155E7] font-black uppercase tracking-widest bg-[#E7DEFF] px-2.5 py-1 border border-[#171717] w-fit shadow-[2px_2px_0px_0px_#171717]">
            <span>CASE STUDY</span>
            <span>//</span>
            <span>{project.category.replace("-", " ")}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#171717] font-sans">
            {project.title}
          </h1>

          <p className="text-xl sm:text-2xl text-[#3155E7] font-mono leading-relaxed max-w-3xl font-bold">
            {project.tagline}
          </p>

          <p className="text-zinc-800 text-base sm:text-lg max-w-3xl leading-relaxed font-medium">
            {project.description}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4 font-mono">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#FFFFFF] text-[#171717] font-black border-2 border-[#171717] shadow-[3px_3px_0px_0px_#171717] hover:bg-[#FAF8F4] hover:shadow-[5px_5px_0px_0px_#171717] transition-all"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub Repository</span>
            </a>

            {isLive && project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C8FF00] text-[#171717] font-black border-2 border-[#171717] shadow-[3px_3px_0px_0px_#171717] hover:bg-[#bbf200] active:translate-x-0.5 active:translate-y-0.5 transition-all"
              >
                <span>Launch Live Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </header>

      {/* Main Content Layout */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-16 space-y-16">
        {/* Verified Tech Stack Matrix */}
        <section className="border-2 border-[#171717] bg-[#FFFFFF] p-6 sm:p-8 shadow-[5px_5px_0px_0px_#171717]">
          <h2 className="font-mono text-sm font-black uppercase tracking-wider text-[#3155E7] mb-4 flex items-center gap-2">
            <Cpu className="w-4 h-4 text-[#3155E7]" />
            VERIFIED TECHNOLOGY CHOICES
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {project.verifiedStack.map((stack) => (
              <div key={stack.category} className="border-2 border-[#171717] bg-[#FAF8F4] p-3.5 shadow-[2px_2px_0px_0px_#171717]">
                <span className="font-mono text-[10px] text-zinc-600 font-black uppercase block mb-1.5">
                  {stack.category}
                </span>
                <div className="space-y-1 font-mono text-xs text-[#171717] font-bold">
                  {stack.items.map((item) => (
                    <div key={item} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3155E7]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Problem & Motivation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border-2 border-[#171717] bg-[#FFFFFF] p-6 shadow-[4px_4px_0px_0px_#171717] space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs font-black text-red-600 uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              THE PROBLEM
            </div>
            <p className="text-zinc-800 leading-relaxed font-sans text-sm sm:text-base font-medium">
              {project.problem}
            </p>
          </div>

          <div className="border-2 border-[#171717] bg-[#FFFFFF] p-6 shadow-[4px_4px_0px_0px_#171717] space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs font-black text-[#3155E7] uppercase tracking-wider">
              <Lightbulb className="w-4 h-4" />
              THE MOTIVATION
            </div>
            <p className="text-zinc-800 leading-relaxed font-sans text-sm sm:text-base font-medium">
              {project.motivation}
            </p>
          </div>
        </div>

        {/* Architectural Execution Flow */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b-2 border-[#171717] pb-3">
            <h2 className="text-2xl font-black text-[#171717] uppercase tracking-tight font-sans flex items-center gap-2">
              <Workflow className="w-6 h-6 text-[#3155E7]" />
              SYSTEM ARCHITECTURE &amp; PIPELINE FLOW
            </h2>
            <span className="font-mono text-xs text-zinc-600 font-bold">
              {project.architectureFlow.length} PIPELINE STAGES
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {project.architectureFlow.map((flow) => (
              <div
                key={flow.step}
                className="border-2 border-[#171717] bg-[#FFFFFF] p-5 shadow-[3px_3px_0px_0px_#171717] space-y-2 font-mono text-xs"
              >
                <span className="px-2 py-0.5 bg-[#C8FF00] text-[#171717] border border-[#171717] font-black inline-block shadow-sm">
                  PHASE {flow.step}
                </span>
                <h4 className="font-sans font-black text-sm text-[#171717] pt-1">
                  {flow.title}
                </h4>
                <p className="text-zinc-700 font-sans leading-relaxed text-xs font-medium">
                  {flow.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Notable Engineering Decisions */}
        <section className="border-2 border-[#171717] bg-[#FFFFFF] p-6 sm:p-8 shadow-[5px_5px_0px_0px_#171717] space-y-4">
          <h2 className="text-xl font-black uppercase tracking-tight text-[#171717] font-mono flex items-center gap-2">
            <Cpu className="w-5 h-5 text-[#3155E7]" />
            NOTABLE ENGINEERING DECISIONS
          </h2>
          <div className="space-y-3 font-sans text-sm sm:text-base text-zinc-800 font-medium">
            {project.engineeringDecisions.map((decision, dIdx) => (
              <div key={dIdx} className="flex items-start gap-3 p-3.5 bg-[#FAF8F4] border-2 border-[#171717]">
                <span className="font-mono text-xs text-[#3155E7] font-black mt-0.5">
                  [D{dIdx + 1}]
                </span>
                <p className="leading-relaxed">{decision}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Challenges & Trade-offs */}
        <section className="space-y-4">
          <h2 className="text-xl font-black uppercase tracking-tight text-[#171717] font-mono flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-[#FF7048]" />
            CHALLENGES &amp; TRADE-OFFS
          </h2>
          <div className="space-y-3 font-sans text-sm sm:text-base text-zinc-800 font-medium">
            {project.challengesAndTradeoffs.map((challenge, cIdx) => (
              <div key={cIdx} className="p-4 border-2 border-[#171717] bg-[#FFFFFF] shadow-[3px_3px_0px_0px_#171717]">
                <p className="leading-relaxed">{challenge}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Limitations & Future Work */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Limitations */}
          <div className="border-2 border-[#171717] bg-[#FFFFFF] p-6 space-y-3 shadow-[3px_3px_0px_0px_#171717]">
            <h3 className="font-mono text-xs font-black uppercase tracking-wider text-red-600">
              HONEST KNOWN LIMITATIONS
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-zinc-700 font-sans font-medium">
              {project.limitations.map((lim, lIdx) => (
                <li key={lIdx} className="flex items-start gap-2">
                  <span className="text-[#FF7048] font-mono font-bold">&bull;</span>
                  <span>{lim}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Future Work */}
          <div className="border-2 border-[#171717] bg-[#FFFFFF] p-6 space-y-3 shadow-[3px_3px_0px_0px_#171717]">
            <h3 className="font-mono text-xs font-black uppercase tracking-wider text-[#3155E7]">
              PLANNED IMPROVEMENTS
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-zinc-800 font-sans font-medium">
              {project.futureWork.map((fw, fIdx) => (
                <li key={fIdx} className="flex items-start gap-2">
                  <span className="text-[#3155E7] font-mono font-bold">&bull;</span>
                  <span>{fw}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="pt-8 border-t-2 border-[#171717] flex items-center justify-between font-mono text-xs">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-1.5 text-zinc-700 hover:text-[#3155E7] font-black transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to All Projects</span>
          </Link>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#3155E7] font-black underline hover:text-[#171717]"
          >
            View Code on GitHub &rarr;
          </a>
        </div>
      </main>
    </div>
  );
}
