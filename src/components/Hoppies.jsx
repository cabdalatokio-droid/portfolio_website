import { Trophy, Dumbbell } from "lucide-react";

const Hobbies = () => {
  return (
    <section
      id="hobbies"
      className="page-section bg-page px-4 text-text-primary sm:px-6"
      aria-labelledby="hobbies-heading"
    >
      <div className="mx-auto w-full max-w-[1200px]">
        {/* Section Heading */}
        <div className="mb-12">
          <p className="mb-4 font-mono text-sm font-semibold uppercase tracking-[0.2em] text-brand-400">
            Off the Clock
          </p>

          <h2
            id="hobbies-heading"
            className="font-display text-4xl font-bold tracking-brand sm:text-5xl"
          >
            Beyond the Code
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-body text-text-muted">
            What keeps me active, focused, and balanced when the laptop screen
            closes.
          </p>
        </div>

        {/* Hobby Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Football Card */}
          <article className="rounded-card border border-border bg-surface p-6 shadow-card transition-all duration-300 ease-brand hover:-translate-y-1 hover:border-brand-500/50 hover:shadow-card-hover sm:p-8">
            <div className="flex items-center gap-4">
              <Trophy
                size={28}
                className="shrink-0 text-brand-400"
                aria-hidden="true"
              />

              <h3 className="font-display text-xl font-bold tracking-brand sm:text-2xl">
                Football
              </h3>
            </div>

            <div className="my-6 h-px bg-border" />

            <p className="text-base leading-body text-text-muted sm:text-lg">
              Football keeps me active and teaches me teamwork, discipline,
              and strategic thinking. I enjoy the competition, improving my
              skills, and working together toward a common goal.
            </p>
          </article>

          {/* Gym Card */}
          <article className="rounded-card border border-border bg-surface p-6 shadow-card transition-all duration-300 ease-brand hover:-translate-y-1 hover:border-brand-500/50 hover:shadow-card-hover sm:p-8">
            <div className="flex items-center gap-4">
              <Dumbbell
                size={28}
                className="shrink-0 text-brand-400"
                aria-hidden="true"
              />

              <h3 className="font-display text-xl font-bold tracking-brand sm:text-2xl">
                Gym &amp; Training
              </h3>
            </div>

            <div className="my-6 h-px bg-border" />

            <p className="text-base leading-body text-text-muted sm:text-lg">
              Training helps me build strength, discipline, and consistency.
              It provides a physical reset from coding, improves my stamina,
              and helps me stay focused during long development sessions.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;