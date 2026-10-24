
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
      className="page-section !pt-2 !pb-12 bg-page px-2 sm:px-3"
      aria-labelledby="skills-heading"
    >
      <div className="w-full">
        <header className="mb-14 sm:mb-20 xl:mb-[92px]">
          <p className="text-base font-semibold uppercase leading-6 tracking-[0.18em] text-brand-400">
            Capabilities
          </p>

          <h2
            id="skills-heading"
            className="mt-2 font-display text-[38px] font-bold leading-[1.12] tracking-brand text-text-primary sm:text-[52px]"
          >
            Technical Expertise
          </h2>

          <p className="mt-4 max-w-5xl text-lg leading-relaxed text-text-muted sm:text-[23px]">
            The languages, tools, and platforms I reach for to take ideas
            from empty folder to production.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-8">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="min-h-[380px] rounded-card border border-border bg-surface p-6 shadow-card transition-all duration-300 ease-brand hover:-translate-y-1 hover:border-brand-500/60 hover:bg-surface-soft hover:shadow-card-hover sm:p-7 xl:p-9"
            >
              <div className="flex items-center gap-4 border-b border-border pb-5">
                <span className="shrink-0 text-brand-400">
                  <SkillIcon type={group.icon} />
                </span>

                <h3 className="font-display text-xl font-bold leading-snug tracking-brand text-text-primary">
                  {group.title}
                </h3>
              </div>

              <ul className="mt-6 space-y-3">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-start gap-4 text-[17px] leading-[1.55] text-text-secondary sm:text-lg"
                  >
                    <span className="mt-[10px] size-[9px] shrink-0 rounded-full bg-brand-500" />
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
