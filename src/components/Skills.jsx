
const skillGroups = [
  {
    title: "Web (React & Next.js)",
    icon: "web",
    skills: [
      "Next.js App Router & SSR",
      "TypeScript & Clean React",
      "Tailwind CSS Architecture",
      "Responsive Layouts & A11y",
      "Client State & UI Engineering",
    ],
  },
  {
    title: "Backend & Services",
    icon: "server",
    skills: [
      "Node.js & Express.js",
      "RESTful API Design & Auth",
      "WebSockets & Realtime Feeds",
      "Supabase & Firebase Backend",
      "Modular Microservice APIs",
    ],
  },
  {
    title: "Data & Infrastructure",
    icon: "database",
    skills: [
      "MongoDB Schema Design",
      "PostgreSQL & Relational Data",
      "Query Optimization & Indexing",
      "Vercel Edge & Cloud Deployment",
      "CI/CD Workflows & Vitest",
    ],
  },
];

const SkillIcon = ({ type }) => {
  const common = {
    width: 28,
    height: 28,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  switch (type) {
    case "mobile":
      return (
        <svg {...common}>
          <rect x="6.5" y="2.5" width="11" height="19" rx="2" />
          <path d="M11 18.5h2" />
        </svg>
      );

    case "web":
      return (
        <svg {...common}>
          <rect x="2.5" y="4" width="19" height="16" rx="1" />
          <path d="M2.5 9h19M8 9v11" />
        </svg>
      );

    case "server":
      return (
        <svg {...common}>
          <rect x="2.5" y="3" width="19" height="7" rx="1.5" />
          <rect x="2.5" y="14" width="19" height="7" rx="1.5" />
          <path d="M6 6.5h.01M6 17.5h.01" />
        </svg>
      );

    case "database":
      return (
        <svg {...common}>
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5" />
          <path d="M3 12c0 1.7 4 3 9 3s9-1.3 9-3" />
        </svg>
      );

    default:
      return null;
  }
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="page-section bg-page px-4 !pt-8 !pb-16 sm:px-6 lg:!pt-12 lg:!pb-20"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto w-full max-w-[1200px]">
        {/* Section heading */}
        <header className="mb-10 max-w-3xl sm:mb-14">
          <p className="inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-brand-500/5 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-brand-400 sm:text-sm">
            <span className="size-1.5 rounded-full bg-brand-500" />
            Capabilities
          </p>

          <h2
            id="skills-heading"
            className="mt-5 font-display text-4xl font-bold leading-tight tracking-brand text-text-primary sm:text-5xl lg:text-6xl"
          >
            Technical{" "}
            <span className="text-brand-400">Expertise</span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-text-muted sm:text-lg sm:leading-8">
            The languages, tools, and platforms I use to turn ideas into
            reliable, production-ready applications.
          </p>
        </header>

        {/* Skill cards */}
        <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3 xl:gap-6">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="group relative isolate h-full overflow-hidden rounded-3xl border border-border bg-surface p-5 shadow-card transition-all duration-300 ease-out hover:-translate-y-2 hover:border-brand-500/50 hover:shadow-xl motion-reduce:transform-none motion-reduce:transition-none sm:p-6 lg:p-7"
            >
              {/* Subtle top accent */}
              <div
                aria-hidden="true"
                className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-brand-400 to-transparent opacity-30 transition-opacity duration-300 group-hover:opacity-100"
              />

              {/* Decorative hover glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 -z-10 size-44 rounded-full bg-brand-500/5 blur-3xl transition-all duration-500 group-hover:scale-150 group-hover:bg-brand-500/10"
              />

              <div className="flex items-center gap-4 border-b border-border/80 pb-5">
                {/* Animated icon */}
                <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-brand-500/20 bg-brand-500/10 text-brand-400 transition-all duration-300 group-hover:rotate-3 group-hover:scale-110 group-hover:bg-brand-500/15 group-hover:text-brand-300">
                  <SkillIcon type={group.icon} />
                </span>

                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-lg font-bold leading-snug tracking-brand text-text-primary transition-colors duration-300 group-hover:text-brand-400 sm:text-xl">
                    {group.title}
                  </h3>

                  <p className="mt-1 text-xs font-medium text-text-muted">
                    {group.skills.length} focus areas
                  </p>
                </div>

                <span
                  aria-hidden="true"
                  className="text-xl text-text-muted/50 transition-all duration-300 group-hover:translate-x-1 group-hover:text-brand-400"
                >
                  →
                </span>
              </div>

              <ul className="mt-5 space-y-1">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="group/skill flex items-start gap-3 rounded-xl px-3 py-2.5 text-[15px] leading-6 text-text-secondary transition-colors duration-200 hover:bg-brand-500/5 hover:text-text-primary sm:text-base"
                  >
                    <span className="mt-[9px] size-2 shrink-0 rounded-full bg-brand-500/70 transition-all duration-200 group-hover/skill:scale-150 group-hover/skill:bg-brand-400" />

                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
