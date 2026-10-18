import { Project } from "@/types/portfolio";

export const projectsData: Project[] = [
  {
    slug: "repolens",
    title: "RepoLens",
    tagline: "Autonomous Developer Onboarding Agent for Unfamiliar Codebases",
    description: "An intelligent repository analysis agent that inspects unfamiliar codebases, extracts architectural topologies, identifies key entry points, and provides contextual onboarding walkthroughs.",
    problem: "Engineers spend 40-60% of their initial weeks reading through disjointed files, figuring out execution flows, and deducing architecture from undocumented codebases.",
    motivation: "Create a proactive agent that parses repository structure, maps module relationships, and answers complex structural questions using verified code context rather than hallucinated summaries.",
    whatItDoes: "Scans local or remote GitHub repositories, parses file trees, constructs abstract syntax and dependency graphs, and generates interactive architecture overviews with file-level call summaries.",
    category: "developer-tools",
    featured: true,
    status: "live",
    githubUrl: "https://github.com/kunal-yelgate/repolens",
    demoUrl: "https://getrepolens.vercel.app/",
    verifiedStack: [
      { category: "Core", items: ["Python", "FastAPI", "TypeScript"] },
      { category: "Code Analysis", items: ["AST Parsing", "Dependency Mapping", "Tree-sitter Concepts"] },
      { category: "Frontend", items: ["Next.js", "Tailwind CSS", "Interactive Tree UI"] },
      { category: "Deployment", items: ["Vercel", "Containerized Backend"] },
    ],
    engineeringDecisions: [
      "Decoupled the static AST extraction stage from the LLM prompt layer to reduce token usage by 65% and eliminate hallucinations on file structures.",
      "Implemented selective depth-first file discovery with ignore rules (.gitignore, vendor, node_modules) to preserve memory on large repositories.",
      "Designed an async streaming architecture to return parsed module breakdowns progressively as large repositories are processed.",
    ],
    challengesAndTradeoffs: [
      "Trade-off: Full semantic graph vs. lightweight structural summary. Chose hierarchical tree extraction with targeted symbol indexing to maintain sub-second response times without requiring massive graph database overhead.",
      "Challenge: Handling heterogeneous multi-language repos. Standardized common abstraction layers for Python, TypeScript, and Go file topologies.",
    ],
    testingAndValidation: [
      "Benchmarked on open-source repositories ranging from small utilities to 500+ file projects to test graph consistency.",
      "Verified against live GitHub APIs for rate limits, pagination, and file content retrieval.",
    ],
    limitations: [
      "Currently best optimized for Python, JavaScript, and TypeScript; compiled binary dependencies or monorepos with custom symlinks require explicit directory flags.",
    ],
    futureWork: [
      "Implement persistent vector embeddings for semantic symbol search across commits.",
      "Add automated PR impact analysis to show downstream dependencies affected by a diff.",
    ],
    architectureFlow: [
      { step: "01", title: "Repo Ingestion", description: "Clones or retrieves tree manifest via GitHub REST API with branch hash caching." },
      { step: "02", title: "AST & Hierarchy Parsing", description: "Filters artifacts, extracts module exports, imports, and top-level definitions." },
      { step: "03", title: "Context Window Packaging", description: "Aggregates structural overview into structured JSON schema without token bloat." },
      { step: "04", title: "Interactive UI Rendering", description: "Streams interactive architectural nodes and walkthrough guides to the client." },
    ],
  },
  {
    slug: "githubai",
    title: "GitHubAI",
    tagline: "Intelligent GitHub Repository Analyzer & Metrics Intelligence Engine",
    description: "Deep repository analysis platform that surfaces actionable insights on code structure, programming languages, commit cadence, and repository health metrics.",
    problem: "Evaluating prospective open-source libraries or contributor health often requires manually scanning dozens of commits, issues, and language stats across disjointed GitHub UI tabs.",
    motivation: "Build a centralized intelligence engine that digests GitHub repo telemetry into concise, actionable summaries for recruiters and engineering leads.",
    whatItDoes: "Aggregates GitHub API metadata, computes language proportions, tracks commit trends over time, and generates automated codebase summaries.",
    category: "ai-tooling",
    featured: true,
    status: "live",
    githubUrl: "https://github.com/kunal-yelgate/GithubAI",
    demoUrl: "https://githubai-anly.vercel.app/",
    verifiedStack: [
      { category: "Backend", items: ["Python", "FastAPI", "GitHub REST API v3"] },
      { category: "Frontend", items: ["Next.js", "React", "Chart.js / Tailwind"] },
      { category: "Deployment", items: ["Vercel"] },
    ],
    engineeringDecisions: [
      "Implemented server-side response caching with ETag headers to prevent exhausting public GitHub API rate limits during repeated analyses.",
      "Designed clean modular data transformers that convert raw GitHub JSON responses into unified presentation models before sending to the client.",
    ],
    challengesAndTradeoffs: [
      "Challenge: GitHub unauthenticated rate limiting (60 requests/hour). Built client-side bearer token option alongside server caching to allow higher throughput for power users.",
      "Trade-off: Real-time commit log walking vs. sampled commit metrics. Chose statistical sampling for repos with >1,000 commits to guarantee fast UI loads.",
    ],
    testingAndValidation: [
      "Validated with diverse GitHub repositories across multiple organizations and license types.",
      "Tested error boundaries for private, archived, or non-existent repository handles.",
    ],
    limitations: [
      "Deep commit diff analysis is limited to the latest 100 commits to avoid blocking worker threads.",
    ],
    futureWork: [
      "Add repository health scoring combining PR merge velocity, issue responsiveness, and test coverage indicators.",
    ],
    architectureFlow: [
      { step: "01", title: "URL Dissection", description: "Extracts owner and repo slug; verifies repo visibility and rate limit headroom." },
      { step: "02", title: "Parallel API Hydration", description: "Concurrently fetches languages, commit logs, releases, and contributors." },
      { step: "03", title: "Metrics Synthesis", description: "Computes frequency distribution, churn indicators, and primary technology stack." },
      { step: "04", title: "Visualization Surface", description: "Renders responsive dashboard with interactive charts and structural badges." },
    ],
  },
  {
    slug: "fake-recruitment-verifier",
    title: "Fake Recruitment Verifier",
    tagline: "Evidence-Based Job Scam Detection via Live Signal Heuristics",
    description: "Fraud mitigation platform that evaluates job postings and recruitment communications against live search signals, domain authenticity, and risk heuristics rather than plain keyword filters.",
    problem: "Job seekers are increasingly targeted by sophisticated employment scams utilizing forged domain names, high-pressure communication patterns, and fake interview procedures.",
    motivation: "Create an evidence-grounded verifier that inspects actual domain registration ages, known company email patterns, and search intelligence before issuing a verifiable risk rating.",
    whatItDoes: "Analyzes job posting text, sender email domains, and company claims against live external search evidence and threat heuristics to deliver a multi-dimensional risk score.",
    category: "security",
    featured: true,
    status: "live",
    githubUrl: "https://github.com/kunal-yelgate/fake-recruitment-verifier",
    demoUrl: "https://truerecruit.netlify.app/",
    verifiedStack: [
      { category: "Core", items: ["Python", "Flask / FastAPI", "Search Heuristics"] },
      { category: "Analysis", items: ["Domain Validation", "Regex Tokenizers", "Risk Scoring Engine"] },
      { category: "Frontend", items: ["HTML5", "Modern CSS", "JavaScript"] },
      { category: "Hosting", items: ["Netlify"] },
    ],
    engineeringDecisions: [
      "Engineered an explainable scoring matrix where each deduction or warning is mapped directly to a factual indicator (e.g., free mail provider, lack of official domain registration, unverified company address).",
      "Built resilient input sanitization to safely handle copy-pasted scam emails without executing embedded scripts or tracking pixels.",
    ],
    challengesAndTradeoffs: [
      "Challenge: Reducing false positives on legitimate early-stage startups using custom domains with low search footprints.",
      "Trade-off: Weighted heuristic indicators instead of a black-box LLM classifier to ensure transparent, auditable reasoning for every flag.",
    ],
    testingAndValidation: [
      "Tested against a curated dataset of known scam job templates and verified legitimate corporate offers.",
      "Checked latency to ensure domain lookup and heuristic evaluation completes in <1.5s.",
    ],
    limitations: [
      "Cannot verify private telephone or instant messaging channels unless transcripts or sender handles are provided.",
    ],
    futureWork: [
      "Integrate automated WHOIS domain age lookup API for real-time domain age scoring.",
    ],
    architectureFlow: [
      { step: "01", title: "Text & Header Parsing", description: "Sanitizes raw text, extracts contact domains, company names, and salary figures." },
      { step: "02", title: "Signal Cross-Reference", description: "Checks sender domain against known free-mail lists and official company domains." },
      { step: "03", title: "Risk Heuristic Evaluation", description: "Calculates risk weight across 6 distinct vectors: communication, compensation, requests." },
      { step: "04", title: "Verifiable Audit Card", description: "Renders itemized breakdown of green flags, warnings, and overall credibility score." },
    ],
  },
  {
    slug: "resumeai-evaluator",
    title: "ResumeAI Evaluator",
    tagline: "Targeted Resume Diagnostic & Skill-Gap Analysis Engine",
    description: "An AI-powered evaluation system designed to review technical resumes, quantify keyword alignment against engineering job descriptions, and deliver actionable revision feedback.",
    problem: "Most automated resume screeners either reject candidates arbitrarily or give generic grammar advice that fails to assess technical depth and engineering impact.",
    motivation: "Help software engineers identify missing technical signals, weak action verbs, and unquantified bullet points before applying to competitive roles.",
    whatItDoes: "Extracts text from uploaded resume content, segments sections into skills, experience, and education, and provides targeted technical recommendations.",
    category: "ai-tooling",
    featured: true,
    status: "live",
    githubUrl: "https://github.com/kunal-yelgate/ResumeAI_Evaluator",
    demoUrl: "https://resumeai-evaluator-1.onrender.com",
    verifiedStack: [
      { category: "Backend", items: ["Python", "Flask", "NLP Tokenizers"] },
      { category: "Frontend", items: ["CSS3", "JavaScript", "Responsive UI"] },
      { category: "Deployment", items: ["Render"] },
    ],
    engineeringDecisions: [
      "Built modular section extractors to isolate technical projects from work experience for tailored scoring.",
      "Prioritized actionable bullet-point rewriting suggestions rather than a single abstract letter grade.",
    ],
    challengesAndTradeoffs: [
      "Challenge: Varied PDF and text formatting structures. Used rule-based text normalizers to standardize varied heading naming conventions.",
    ],
    testingAndValidation: [
      "Evaluated across diverse developer resume formats to ensure consistent section parsing.",
    ],
    limitations: [
      "Complex multi-column graphic-heavy PDF templates can occasionally have disjointed reading orders.",
    ],
    futureWork: [
      "Add interactive job description side-by-side comparison with instant semantic match indicators.",
    ],
    architectureFlow: [
      { step: "01", title: "Document Ingestion", description: "Parses PDF/text streams and normalizes whitespace and special characters." },
      { step: "02", title: "Section Segmentation", description: "Identifies projects, experience, skills, and education blocks via regex tokens." },
      { step: "03", title: "Diagnostic Pipeline", description: "Evaluates action verbs, metrics usage, and technical keyword density." },
      { step: "04", title: "Actionable Report", description: "Outputs concrete recommendations with high/medium/low improvement priority." },
    ],
  },
  {
    slug: "evoaura",
    title: "EvoAura AI",
    tagline: "Autonomous Virtual Assistant with Dynamic Task Workflows",
    description: "An intelligent conversational assistant exploring personalized user interaction, natural-language workflow orchestration, and modular task execution.",
    problem: "Standard conversational wrappers often lack persistent context management and actionable integration with developer utilities.",
    motivation: "Explore how state machines and conversational agents can coordinate practical developer micro-tasks smoothly.",
    whatItDoes: "Processes multi-turn dialogue, maintains conversational memory, and executes defined utility commands with clear user feedback.",
    category: "ai-tooling",
    featured: false,
    status: "source-verified",
    githubUrl: "https://github.com/kunal-yelgate/EvoAura",
    verifiedStack: [
      { category: "Core", items: ["TypeScript", "Node.js"] },
      { category: "Architecture", items: ["NLP Pipelines", "Modular Command Handlers"] },
      { category: "State", items: ["In-memory Context Graph"] },
    ],
    engineeringDecisions: [
      "Structured command handlers as independent plugins so new task capabilities can be added without modifying core conversational logic.",
    ],
    challengesAndTradeoffs: [
      "Maintaining state across disconnected sessions while preserving low memory overhead.",
    ],
    testingAndValidation: [
      "Unit tested intent classification accuracy across common task variations.",
    ],
    limitations: [
      "Currently runs as a source-based CLI and local prototype without a public cloud deployment.",
    ],
    futureWork: [
      "Integrate persistent SQLite storage for multi-session conversation history.",
    ],
    architectureFlow: [
      { step: "01", title: "Prompt Tokenization", description: "Parses user intent and extracts named entities and parameter values." },
      { step: "02", title: "Context Resolution", description: "Merges current input with conversation state and active intent." },
      { step: "03", title: "Action Routing", description: "Routes to matching capability handler or fallback response generation." },
      { step: "04", title: "State Update", description: "Records transaction in conversational context memory." },
    ],
  },
  {
    slug: "whiteboard",
    title: "Visual Whiteboard",
    tagline: "Real-Time Visual Brainstorming & Canvas Collaboration",
    description: "A collaborative drawing canvas exploring low-latency vector rendering, diagram-oriented workflows, and state persistence.",
    problem: "Visual brainstorming tools can be bloated, heavy, and burdened with complex sign-up flows when all an engineer needs is a fast, responsive canvas.",
    motivation: "Build a lightweight canvas interface implementing smooth drawing primitives, shape generation, and clean event loop updates.",
    whatItDoes: "Provides an interactive HTML5 canvas workspace for sketching architecture diagrams, freeform drawing, and exporting visual board states.",
    category: "full-stack",
    featured: false,
    status: "source-verified",
    githubUrl: "https://github.com/kunal-yelgate/White_Board",
    verifiedStack: [
      { category: "Frontend", items: ["React", "HTML5 Canvas API", "JavaScript"] },
      { category: "Event Loop", items: ["RequestAnimationFrame", "PointerEvents API"] },
      { category: "State", items: ["Undo/Redo History Stack"] },
    ],
    engineeringDecisions: [
      "Employed coordinate normalization and requestAnimationFrame throttling to ensure 60fps rendering even on high-DPI displays.",
      "Implemented a dual-buffer canvas approach to separate static historical strokes from active in-progress pen movements.",
    ],
    challengesAndTradeoffs: [
      "Managing undo/redo stack memory limits without freezing the browser thread on long drawing sessions.",
    ],
    testingAndValidation: [
      "Tested across touch screens, mouse inputs, and stylus pens for coordinate offset accuracy.",
    ],
    limitations: [
      "Real-time multi-peer WebSocket sync is documented in architecture specs but active implementation is single-client canvas with export.",
    ],
    futureWork: [
      "Implement WebRTC data channel mesh for peer-to-peer real-time cursor sync without central relay servers.",
    ],
    architectureFlow: [
      { step: "01", title: "Pointer Capture", description: "Captures pointerdown, pointermove, and pointerup events with normalized offsets." },
      { step: "02", title: "Stroke Interpolation", description: "Calculates quadratic bezier curves between sampled points for smooth ink curves." },
      { step: "03", title: "Canvas Committal", description: "Commits stroke vectors to active history stack upon pointerup." },
      { step: "04", title: "Vector Export", description: "Serializes canvas drawing operations into image data or persistent JSON." },
    ],
  },
  {
    slug: "taskflow-automation",
    title: "Taskflow Automation",
    tagline: "Python-Powered Workflow & Task Scheduling Utility Hub",
    description: "A suite of automation scripts and modular utilities designed to eliminate manual developer friction in file processing, API data extraction, and scheduled cron routines.",
    problem: "Repetitive developer operations (formatting logs, pulling recurring metrics, file reorganization) waste engineering time when not standardized into reliable scripts.",
    motivation: "Create reproducible, tested Python automation modules that can be run standalone or integrated into CI workflows.",
    whatItDoes: "Executes batch file operations, data extraction pipelines, and automated reporting tasks with clean CLI parameters.",
    category: "developer-tools",
    featured: false,
    status: "source-verified",
    githubUrl: "https://github.com/kunal-yelgate/Taskflow-Automation",
    verifiedStack: [
      { category: "Core", items: ["Python 3.11", "Argparse / Click"] },
      { category: "Utilities", items: ["Requests", "OS & Shutil", "JSON / CSV Parsers"] },
    ],
    engineeringDecisions: [
      "Built idempotent script executors with error catching and step rollback logging.",
    ],
    challengesAndTradeoffs: [
      "Cross-platform file path resolution between Windows (pwsh) and Linux/macOS environments.",
    ],
    testingAndValidation: [
      "Tested CLI input flags, exit codes, and file permission edge cases.",
    ],
    limitations: [
      "Command-line utility designed for developer workstations rather than a web UI.",
    ],
    futureWork: [
      "Package as an installable pip package with standard entrypoint CLI commands.",
    ],
    architectureFlow: [
      { step: "01", title: "CLI Dispatch", description: "Parses arguments and flags to configure target execution pipeline." },
      { step: "02", title: "Input Verification", description: "Validates source directories, file existence, and API credentials." },
      { step: "03", title: "Batch Execution", description: "Processes tasks iteratively with structured logging to stderr/stdout." },
      { step: "04", title: "Exit Status", description: "Returns deterministic POSIX exit codes for CI/CD compatibility." },
    ],
  },
];
