
import {
  ArrowUpRight,
  GraduationCap,
  Boxes,
  Smartphone,
  Code2,
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "School Management System",
    category: "Web Application",
    description:
      "A school administration system for managing students, teachers, classes, attendance, and fee records, with role-based administrative permissions.",
    technologies: [
      "React",
      "Supabase",
      "Tailwind CSS",
      "Mantine",
      "Recharts",
    ],
    icon: GraduationCap,
    featured: true,
    status: "In Development",
  },
  {
    number: "02",
    title: "Bole Public Commodity Distribution",
    category: "Full-Stack Application",
    description:
      "A MERN-stack application developed around public commodity distribution workflows.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js"],
    icon: Boxes,
  },
  {
    number: "03",
    title: "Inventory & Delivery App",
    category: "Mobile Application",
    description:
      "A mobile application focused on inventory management and delivery confirmation, built with Flutter and Dart.",
    technologies: ["Flutter", "Dart"],
    icon: Smartphone,
  },
  {
    number: "04",
    title: "Full-Stack Posts App",
    category: "Full-Stack Application",
    description:
      "A full-stack application featuring user authentication, protected post operations, image uploads, and cloud-based media storage.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Cloudinary",
    ],
    icon: Code2,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="page-section bg-page text-text-primary"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto w-full max-w-[var(--page-max-width)] px-6 sm:px-8">

        {/* Section Header */}
        <div className="mb-12 max-w-2xl">
          <p className="mb-4 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-300">
            <span className="h-px w-8 bg-brand-400" />
            What I've built
          </p>

          <h2
            id="projects-heading"
            className="font-display text-4xl font-bold tracking-brand sm:text-5xl"
          >
            My Projects
            <span className="text-brand-400">.</span>
          </h2>

          <p className="mt-5 text-base leading-body text-text-secondary sm:text-lg">
            A selection of projects showcasing my experience in building
            web applications, managing data, and developing practical
            software solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-5 md:grid-cols-2">

          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <article
                key={project.number}
                className={`
                  group relative overflow-hidden rounded-card
                  border border-border bg-surface p-6
                  shadow-card transition-all duration-300 ease-brand
                  hover:-translate-y-1 hover:border-brand-500/50
                  hover:shadow-card-hover sm:p-7
                  ${
                    project.featured
                      ? "md:col-span-2 md:grid md:grid-cols-[1.2fr_0.8fr] md:items-center md:gap-8"
                      : ""
                  }
                `}
              >
                {/* Subtle Hover Background */}
                <div className="pointer-events-none absolute -right-16 -top-20 size-48 rounded-full bg-brand-500/5 blur-3xl transition-all duration-300 group-hover:bg-brand-500/10" />

                <div className="relative z-10">

                  {/* Project Top */}
                  <div className="mb-8 flex items-center justify-between">
                    <span className="font-mono text-sm text-text-muted">
                      / {project.number}
                    </span>

                    {project.status && (
                      <span className="rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-300">
                        {project.status}
                      </span>
                    )}
                  </div>

                  {/* Project Icon */}
                  <div className="mb-6 flex size-12 items-center justify-center rounded-button border border-brand-400/20 bg-brand-500/10 text-brand-300 transition-colors duration-300 group-hover:bg-brand-500/20">
                    <Icon size={24} strokeWidth={1.7} />
                  </div>

                  {/* Project Details */}
                  <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-300">
                    {project.category}
                  </p>

                  <h3 className="mb-3 font-display text-xl font-semibold tracking-brand text-text-primary sm:text-2xl">
                    {project.title}
                  </h3>

                  <p className="max-w-xl text-sm leading-body text-text-secondary sm:text-base">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md border border-border bg-surface-soft px-3 py-1.5 text-xs font-medium text-text-muted transition-colors duration-200 group-hover:border-brand-500/20 group-hover:text-text-secondary"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Featured Project Decoration */}
                {project.featured && (
                  <div className="relative mt-10 hidden min-h-64 items-center justify-center overflow-hidden rounded-card border border-brand-400/15 bg-gradient-to-br from-brand-900/30 via-surface-soft to-surface md:flex">

                    <div className="absolute size-52 rounded-full border border-brand-300/10" />
                    <div className="absolute size-40 rounded-full border border-brand-300/15" />
                    <div className="absolute size-28 rounded-full border border-brand-300/20" />

                    <div className="relative flex size-24 items-center justify-center rounded-2xl border border-brand-300/20 bg-surface shadow-brand">
                      <GraduationCap
                        size={48}
                        strokeWidth={1.3}
                        className="text-brand-300"
                      />
                    </div>

                    <span className="absolute bottom-5 right-5 font-mono text-xs tracking-widest text-brand-300/70">
                      SCHOOL MANAGEMENT
                    </span>
                  </div>
                )}
              </article>
            );
          })}

        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col items-start justify-between gap-5 border-t border-border pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-text-secondary">
            Have a project in mind? Let's discuss it.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 font-semibold text-brand-300 transition-colors duration-200 hover:text-brand-200"
          >
            Get in touch
            <ArrowUpRight size={18} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;
