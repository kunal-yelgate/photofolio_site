
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";
import RocketIntro from "./components/RocketIntro";

const projects = [
  {
    number: "01",
    title: "RepoLens",
    category: "AI / Developer Tools",
    description:
      "An AI-powered repository analyzer designed to help developers explore codebases and understand project architecture.",
    stack: ["Next.js", "Python", "AI", "AST"],
    link: "https://github.com/kunal-yelgate/repolens",
  },
  {
    number: "02",
    title: "GithubAI",
    category: "AI / Full-Stack",
    description:
      "A GitHub repository analysis project focused on exploring code, understanding project structure, and AI-assisted insights.",
    stack: ["React", "Python", "GitHub API", "AI"],
    link: "https://github.com/kunal-yelgate/GithubAI",
  },
  {
    number: "03",
    title: "Legal RAG System",
    category: "AI / RAG",
    description:
      "A privacy-focused legal document retrieval project exploring RAG pipelines and grounded answers from documents.",
    stack: ["Python", "RAG", "LLM", "Vector Search"],
    link: "https://github.com/kunal-yelgate/Privacy-Preserving-RAG-Systems-for-Legal-Document-Retrieval",
  },
];

const skillGroups = [
  {
    title: "FRONTEND",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    title: "BACKEND",
    skills: ["Node.js", "Express", "Python", "FastAPI", "REST APIs"],
  },
  {
    title: "DATABASE & TOOLS",
    skills: ["MongoDB", "PostgreSQL", "Git", "GitHub", "Docker"],
  },
  {
    title: "AI / CLOUD",
    skills: ["LLMs", "RAG", "AWS", "AI Integration"],
  },
];

function BrutalistTicker() {
  const words = [
    "BUILDING DIGITAL EXPERIENCES",
    "FULL-STACK DEVELOPMENT",
    "AI-POWERED PROJECTS",
    "CREATIVE ENGINEERING",
  ];

  return (
    <div className="overflow-hidden border-y-2 border-black bg-[#d7ff00] py-4 text-black">
      <div className="flex min-w-max animate-marquee items-center gap-10">
        {[...words, ...words].map((word, index) => (
          <div key={index} className="flex items-center gap-10">
            <span className="text-sm font-black uppercase tracking-widest md:text-base">
              {word}
            </span>
            <span className="text-2xl font-black">✳</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionLabel({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div className="mb-8 flex items-center gap-4">
      <span className="border-2 border-black bg-[#d7ff00] px-3 py-1 text-sm font-black text-black">
        {number}
      </span>

      <span className="text-sm font-black uppercase tracking-[0.2em]">
        {label}
      </span>
    </div>
  );
}

function ProjectVisual({ number }: { number: string }) {
  return (
    <div className="relative flex h-56 items-center justify-center overflow-hidden border-b-2 border-black bg-[#d7ff00]">
      {number === "01" && (
        <div className="w-4/5 border-2 border-black bg-[#f4f1e8] p-4 shadow-[8px_8px_0px_#000] transition-transform duration-300 group-hover:rotate-2">
          <div className="mb-4 flex gap-2">
            <span className="h-3 w-3 rounded-full bg-black" />
            <span className="h-3 w-3 rounded-full bg-black" />
            <span className="h-3 w-3 rounded-full bg-black" />
          </div>

          <div className="text-xl font-black uppercase tracking-tighter">
            REPOSITORY
            <br />
            ANALYSIS
          </div>

          <div className="mt-4 flex gap-2">
            <div className="h-2 w-1/2 bg-black" />
            <div className="h-2 w-1/4 bg-black" />
          </div>
        </div>
      )}

      {number === "02" && (
        <div className="relative flex h-36 w-36 items-center justify-center border-2 border-black bg-black text-6xl font-black text-[#d7ff00] shadow-[10px_10px_0px_#f4f1e8] transition-transform duration-300 group-hover:scale-110">
          AI

          <span className="absolute -right-8 -top-8 text-5xl text-black">
            ✳
          </span>
        </div>
      )}

      {number === "03" && (
        <div className="w-4/5 rotate-[-3deg] border-2 border-black bg-[#f4f1e8] p-5 shadow-[8px_8px_0px_#000] transition-transform duration-300 group-hover:rotate-0">
          <div className="text-xs font-black uppercase tracking-widest">
            LEGAL DOCUMENT
          </div>

          <div className="mt-4 text-2xl font-black uppercase leading-none">
            SEARCH.
            <br />
            RETRIEVE.
            <br />
            REASON.
          </div>

          <div className="mt-4 h-2 w-full bg-black" />
          <div className="mt-2 h-2 w-2/3 bg-black" />
        </div>
      )}

      <span className="absolute bottom-3 right-3 text-xs font-black uppercase">
        PROJECT / {number}
      </span>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4f1e8] text-black">
      <RocketIntro />

      <ScrollProgress />
      <CustomCursor />
      {/* NAVIGATION */}
      <Navbar />

      {/* HERO */}
      <section
        id="home"
        className="grid min-h-[85vh] grid-cols-1 items-center gap-12 px-5 py-16 md:grid-cols-2 md:px-12 md:py-24"
      >
        <div>
          <div className="mb-8 inline-flex items-center gap-3 border-2 border-black px-4 py-2">
            <span className="h-3 w-3 rounded-full bg-[#d7ff00]" />

            <span className="text-xs font-black uppercase tracking-widest">
              Developer · India
            </span>
          </div>

          <h1 className="text-6xl font-black uppercase leading-[0.85] tracking-tighter sm:text-7xl md:text-8xl lg:text-[110px]">
            KUNAL
            <br />
            YELGATE
            <br />
            <span className="text-[#777]"></span>
          </h1>

          <p className="mt-8 max-w-xl text-lg font-medium leading-relaxed md:text-xl">
            I build digital experiences, full-stack applications, and
            AI-powered tools that solve real problems.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="border-2 border-black bg-black px-6 py-4 text-sm font-black uppercase tracking-wider text-white transition hover:bg-[#d7ff00] hover:text-black"
            >
              Explore Projects ↘
            </a>

            <a
              href="#contact"
              className="border-2 border-black px-6 py-4 text-sm font-black uppercase tracking-wider transition hover:bg-black hover:text-white"
            >
              Get In Touch ↗
            </a>
          </div>
        </div>

        {/* KY MONOGRAM */}
        <div className="flex items-center justify-center">
          <div className="relative flex aspect-square w-full max-w-md items-center justify-center border-2 border-black bg-[#d7ff00]">
            <div className="absolute left-5 top-5 text-xs font-black uppercase tracking-widest">
              PORTFOLIO / 2026
            </div>

            <div className="select-none text-[150px] font-black leading-none tracking-tighter sm:text-[200px] md:text-[230px]">
              KY
            </div>

            <div className="absolute bottom-5 right-5 border-2 border-black bg-[#f4f1e8] px-4 py-2 text-xs font-black uppercase">
              Creative Developer
            </div>

            <div className="absolute right-5 top-16 text-4xl font-black">
              ✳
            </div>

            <div className="absolute bottom-16 left-5 text-4xl font-black">
              +
            </div>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <BrutalistTicker />

      {/* PROJECTS */}
      <section id="projects" className="px-5 py-20 md:px-12 md:py-28">
        <SectionLabel number="01" label="Selected Projects" />

        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="text-5xl font-black uppercase leading-none tracking-tighter md:text-7xl">
            WORK THAT
            <br />
            <span className="text-[#777]">MATTERS.</span>
          </h2>

          <p className="max-w-sm text-base font-medium leading-relaxed">
            A collection of experiments, engineering projects, and ideas
            brought to life through code.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group flex flex-col border-2 border-black bg-[#f4f1e8] transition duration-300 hover:-translate-y-2 hover:bg-[#d7ff00]"
            >
              <div className="flex items-center justify-between border-b-2 border-black p-5">
                <span className="text-sm font-black">
                  {project.number}
                </span>

                <span className="text-xs font-black uppercase tracking-widest">
                  {project.category}
                </span>
              </div>

              {/* PROJECT VISUAL */}
              <ProjectVisual number={project.number} />

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-3xl font-black uppercase tracking-tighter">
                  {project.title}
                </h3>

                <p className="mt-4 flex-1 text-sm font-medium leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((technology) => (
                    <span
                      key={technology}
                      className="border border-black px-3 py-1 text-xs font-bold uppercase"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 flex items-center justify-between border-t-2 border-black pt-4 text-sm font-black uppercase"
                >
                  View Repository

                  <span className="text-xl transition group-hover:translate-x-2">
                    ↗
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="border-y-2 border-black bg-[#e5e1d7] px-5 py-20 md:px-12 md:py-28"
      >
        <SectionLabel number="02" label="About Me" />

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-5xl font-black uppercase leading-[0.9] tracking-tighter md:text-7xl">
              CODE.
              <br />
              CREATE.
              <br />
              <span className="text-[#777]">REPEAT.</span>
            </h2>
          </div>

          <div>
            <p className="text-lg font-medium leading-relaxed md:text-xl">
              I&apos;m Kunal Yelgate, a developer interested in full-stack
              engineering, cloud technologies, and artificial intelligence.
              I enjoy turning ideas into practical applications and
              continuously improving my engineering skills.
            </p>

            <p className="mt-6 text-base leading-relaxed">
              My focus is on learning by building, exploring new technologies,
              and creating projects that combine useful functionality with
              thoughtful design.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://github.com/kunal-yelgate"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-black bg-black px-5 py-3 text-sm font-black uppercase text-white transition hover:bg-[#d7ff00] hover:text-black"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/kunal-yelgate"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-black px-5 py-3 text-sm font-black uppercase transition hover:bg-black hover:text-white"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNICAL ARSENAL */}
      <section className="px-5 py-20 md:px-12 md:py-28">
        <SectionLabel number="03" label="Technical Arsenal" />

        <h2 className="mb-12 text-5xl font-black uppercase leading-none tracking-tighter md:text-7xl">
          TOOLS OF
          <br />
          <span className="text-[#777]">THE TRADE.</span>
        </h2>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {skillGroups.map((group, index) => (
            <div
              key={group.title}
              className="border-2 border-black p-6 transition hover:bg-[#d7ff00]"
            >
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-lg font-black uppercase tracking-wider">
                  {group.title}
                </h3>

                <span className="text-sm font-black">
                  0{index + 1}
                </span>
              </div>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="border-2 border-black px-3 py-2 text-sm font-bold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="border-t-2 border-black bg-black px-5 py-20 text-white md:px-12 md:py-28"
      >
        <SectionLabel number="04" label="Contact" />

        <h2 className="text-5xl font-black uppercase leading-[0.9] tracking-tighter md:text-8xl">
          HAVE AN
          <br />
          <span className="text-[#d7ff00]">IDEA?</span>
          <br />
          LET&apos;S BUILD.
        </h2>

        <p className="mt-8 max-w-xl text-base leading-relaxed text-neutral-300 md:text-lg">
          Interested in collaborating, discussing a project, or connecting
          with another developer? Let&apos;s make something meaningful.
        </p>

        <a
          href="mailto:your-email@example.com"
          className="mt-10 inline-flex border-2 border-[#d7ff00] bg-[#d7ff00] px-6 py-4 text-sm font-black uppercase tracking-wider text-black transition hover:bg-transparent hover:text-[#d7ff00]"
        >
          Send Me an Email ↗
        </a>
      </section>

      {/* FOOTER */}
      <footer className="flex flex-col justify-between gap-4 border-t-2 border-white bg-black px-5 py-6 text-xs font-bold uppercase tracking-widest text-white md:flex-row md:px-12">
        <p>© 2026 Kunal Yelgate</p>

        <p>Designed & Built with Next.js</p>

        <a
          href="#home"
          className="transition hover:text-[#d7ff00]"
        >
          Back to Top ↑
        </a>
      </footer>
    </main>
  );
}
