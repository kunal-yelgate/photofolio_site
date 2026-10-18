import { ExperienceItem } from "@/types/portfolio";

export const experienceData: ExperienceItem[] = [
  {
    id: "oss-research",
    role: "Open-Source Contributor & System Explorer",
    organization: "Global Open-Source Community",
    period: "2024 — Present",
    location: "Remote / GitHub",
    type: "open-source",
    summary: "Actively studying, forking, and contributing to cloud-native, developer tooling, and distributed systems repositories on GitHub.",
    contributions: [
      "Explored and researched codebases including PipeCD (continuous delivery), sktime (time-series ML), and Jaeger distributed tracing documentation.",
      "Built independent tooling (RepoLens, GitHubAI) solving developer workflow friction in code comprehension and repository telemetry.",
      "Authored architectural walkthroughs and engineering deep dives shared with the developer community.",
    ],
    skills: ["Git", "GitHub Workflows", "Codebase Comprehension", "Distributed Systems Concepts", "Open-Source Etiquette"],
    verifiedLink: "https://github.com/kunal-yelgate?tab=repositories",
  },
  {
    id: "technical-author",
    role: "Technical Writer & Developer Advocate",
    organization: "DEV Community (dev.to/kunalyelgate)",
    period: "2025 — Present",
    location: "Remote",
    type: "community",
    summary: "Documenting practical engineering lessons, architectural decisions, and project retrospectives for fellow developers.",
    contributions: [
      "Published 'I Built RepoLens — an autonomous developer onboarding agent' detailing AST parsing, architecture graph generation, and LLM context reduction.",
      "Engaged with developers and maintainers on topics surrounding developer onboarding, API verification, and fraud prevention heuristics.",
    ],
    skills: ["Technical Documentation", "Architecture Diagrams", "Developer Communication", "Case Studies"],
    verifiedLink: "https://dev.to/kunalyelgate",
  },
  {
    id: "campus-initiatives",
    role: "Student Developer & Technical Peer",
    organization: "SGGSIE&T Computer Science Department",
    period: "2025 — Present",
    location: "Nanded, India",
    type: "leadership",
    summary: "Collaborating with peers on campus utility projects, competitive programming practice, and hackathon prototypes.",
    contributions: [
      "Participated in campus hackathons and collegiate programming sessions solving algorithms in C++ and Python.",
      "Explored campus utility workflows (smart campus systems, placement coordination modules) with student development groups.",
    ],
    skills: ["Team Collaboration", "Rapid Prototyping", "C++", "DSA", "Problem Solving"],
  },
];
