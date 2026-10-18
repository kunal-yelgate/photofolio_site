import { SkillCategory } from "@/types/portfolio";

export const skillsData: SkillCategory[] = [
  {
    category: "Languages",
    description: "Core languages used for systems programming, backend services, and web development.",
    skills: [
      { name: "Python", status: "applied-in-projects", context: "RepoLens, GitHubAI, Fake Recruitment Verifier" },
      { name: "TypeScript", status: "applied-in-projects", context: "Next.js applications, Portfolio, EvoAura" },
      { name: "JavaScript", status: "applied-in-projects", context: "Whiteboard, Web Applications, DOM APIs" },
      { name: "C & C++", status: "applied-in-projects", context: "DSA problem solving, Academic systems coursework" },
      { name: "Java", status: "active-learning", context: "Object-Oriented Programming, Expense-tracer learning" },
      { name: "Go", status: "active-learning", context: "Exploring cloud-native tooling & PipeCD architecture" },
    ],
  },
  {
    category: "Frontend & UI Systems",
    description: "Component-driven design systems, fluid layouts, and state management.",
    skills: [
      { name: "React", status: "applied-in-projects", context: "Interactive SPAs, canvas tools, component trees" },
      { name: "Next.js (App Router)", status: "applied-in-projects", context: "Server Components, API routes, Turbopack" },
      { name: "Tailwind CSS", status: "applied-in-projects", context: "Design tokens, fluid typography, dark mode" },
      { name: "HTML5 Canvas API", status: "applied-in-projects", context: "Whiteboard drawing primitives, 2D contexts" },
      { name: "Vite", status: "applied-in-projects", context: "Fast frontend prototyping and bundle analysis" },
      { name: "Framer Motion", status: "applied-in-projects", context: "Accessible gestures, layout animations, scroll reveals" },
    ],
  },
  {
    category: "Backend & API Architecture",
    description: "Server architecture, RESTful routing, and input validation pipelines.",
    skills: [
      { name: "Node.js", status: "applied-in-projects", context: "Event loop, asynchronous I/O, script runners" },
      { name: "FastAPI", status: "applied-in-projects", context: "Python API endpoints, Pydantic schemas, Swagger docs" },
      { name: "Express.js", status: "applied-in-projects", context: "REST middleware, authentication handlers" },
      { name: "REST APIs", status: "applied-in-projects", context: "GitHub REST API v3, external verification integrations" },
      { name: "GraphQL", status: "active-learning", context: "Query schemas, resolvers, and Apollo concepts" },
      { name: "WebSockets", status: "active-learning", context: "Real-time communication and bi-directional events" },
    ],
  },
  {
    category: "Databases & Storage",
    description: "Data modeling, schema design, and caching layers.",
    skills: [
      { name: "MongoDB", status: "applied-in-projects", context: "Document collections, aggregation pipelines" },
      { name: "Firebase", status: "applied-in-projects", context: "Authentication, Firestore realtime database" },
      { name: "PostgreSQL", status: "active-learning", context: "Relational schema design, indexes, and queries" },
      { name: "Redis", status: "active-learning", context: "In-memory caching and session key-value storage" },
    ],
  },
  {
    category: "AI Engineering & Code Intelligence",
    description: "Application-level AI, AST extraction, and document processing.",
    skills: [
      { name: "AST Code Analysis", status: "applied-in-projects", context: "Python AST module, repository dependency trees" },
      { name: "NLP Heuristics", status: "applied-in-projects", context: "Tokenizers, keyword extraction, risk scoring" },
      { name: "RAG Concepts", status: "active-learning", context: "Vector embeddings, chunking strategies, retrieval loops" },
      { name: "OpenCV", status: "active-learning", context: "Computer vision basics, raster image processing" },
      { name: "Small Language Models", status: "active-learning", context: "Fine-tuning parameters, Google SLM concepts" },
    ],
  },
  {
    category: "DevOps & Developer Tooling",
    description: "Version control, container basics, and deployment automation.",
    skills: [
      { name: "Git & GitHub", status: "applied-in-projects", context: "Branching workflows, PR reviews, commit hygiene" },
      { name: "Vercel & Netlify", status: "applied-in-projects", context: "Continuous deployment, preview branches, serverless" },
      { name: "Docker", status: "active-learning", context: "Containerizing services, Dockerfile multi-stage builds" },
      { name: "Nginx", status: "active-learning", context: "Reverse proxying, static file serving basics" },
      { name: "Linux / CLI", status: "applied-in-projects", context: "Bash scripting, process monitoring, file tools" },
    ],
  },
];
