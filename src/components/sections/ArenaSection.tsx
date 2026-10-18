"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, Cpu, Layers, GitGraph, Play, CheckCircle2, ShieldAlert } from "lucide-react";

interface PipelineStep {
  id: string;
  name: string;
  role: string;
  latency: string;
  payloadSnippet: string;
  decisionNote: string;
}

interface PipelineScenario {
  id: string;
  title: string;
  system: string;
  objective: string;
  steps: PipelineStep[];
}

const scenarios: PipelineScenario[] = [
  {
    id: "repolens-pipeline",
    title: "RepoLens Codebase Onboarding Pipeline",
    system: "AST & Dependency Graph Engine",
    objective: "Deconstruct an unfamiliar repository without blowing past LLM context token limits.",
    steps: [
      {
        id: "step-1",
        name: "Repo Ingestion",
        role: "Clones repository manifest & filters non-essential files (.git, vendor, node_modules).",
        latency: "~250ms",
        payloadSnippet: `{\n  "repo": "kunal-yelgate/sample-backend",\n  "total_files": 142,\n  "filtered_files": 48\n}`,
        decisionNote: "Strict regex ignores prevent loading binaries, minified bundles, or large lockfiles into memory.",
      },
      {
        id: "step-2",
        name: "AST Extraction",
        role: "Walks Python/TS abstract syntax trees to extract module imports, exports, and function signatures.",
        latency: "~400ms",
        payloadSnippet: `{\n  "symbols": ["AuthMiddleware", "TokenValidator", "UserRouter"],\n  "top_level_deps": ["fastapi", "pydantic", "jwt"]\n}`,
        decisionNote: "Extracting structural symbols statically eliminates LLM hallucination over file existence.",
      },
      {
        id: "step-3",
        name: "Dependency Graphing",
        role: "Builds directed acyclic graph (DAG) mapping entry points to database/API interfaces.",
        latency: "~180ms",
        payloadSnippet: `{\n  "nodes": 48,\n  "edges": 112,\n  "primary_entrypoint": "main.py:app"\n}`,
        decisionNote: "Graph topological sorting identifies root controller routes vs utility helpers.",
      },
      {
        id: "step-4",
        name: "Context Packaging",
        role: "Synthesizes compressed architecture summary with targeted file paths.",
        latency: "~320ms",
        payloadSnippet: `{\n  "context_tokens": 1450,\n  "token_savings_pct": 68.4,\n  "readiness": "ready_for_developer_walkthrough"\n}`,
        decisionNote: "Reduces raw codebase token footprint from ~45,000 to <1,500 tokens before generating onboarding insights.",
      },
    ],
  },
  {
    id: "truerecruit-pipeline",
    title: "TrueRecruit Evidence Verification Engine",
    system: "Search Signal Heuristics & Phishing Forensics",
    objective: "Quantify employment scam risk using external search proof rather than plain regex pattern matching.",
    steps: [
      {
        id: "step-1",
        name: "Header & Text Sanitization",
        role: "Extracts sender email, claimed company name, domain, and offer compensation.",
        latency: "~50ms",
        payloadSnippet: `{\n  "sender_domain": "careers-google-verify.com",\n  "claimed_org": "Google Inc",\n  "urgency_flag": true\n}`,
        decisionNote: "Isolates registered domain from subdomains to prevent typosquatting bypasses.",
      },
      {
        id: "step-2",
        name: "Domain Reputation Query",
        role: "Checks domain against free-mail rosters and external search index registration indicators.",
        latency: "~450ms",
        payloadSnippet: `{\n  "domain_registered_days": 14,\n  "official_mx_record": false,\n  "known_scam_pattern": true\n}`,
        decisionNote: "A domain younger than 30 days claiming a Fortune 500 brand triggers an instant critical risk multiplier.",
      },
      {
        id: "step-3",
        name: "Heuristic Risk Matrix",
        role: "Evaluates 6 weighted vectors: upfront fees, unverified domains, off-platform communication.",
        latency: "~90ms",
        payloadSnippet: `{\n  "vector_scores": {\n    "domain": 92,\n    "compensation": 74,\n    "urgency": 85\n  },\n  "composite_risk": 83.7\n}`,
        decisionNote: "Weighted mathematical indicators provide reproducible scores with exact reasons.",
      },
      {
        id: "step-4",
        name: "Audit Card Output",
        role: "Delivers verifiable advisory report with flagged signals and safety steps.",
        latency: "~60ms",
        payloadSnippet: `{\n  "verdict": "CRITICAL_SUSPICION",\n  "flags": ["Recent Domain Registration", "Impersonation", "Urgent Equipment Fee"],\n  "recommendation": "Do not transfer funds or share SSN"\n}`,
        decisionNote: "Every flag links directly to the factual evidence that triggered it.",
      },
    ],
  },
];

export function ArenaSection() {
  const [activeScenarioId, setActiveScenarioId] = useState<string>("repolens-pipeline");
  const [activeStepIdx, setActiveStepIdx] = useState<number>(0);

  const currentScenario =
    scenarios.find((s) => s.id === activeScenarioId) || scenarios[0];
  const currentStep = currentScenario.steps[activeStepIdx] || currentScenario.steps[0];

  return (
    <section id="arena" className="py-24 border-b-2 border-[#171717] bg-[#FAF8F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="03"
          tag="TECHNICAL PLAYGROUND"
          title="ARCHITECTURE EXPLORER"
          subtitle="Inspect real node-by-node execution topologies, data transformations, and latency benchmarks from my engineering projects."
          accentColor="cobalt"
        />

        {/* Scenario Switcher Tabs */}
        <div className="flex flex-wrap gap-3 mb-8 font-mono text-xs">
          {scenarios.map((sc) => {
            const isActive = sc.id === activeScenarioId;
            return (
              <button
                key={sc.id}
                onClick={() => {
                  setActiveScenarioId(sc.id);
                  setActiveStepIdx(0);
                }}
                className={`px-4 py-2 border-2 border-[#171717] font-black uppercase transition-all duration-150 ${
                  isActive
                    ? "bg-[#3155E7] text-white shadow-[3px_3px_0px_0px_#171717]"
                    : "bg-[#FFFFFF] text-[#171717] hover:bg-[#E7DEFF] shadow-[2px_2px_0px_0px_#171717]"
                }`}
              >
                {sc.title}
              </button>
            );
          })}
        </div>

        {/* Main Interactive Studio Surface */}
        <div className="border-2 border-[#171717] bg-[#FFFFFF] shadow-[6px_6px_0px_0px_#171717] overflow-hidden">
          {/* Header Bar */}
          <div className="border-b-2 border-[#171717] bg-[#FAF8F4] px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="font-mono text-[10px] text-[#3155E7] font-black uppercase tracking-wider">
                ACTIVE TOPOLOGY: {currentScenario.system}
              </span>
              <h3 className="font-sans text-xl sm:text-2xl font-black text-[#171717] mt-0.5">
                {currentScenario.title}
              </h3>
            </div>
            <Badge variant="lime" size="md">
              Interactive Execution Mode
            </Badge>
          </div>

          <div className="p-6 sm:p-8 space-y-8">
            <p className="text-zinc-800 text-base font-sans max-w-3xl leading-relaxed font-medium">
              <strong className="text-[#171717] font-bold">Objective:</strong> {currentScenario.objective}
            </p>

            {/* Pipeline Step Flow Nodes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {currentScenario.steps.map((step, idx) => {
                const isSelected = idx === activeStepIdx;
                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveStepIdx(idx)}
                    className={`text-left p-4 border-2 transition-all font-mono text-xs flex flex-col justify-between ${
                      isSelected
                        ? "border-[#171717] bg-[#C8FF00] shadow-[4px_4px_0px_0px_#171717]"
                        : "border-[#171717] bg-[#FAF8F4] text-[#171717] hover:bg-white shadow-[2px_2px_0px_0px_#171717]"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-black text-[#171717]">
                          PHASE 0{idx + 1}
                        </span>
                        <span className="text-[10px] font-bold text-zinc-600">{step.latency}</span>
                      </div>
                      <h4 className="font-sans font-black text-sm text-[#171717] leading-tight mb-1">
                        {step.name}
                      </h4>
                    </div>
                    <div className="mt-3 flex items-center justify-between pt-2 border-t border-black/20">
                      <span className="text-[10px] font-black uppercase">
                        {isSelected ? "ACTIVE NODE" : "CLICK TO VIEW"}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#171717]" />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Node Inspection Panel */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start pt-2">
              {/* Left: Role & Rationale */}
              <div className="lg:col-span-5 space-y-4">
                <div className="border-2 border-[#171717] bg-[#FAF8F4] p-5 shadow-[3px_3px_0px_0px_#171717]">
                  <p className="font-mono text-[10px] text-[#3155E7] font-black uppercase tracking-wider mb-1">
                    NODE RESPONSIBILITY
                  </p>
                  <h4 className="font-sans text-xl font-black text-[#171717] mb-2">
                    {currentStep.name}
                  </h4>
                  <p className="text-zinc-800 text-sm leading-relaxed font-sans font-medium mb-4">
                    {currentStep.role}
                  </p>

                  <div className="pt-3 border-t-2 border-[#171717]">
                    <p className="font-mono text-[10px] text-[#FF7048] font-black uppercase tracking-wider mb-1">
                      ARCHITECTURAL TRADE-OFF
                    </p>
                    <p className="text-zinc-700 text-xs font-mono font-medium leading-relaxed">
                      {currentStep.decisionNote}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: Data Payload Transformation */}
              <div className="lg:col-span-7">
                <div className="border-2 border-[#171717] bg-[#15171C] shadow-[4px_4px_0px_0px_#171717]">
                  <div className="border-b-2 border-[#2D333F] bg-[#1E222B] px-4 py-2.5 flex items-center justify-between font-mono text-xs text-zinc-300">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#C8FF00]" />
                      <span className="font-bold">DATA STRUCTURE TRANSFORMATION</span>
                    </span>
                    <span className="text-[#00D5E8] text-[10px] font-bold">JSON OUTPUT SCHEMA</span>
                  </div>
                  <pre className="p-4 font-mono text-xs text-[#C8FF00] overflow-x-auto leading-relaxed">
                    <code>{currentStep.payloadSnippet}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
