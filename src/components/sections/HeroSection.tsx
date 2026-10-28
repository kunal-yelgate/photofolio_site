"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowRight, ArrowUpRight, Bot, Cpu, FileText, Layers, Sparkles } from "lucide-react";
import { profileData } from "@/data/profile";
import { Button } from "@/components/ui/Button";
import { FuturisticScene, sceneProjects } from "@/components/interactive/FuturisticScene";

const spotlight = [
  {
    name: "RepoLens",
    slug: "repolens",
    accent: "#b7ff4a",
    description: "AST-first onboarding agent for unfamiliar codebases.",
  },
  {
    name: "GitHubAI",
    slug: "githubai",
    accent: "#55d9ff",
    description: "Repository telemetry and structure insights for engineering teams.",
  },
  {
    name: "TrueRecruit",
    slug: "fake-recruitment-verifier",
    accent: "#ff785c",
    description: "Fraud-risk verification powered by public evidence signals.",
  },
];

export function HeroSection() {
  const router = useRouter();
  const [activeProject, setActiveProject] = useState(spotlight[0]);

  const handleProjectSelect = (slug: string) => {
    const match = spotlight.find((item) => item.slug === slug) ?? spotlight[0];
    setActiveProject(match);
    router.push(`/projects/${match.slug}`);
  };

  return (
    <section className="relative overflow-hidden border-b-2 border-[#171717] bg-[#050b14] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(86,218,255,0.18),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(183,255,74,0.15),_transparent_32%)]" />
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:54px_54px]" />

      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-20 lg:pt-14">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3 text-[10px] font-black uppercase tracking-[0.22em] text-slate-200/80">
          <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 backdrop-blur-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-[#b7ff4a] shadow-[0_0_12px_rgba(183,255,74,0.9)]" />
            SGGSIE&amp;T • Nanded
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#0b1522] px-3 py-1.5">
            <Cpu className="h-3.5 w-3.5 text-[#55d9ff]" />
            Backend architecture • AI tooling • RAG pipelines
          </div>
        </div>

        <div className="grid items-center gap-8 lg:grid-cols-[1.08fr_1.12fr]">
          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#b7ff4a]/40 bg-[#0d1724] px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-[#dff8ff]">
              <Sparkles className="h-3.5 w-3.5 text-[#b7ff4a]" />
              Engineering profile • Kunal Yelgate
            </div>

            <h1 className="max-w-xl font-black uppercase leading-[0.9] tracking-[-0.065em] text-white md:text-6xl xl:text-[7rem]">
              I BUILD
              <span className="mt-2 block text-[#b7ff4a] drop-shadow-[0_0_30px_rgba(183,255,74,0.35)]">SYSTEMS.</span>
              I EXPLORE
              <span className="mt-2 block text-[#55d9ff]">IDEAS.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-200 md:text-lg">
              I&apos;m Kunal — a CS undergraduate building practical backend systems, AI workflows, and developer tooling grounded in clear architecture, public verification, and real code.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="/#projects" aria-label="Explore projects">
                <Button variant="primary" size="lg" icon={<Layers className="h-4 w-4" />}>
                  Explore projects
                </Button>
              </Link>
              <Link href="/#arena" aria-label="View architecture explorer">
                <Button variant="cobalt" size="lg" icon={<Bot className="h-4 w-4 text-white" />}>
                  Architecture
                </Button>
              </Link>
              <a href={profileData.links.resume} target="_blank" rel="noopener noreferrer" aria-label="Open resume">
                <Button variant="secondary" size="lg" icon={<FileText className="h-4 w-4" />}>
                  Resume
                </Button>
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-2 text-[10px] font-black uppercase tracking-[0.18em] text-slate-300">
              <span className="mr-2">Stack</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1">Python</span>
              <span className="rounded-full border border-[#55d9ff]/30 bg-[#55d9ff]/10 px-2.5 py-1 text-[#55d9ff]">TypeScript</span>
              <span className="rounded-full border border-[#b7ff4a]/30 bg-[#b7ff4a]/10 px-2.5 py-1 text-[#b7ff4a]">FastAPI</span>
              <span className="rounded-full border border-[#ff785c]/30 bg-[#ff785c]/10 px-2.5 py-1 text-[#ff785c]">Next.js</span>
            </div>
          </div>

          <div className="relative z-10">
            <div className="relative overflow-hidden rounded-[30px] border border-white/15 bg-[#0a1220]/80 p-3 shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_32px_80px_rgba(0,0,0,0.65)] backdrop-blur-sm">
              <div className="mb-3 flex items-center justify-between rounded-2xl border border-white/10 bg-[#09141d] px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff785c]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#b7ff4a]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#55d9ff]" />
                </div>
                <span>System view</span>
              </div>

              <div className="hidden h-[420px] overflow-hidden rounded-[22px] border border-white/10 bg-[#040b14] lg:block">
                <FuturisticScene onProjectSelect={handleProjectSelect} reducedMotion={false} />
              </div>

              <div className="lg:hidden rounded-[22px] border border-white/10 bg-[#09141d] p-4">
                <div className="mb-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-slate-400">
                  <span>Selected work</span>
                  <span className="text-[#b7ff4a]">02 active</span>
                </div>
                <div className="space-y-3">
                  {spotlight.map((project) => (
                    <button
                      key={project.slug}
                      onClick={() => handleProjectSelect(project.slug)}
                      className={`w-full rounded-2xl border p-3 text-left transition-all ${
                        activeProject.slug === project.slug
                          ? "border-[#b7ff4a]/60 bg-[#b7ff4a]/10"
                          : "border-white/10 bg-white/5"
                      }`}
                    >
                      <div className="mb-1 flex items-center justify-between gap-3">
                        <span className="font-mono text-[10px] font-black uppercase tracking-[0.18em] text-slate-200">
                          {project.name}
                        </span>
                        <ArrowRight className="h-3.5 w-3.5 text-slate-300" />
                      </div>
                      <p className="text-sm text-slate-300">{project.description}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-4 grid gap-3 rounded-[18px] border border-white/10 bg-[#09141d] p-3 md:grid-cols-[1fr_auto]">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">Focus</p>
                  <p className="mt-2 font-mono text-sm font-medium text-white">
                    {activeProject.name} — {activeProject.description}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => handleProjectSelect(activeProject.slug)}
                  className="inline-flex items-center gap-2 self-center rounded-full border border-[#55d9ff]/40 bg-[#55d9ff]/10 px-3 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#55d9ff] transition-colors hover:bg-[#55d9ff]/20"
                >
                  Open case study
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
