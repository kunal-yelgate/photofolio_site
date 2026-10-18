export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  motivation: string;
  whatItDoes: string;
  verifiedStack: {
    category: string;
    items: string[];
  }[];
  engineeringDecisions: string[];
  challengesAndTradeoffs: string[];
  testingAndValidation: string[];
  limitations: string[];
  futureWork: string[];
  githubUrl: string;
  demoUrl?: string;
  status: "live" | "source-verified" | "active-exploration";
  category: "ai-tooling" | "full-stack" | "developer-tools" | "security";
  featured: boolean;
  architectureDiagram?: string;
  architectureFlow: {
    step: string;
    title: string;
    description: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  type: "open-source" | "community" | "leadership" | "project";
  summary: string;
  contributions: string[];
  skills: string[];
  verifiedLink?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  details: string[];
  coursework: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  skills: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    status: "applied-in-projects" | "active-learning";
    context?: string;
  }[];
}

export interface TerminalCommandOutput {
  command: string;
  output: React.ReactNode;
}
