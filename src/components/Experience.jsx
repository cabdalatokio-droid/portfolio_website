
import {
  BriefcaseBusiness,
  GraduationCap,
  MapPin,
  CalendarDays,
  CheckCircle2,
} from "lucide-react";

const technologies = [
  "React",
  "Tailwind CSS",
  "Supabase",
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST APIs",
  "JWT",
];

const competencies = [
  "JavaScript & React",
  "Database Design",
  "REST API Development",
  "Authentication",
  "Responsive UI Design",
];

const Experience = () => {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="bg-page px-4 py-16 text-text-primary sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Section Heading */}
        <header className="mb-10 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-400">
            Career & Credentials
          </p>

          <h2
            id="experience-heading"
            className="mt-3 font-display text-3xl font-extrabold leading-heading tracking-brand sm:text-4xl"
          >
            Experience & Education
          </h2>

          <p className="mt-3 max-w-2xl text-base leading-body text-text-secondary">
            Applying software engineering concepts to practical
            web applications while pursuing my university studies.
          </p>
        </header>

        {/* Experience and Education */}
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-2">

          {/* Project Experience */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-button border border-border bg-surface text-brand-400">
                <BriefcaseBusiness
                  className="h-5 w-5"
                  aria-hidden="true"
                />
              </span>

              <h3 className="font-display text-xl font-bold">
                Project Experience
              </h3>
            </div>

            <article className="rounded-card border border-border bg-surface p-5 shadow-card transition-colors duration-200 hover:border-brand-500/30 sm:p-6">
              <h4 className="font-display text-lg font-bold leading-snug sm:text-xl">
                Full-Stack Web Developer
              </h4>

              <p className="mt-1 font-semibold text-brand-300">
                Personal & Academic Projects
              </p>

              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-text-muted">
                <span className="inline-flex items-center gap-2">
                  <CalendarDays
                    className="h-4 w-4 text-brand-400"
                    aria-hidden="true"
                  />
                  Ongoing
                </span>

                <span className="inline-flex items-center gap-2">
                  <MapPin
                    className="h-4 w-4 text-brand-400"
                    aria-hidden="true"
                  />
                  Ethiopia
                </span>
              </div>

              <p className="mt-4 text-sm leading-6 text-text-secondary">
                Developing database-driven applications that solve
                practical problems, combining responsive React
                interfaces with backend services and data management.
              </p>

              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-2.5 text-sm leading-6 text-text-secondary">
                  <CheckCircle2
                    className="mt-1 h-4 w-4 shrink-0 text-brand-400"
                    aria-hidden="true"
                  />
                  Built a school management system for student
                  records, teachers, classes, fees, attendance,
                  and dashboard statistics using React and Supabase.
                </li>

                <li className="flex items-start gap-2.5 text-sm leading-6 text-text-secondary">
                  <CheckCircle2
                    className="mt-1 h-4 w-4 shrink-0 text-brand-400"
                    aria-hidden="true"
                  />
                  Developed a full-stack authentication project
                  using Express and MongoDB, practicing password
                  hashing, login validation, and JWT authentication.
                </li>
              </ul>

              <div className="mt-5 border-t border-border pt-4">
                <h5 className="text-xs font-semibold uppercase tracking-[0.14em] text-text-muted">
                  Technologies
                </h5>

                <div className="mt-3 flex flex-wrap gap-2">
                  {technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-border bg-surface-soft px-2.5 py-1.5 text-xs font-medium text-text-secondary transition-colors hover:border-brand-500/30 hover:text-brand-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </div>

          {/* Education & Credentials */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-button border border-border bg-surface text-brand-400">
                <GraduationCap
                  className="h-5 w-5"
                  aria-hidden="true"
                />
              </span>

              <h3 className="font-display text-xl font-bold">
                Education & Credentials
              </h3>
            </div>

            <article className="rounded-card border border-border bg-surface p-5 shadow-card transition-colors duration-200 hover:border-brand-500/30 sm:p-6">
              <h4 className="font-display text-lg font-bold leading-snug sm:text-xl">
                Bachelor of Science in Software Engineering
              </h4>

              <p className="mt-2 font-semibold text-brand-300">
                Arba Minch University
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-text-muted">
                <span className="inline-flex items-center gap-2">
                  <CalendarDays
                    className="h-4 w-4 text-brand-400"
                    aria-hidden="true"
                  />
                  Undergraduate · In Progress
                </span>

                <span className="inline-flex items-center gap-2">
                  <MapPin
                    className="h-4 w-4 text-brand-400"
                    aria-hidden="true"
                  />
                  Arba Minch, Ethiopia
                </span>
              </div>

              <p className="mt-4 text-sm leading-6 text-text-secondary">
                Studying software engineering while developing
                practical skills in programming, application
                architecture, databases, and full-stack development
                through academic work and personal projects.
              </p>

              <div className="mt-5 border-t border-border pt-4">
                <h5 className="text-xs font-semibold uppercase tracking-[0.14em] text-text-muted">
                  Core Competencies
                </h5>

                <div className="mt-3 flex flex-wrap gap-2">
                  {competencies.map((competency) => (
                    <span
                      key={competency}
                      className="rounded-md border border-border bg-surface-soft px-2.5 py-1.5 text-xs font-medium text-text-secondary"
                    >
                      {competency}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
