import {
  BriefcaseBusiness,
  GraduationCap,
  MapPin,
} from "lucide-react";

const projects = [
  {
    title: "School Management System",
    description:
      "An ongoing project for student records, attendance, and school administration, built with React and Supabase.",
  },
  {
    title: "Full-Stack Authentication App",
    description:
      "A learning project using React, Node.js, Express, MongoDB, and REST APIs to build registration and login features.",
  },
];

const technologies = [
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "REST APIs",
  "Supabase",
];

const Experience = () => {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="bg-page px-4 py-16 text-text-primary sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="mx-auto w-full max-w-7xl">
        <header className="mb-10 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-600">
            Experience &amp; Education
          </p>
          <h2
            id="experience-heading"
            className="mt-3 font-display text-3xl font-extrabold leading-tight tracking-brand sm:text-4xl"
          >
            My Journey
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-text-secondary">
            I’m a software engineering student building practical projects as
            I grow my development skills.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-brand-600">
                <BriefcaseBusiness className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="font-display text-xl font-bold">
                Project Experience
              </h3>
            </div>

            <article className="h-full rounded-2xl border border-border bg-surface p-5 shadow-card sm:p-7">
              <div className="space-y-5">
                {projects.map((project) => (
                  <div key={project.title}>
                    <h4 className="font-display text-lg font-bold leading-snug">
                      {project.title}
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-text-secondary">
                      {project.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-5 border-t border-border pt-4">
                <h5 className="text-xs font-semibold uppercase tracking-[0.14em] text-text-muted">
                  Technologies
                </h5>
                <div className="mt-3 flex flex-wrap gap-2">
                  {technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md bg-surface-soft px-2.5 py-1 text-xs font-medium text-text-secondary"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </div>

          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-brand-600">
                <GraduationCap className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="font-display text-xl font-bold">Education</h3>
            </div>

            <article className="rounded-2xl border border-border bg-surface p-5 shadow-card sm:p-7">
              <span className="inline-flex rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                Currently Studying
              </span>
              <h4 className="mt-4 font-display text-lg font-bold leading-snug sm:text-xl">
                Software Engineering
              </h4>
              <p className="mt-2 font-semibold text-brand-600">
                Arba Minch University
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm text-text-muted">
                <MapPin
                  className="h-4 w-4 shrink-0 text-brand-600"
                  aria-hidden="true"
                />
                <span>Arba Minch, Ethiopia</span>
              </div>
              <p className="mt-5 text-sm leading-6 text-text-secondary">
                Developing my knowledge of software design, databases, and
                application development through my studies and personal
                projects.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
