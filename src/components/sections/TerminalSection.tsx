"use client";

import React, { useState, useRef, useEffect } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profileData } from "@/data/profile";
import { projectsData } from "@/data/projects";
import { skillsData } from "@/data/skills";
import { CornerDownLeft, Sparkles, RefreshCw } from "lucide-react";

interface TerminalHistoryItem {
  id: string;
  command: string;
  output: React.ReactNode;
}

export function TerminalSection() {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<TerminalHistoryItem[]>([
    {
      id: "initial",
      command: "welcome",
      output: (
        <div className="space-y-1.5 text-zinc-300">
          <p className="text-[#C8FF00] font-bold">
            Kunal Yelgate // Workstation Terminal v2.5 (x86_64-pc-linux-gnu)
          </p>
          <p className="text-zinc-400">
            Type <span className="text-white font-bold underline">help</span> to view available commands or click the shortcut buttons above.
          </p>
        </div>
      ),
    },
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const executeCommand = (rawCommand: string) => {
    const trimmed = rawCommand.trim();
    if (!trimmed) return;

    setCommandHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);

    const parts = trimmed.toLowerCase().split(" ");
    const cmd = parts[0];

    let output: React.ReactNode = null;

    switch (cmd) {
      case "help":
        output = (
          <div className="space-y-1.5 text-zinc-300">
            <p className="text-[#C8FF00] font-bold">AVAILABLE COMMANDS:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-xs">
              <div><span className="text-[#00D5E8] font-bold">whoami</span> - Identity and engineering mission</div>
              <div><span className="text-[#00D5E8] font-bold">about</span> - Undergraduate background &amp; college</div>
              <div><span className="text-[#00D5E8] font-bold">projects</span> - Verified repositories &amp; live demos</div>
              <div><span className="text-[#00D5E8] font-bold">skills</span> - Grouped tools (applied vs learning)</div>
              <div><span className="text-[#00D5E8] font-bold">education</span> - Degree and coursework</div>
              <div><span className="text-[#00D5E8] font-bold">focus</span> - Active engineering roadmap</div>
              <div><span className="text-[#00D5E8] font-bold">github</span> - Direct link to GitHub</div>
              <div><span className="text-[#00D5E8] font-bold">contact</span> - Email and professional handles</div>
              <div><span className="text-[#00D5E8] font-bold">neofetch</span> - Workstation telemetry banner</div>
              <div><span className="text-[#00D5E8] font-bold">clear</span> - Clear terminal buffer</div>
            </div>
          </div>
        );
        break;

      case "whoami":
        output = (
          <div className="space-y-1 text-zinc-300">
            <p className="text-white font-bold">Kunal Yelgate</p>
            <p className="text-zinc-400">Computer Science Undergraduate @ SGGSIE&amp;T, Nanded</p>
            <p className="text-[#C8FF00]">&quot;{profileData.headline}&quot;</p>
          </div>
        );
        break;

      case "about":
        output = (
          <div className="space-y-2 text-zinc-300 max-w-xl">
            <p>{profileData.bio}</p>
            <p className="text-[#00D5E8] font-semibold">Location: {profileData.location}</p>
          </div>
        );
        break;

      case "projects":
        output = (
          <div className="space-y-2 text-zinc-300">
            <p className="text-[#C8FF00] font-bold">VERIFIED REPOSITORIES &amp; DEMOS:</p>
            <div className="space-y-2">
              {projectsData.slice(0, 5).map((p) => (
                <div key={p.slug} className="border-l-2 border-[#C8FF00] pl-2 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-white font-bold uppercase">{p.title}</span>
                    <span className="text-zinc-500 font-mono">({p.status})</span>
                  </div>
                  <p className="text-zinc-400">{p.tagline}</p>
                  <p className="text-[#00D5E8]">
                    Repo: <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="underline">{p.githubUrl}</a>
                  </p>
                  {p.demoUrl && (
                    <p className="text-[#C8FF00]">
                      Live: <a href={p.demoUrl} target="_blank" rel="noopener noreferrer" className="underline">{p.demoUrl}</a>
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case "skills":
        output = (
          <div className="space-y-2 text-zinc-300">
            <p className="text-[#C8FF00] font-bold">TECHNICAL SKILLS OVERVIEW:</p>
            {skillsData.map((cat) => (
              <div key={cat.category} className="text-xs">
                <span className="text-white font-bold uppercase">{cat.category}: </span>
                <span className="text-zinc-400">{cat.skills.map((s) => s.name).join(", ")}</span>
              </div>
            ))}
          </div>
        );
        break;

      case "education":
        output = (
          <div className="space-y-1 text-zinc-300">
            <p className="text-white font-bold">B.Tech in Computer Science and Engineering</p>
            <p className="text-zinc-400">Shri Guru Gobind Singhji Institute of Engineering and Technology (SGGSIE&amp;T), Nanded</p>
            <p className="text-[#C8FF00]">2025 — 2028</p>
          </div>
        );
        break;

      case "focus":
        output = (
          <div className="space-y-1 text-zinc-300">
            <p className="text-[#C8FF00] font-bold">CURRENT ENGINEERING FOCUS:</p>
            <p>&bull; Backend APIs, authentication, and validation pipelines</p>
            <p>&bull; Codebase comprehension agents &amp; AST parsing (RepoLens)</p>
            <p>&bull; Evidence-based fraud verification heuristics (TrueRecruit)</p>
            <p>&bull; Distributed systems &amp; cloud deployment workflows</p>
          </div>
        );
        break;

      case "github":
        output = (
          <div className="text-zinc-300">
            Opening GitHub profile:{" "}
            <a
              href={profileData.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C8FF00] underline"
            >
              {profileData.links.github}
            </a>
          </div>
        );
        break;

      case "contact":
        output = (
          <div className="space-y-1 text-zinc-300">
            <p className="text-white font-bold">DIRECT CONTACT CHANNELS:</p>
            <p>Email: <a href={`mailto:${profileData.links.email}`} className="text-[#C8FF00] underline">{profileData.links.email}</a></p>
            <p>LinkedIn: <a href={profileData.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#00D5E8] underline">{profileData.links.linkedin}</a></p>
            <p>GitHub: <a href={profileData.links.github} target="_blank" rel="noopener noreferrer" className="text-zinc-300 underline">{profileData.links.github}</a></p>
          </div>
        );
        break;

      case "neofetch":
        output = (
          <div className="flex flex-col sm:flex-row gap-4 text-xs font-mono">
            <pre className="text-[#C8FF00] font-black leading-none select-none">
{`   ____  __  ______  ___    __ 
  / __ \\/ / / / __ \\/   |  / / 
 / /_/ / / / / / / / /| | / /  
/ ____/ /_/ / /_/ / ___ |/ /___
\\/    \\____/\\____/_/  |_/_____/`}
            </pre>
            <div className="space-y-1 text-zinc-300">
              <p><span className="text-[#C8FF00]">OS:</span> Linux Workstation v2.5</p>
              <p><span className="text-[#C8FF00]">Host:</span> SGGSIE&amp;T Computer Science Station</p>
              <p><span className="text-[#C8FF00]">Uptime:</span> 100% Operational</p>
              <p><span className="text-[#C8FF00]">Shell:</span> bash 5.2.21</p>
              <p><span className="text-[#C8FF00]">Memory:</span> Minimal Client Heap</p>
            </div>
          </div>
        );
        break;

      case "clear":
        setHistory([]);
        return;

      default:
        output = (
          <div className="text-red-400 text-xs">
            Command not recognized: &quot;{trimmed}&quot;. Type <span className="text-[#C8FF00] underline cursor-pointer" onClick={() => executeCommand("help")}>help</span> to see valid commands.
          </div>
        );
    }

    setHistory((prev) => [
      ...prev,
      {
        id: Math.random().toString(36).substring(7),
        command: trimmed,
        output,
      },
    ]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(inputVal);
    setInputVal("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIdx = historyIndex + 1;
        if (nextIdx < commandHistory.length) {
          setHistoryIndex(nextIdx);
          setInputVal(commandHistory[commandHistory.length - 1 - nextIdx]);
        }
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInputVal(commandHistory[commandHistory.length - 1 - nextIdx]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputVal("");
      }
    }
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const quickPills = ["help", "whoami", "projects", "skills", "focus", "neofetch", "clear"];

  return (
    <section id="terminal" className="py-24 border-b-2 border-[#171717] bg-[#F6F0E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="06"
          tag="WORKSTATION CLI"
          title="INTERACTIVE TERMINAL"
          subtitle="A dedicated developer shell embedded on the studio canvas. Query project facts, architecture decisions, and contact channels."
          accentColor="lime"
        />

        {/* Quick Action Pills */}
        <div className="mb-4 flex flex-wrap items-center gap-2 font-mono text-xs">
          <span className="text-[#171717] font-black uppercase text-[11px] mr-1">
            TRY COMMAND:
          </span>
          {quickPills.map((pill) => (
            <button
              key={pill}
              type="button"
              onClick={() => executeCommand(pill)}
              className="px-3 py-1 bg-[#FFFFFF] border-2 border-[#171717] text-[#171717] hover:bg-[#C8FF00] font-bold transition-all shadow-[2px_2px_0px_0px_#171717] active:translate-x-0.5 active:translate-y-0.5"
            >
              {pill}
            </button>
          ))}
        </div>

        {/* Tactile Skeuomorphic Terminal Window on Warm Ivory Canvas */}
        <div className="border-2 border-[#171717] bg-[#15171C] shadow-[8px_8px_0px_0px_#171717] overflow-hidden">
          {/* Terminal Title Bar */}
          <div className="border-b-2 border-[#2D333F] bg-[#1E222B] px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded-full bg-[#FF7048] inline-block border border-black/40 shadow-inner" />
              <span className="w-3.5 h-3.5 rounded-full bg-[#C8FF00] inline-block border border-black/40 shadow-inner" />
              <span className="w-3.5 h-3.5 rounded-full bg-[#10B981] inline-block border border-black/40 shadow-inner" />
              <span className="ml-2 font-mono text-xs font-bold text-zinc-300">
                kunal@sggs-station: ~/portfolio (bash)
              </span>
            </div>

            <div className="flex items-center gap-2 text-zinc-400 font-mono text-xs">
              <span className="w-2 h-2 rounded-full bg-[#C8FF00] animate-ping" />
              <span className="font-bold">TTY1 &bull; ONLINE</span>
            </div>
          </div>

          {/* Terminal Output Buffer */}
          <div
            className="p-4 sm:p-6 font-mono text-xs sm:text-sm min-h-[320px] max-h-[480px] overflow-y-auto space-y-4 bg-[#12141A]"
            onClick={() => inputRef.current?.focus()}
          >
            {history.map((item) => (
              <div key={item.id} className="space-y-1.5">
                <div className="flex items-center gap-2 text-[#C8FF00]">
                  <span className="text-zinc-500">kunal@sggs:~$</span>
                  <span className="text-white font-bold">{item.command}</span>
                </div>
                <div className="pl-4 sm:pl-6">{item.output}</div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Terminal Input Line */}
          <form
            onSubmit={handleSubmit}
            className="border-t-2 border-[#2D333F] bg-[#1A1E26] p-3 flex items-center gap-2 font-mono text-xs sm:text-sm"
          >
            <span className="text-[#C8FF00] font-bold shrink-0">kunal@sggs:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="type 'help' or any command..."
              aria-label="Terminal command input"
              className="w-full bg-transparent text-white focus:outline-none placeholder:text-zinc-500 font-mono"
            />
            <button
              type="submit"
              aria-label="Run command"
              className="p-1.5 bg-[#C8FF00] text-[#171717] hover:bg-[#bbf200] font-bold border border-black shadow-[1px_1px_0px_0px_#000000]"
            >
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
