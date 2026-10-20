
import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative isolate overflow-hidden bg-slate-50 px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      {/* Subtle brand background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 -z-10 h-96 w-96 rounded-full bg-[#EEF2FF] blur-3xl"
      />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-16">

        {/* Left: Introduction */}
        <div className="flex flex-col items-start lg:col-span-7">

          {/* Location and specialty */}
          <div className="mb-7 inline-flex max-w-full items-center gap-2.5 rounded-full border border-indigo-100 bg-white px-4 py-2 shadow-sm">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-50" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#4F46E5]" />
            </span>

            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">
              Arbaminch, Ethiopia
            </span>

            <span className="hidden h-4 w-px bg-slate-200 sm:block" />

            <span className="hidden text-xs font-semibold uppercase tracking-wider text-[#4F46E5] sm:block">
              Software Engineer
            </span>
          </div>

          {/* Main heading */}
          <h1
            id="about-heading"
            className="max-w-3xl text-4xl font-extrabold leading-[1.12] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
          >
            Hi, I'm{' '}
            <span className="text-[#4F46E5]">
              Abdullahi Mohamed
            </span>
            <span className="text-[#4F46E5]">.</span>

            <span className="mt-4 block text-3xl font-bold leading-tight text-[#312E81] sm:text-4xl lg:text-[2.75rem]">
              Building modern web applications that solve real problems.
            </span>
          </h1>

          {/* Introduction */}
          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            I'm a software engineering student based in Ethiopia,
            focused on building reliable, maintainable, and user-friendly
            web applications. I work with{' '}
            <strong className="font-semibold text-slate-900">
              React
            </strong>
            ,{' '}
            <strong className="font-semibold text-slate-900">
              Node.js
            </strong>
            , and{' '}
            <strong className="font-semibold text-slate-900">
              Tailwind CSS
            </strong>{' '}
            to turn ideas into practical software, from responsive
            interfaces to full-stack applications.
          </p>

  
        

          {/* Action buttons */}
          <div className="mt-9 flex w-full flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#4F46E5] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200/70 transition duration-200 hover:-translate-y-0.5 hover:bg-[#4338CA] hover:shadow-xl active:translate-y-0"
            >
              Explore My Projects

              <svg
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M5 12h14m-7-7 7 7-7 7"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

                    
            <a
              href="/resume.pdf"
              download="Abdullahi-Mohamed-Resume.pdf"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-indigo-200 hover:bg-[#EEF2FF] hover:text-[#312E81]"
            >
              <svg
                className="h-4 w-4 text-[#4F46E5]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M12 3v12m0 0 4-4m-4 4-4-4M5 17v3h14v-3"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              Download Resume
            </a>


            <a
              href="https://github.com/cabdalatokio-droid"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my GitHub profile"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-indigo-200 hover:bg-[#EEF2FF] hover:text-[#312E81]"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>

              GitHub
            </a>
          </div>
        </div>

        {/* Right: Profile card */}
        <div className="relative mx-auto w-full max-w-md lg:col-span-5 lg:mx-0 lg:ml-auto">

          {/* Soft brand glow */}
          <div
            aria-hidden="true"
            className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-indigo-200 via-[#EEF2FF] to-indigo-100 opacity-80 blur-2xl"
          />

          <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-4 shadow-xl shadow-indigo-950/[0.06] sm:p-5">

            {/* Profile card header */}
            <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-4">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF2FF] text-sm font-bold text-[#4F46E5]">
                  AM
                </span>

                <div>
                  <p className="text-sm font-bold text-slate-900">
                    Abdullahi Mohamed
                  </p>
                  <p className="mt-0.5 text-xs text-slate-500">
                    Software Engineering Student
                  </p>
                </div>
              </div>

              <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1.5 text-xs font-semibold text-emerald-700">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Available for Hire
              </span>
            </div>

            {/* Profile image */}
            <div className="relative mt-4 overflow-hidden rounded-2xl bg-[#EEF2FF]">
              <img
                src="public/ChatGPT Image Nov 17, 2025, 05_52_58 PM.png"
                alt="Abdullahi Mohamed"
                className="aspect-[4/5] w-full object-cover object-top transition-transform duration-500 ease-out hover:scale-[1.03]"
              />
            </div>

            {/* Technology panels */}
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-slate-100 bg-slate-50 p-3.5 transition-colors hover:border-indigo-100 hover:bg-[#EEF2FF]">
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-white text-[#4F46E5] shadow-sm">
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <rect
                      x="3"
                      y="4"
                      width="18"
                      height="16"
                      rx="2"
                      strokeWidth="1.7"
                    />
                    <path
                      d="M3 9h18M8 4v5"
                      strokeWidth="1.7"
                    />
                  </svg>
                </div>

                <p className="text-sm font-bold text-slate-900">
                  Frontend
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  React, Tailwind CSS
                </p>
              </div>

              <div className="rounded-xl border border-slate-100 bg-slate-50 p-3.5 transition-colors hover:border-indigo-100 hover:bg-[#EEF2FF]">
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-white text-[#4F46E5] shadow-sm">
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <ellipse
                      cx="12"
                      cy="5"
                      rx="8"
                      ry="3"
                      strokeWidth="1.7"
                    />
                    <path
                      d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3"
                      strokeWidth="1.7"
                    />
                  </svg>
                </div>

                <p className="text-sm font-bold text-slate-900">
                  Backend
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Node.js, Supabase
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
