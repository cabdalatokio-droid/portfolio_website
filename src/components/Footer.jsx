import {
  Mail,
  Phone,
  ArrowRight,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer  id="contact"  className="border-t border-border bg-page text-text-primary">
      {/* Contact Section */}
      <section
        id="contact"
        aria-labelledby="contact-heading"
        className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
      >
        <div className="mx-auto max-w-[var(--page-max-width)] rounded-card border border-border bg-surface p-6 shadow-card sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
            {/* Left: Contact Information */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-400">
                Get In Touch
              </p>

              <h2
                id="contact-heading"
                className="mt-3 font-display text-3xl font-extrabold leading-heading tracking-brand sm:text-4xl"
              >
                Let's build something{" "}
                <span className="text-brand-400">together.</span>
              </h2>

              <p className="mt-4 text-sm leading-6 text-text-secondary">
                I'm open to full-time software engineering roles and select contract
                work. If you're building a product, hiring for an engineering team,
                or want to talk react and web architecture, drop a message below or
                reach out directly.
              </p>

              {/* Contact Details */}
              <div className="mt-6 space-y-3">
                <a
                  href="mailto:mrferidhassen@gmail.com"
                  className="group flex w-fit items-center gap-3 text-sm font-medium text-text-primary transition-colors hover:text-brand-300"
                >
                  <Mail className="h-4 w-4 shrink-0 text-brand-400" aria-hidden="true" />
                  <span>cabdalatokio@gmail.com</span>
                </a>

                <a
                  href="tel:+251912903167"
                  className="group flex w-fit items-center gap-3 text-sm font-medium text-text-primary transition-colors hover:text-brand-300"
                >
                  <Phone className="h-4 w-4 shrink-0 text-brand-400" aria-hidden="true" />
                  <span>+251985166900</span>
                </a>
              </div>

              {/* Social / Action Icons Row */}
              <div className="mt-6 flex items-center gap-3">
                <a
                  href="mailto:mrferidhassen@gmail.com"
                  aria-label="Email"
                  className="flex h-10 w-10 items-center justify-center rounded-button border border-border bg-surface-soft text-brand-400 transition-colors hover:border-brand-500/40 hover:bg-surface"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="tel:+251912903167"
                  aria-label="Phone"
                  className="flex h-10 w-10 items-center justify-center rounded-button border border-border bg-surface-soft text-brand-400 transition-colors hover:border-brand-500/40 hover:bg-surface"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-button border border-border bg-surface-soft text-brand-400 transition-colors hover:border-brand-500/40 hover:bg-surface"
                >
                  <FaLinkedin className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="https://github.com/cabdalatokio-droid"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-10 w-10 items-center justify-center rounded-button border border-border bg-surface-soft text-brand-400 transition-colors hover:border-brand-500/40 hover:bg-surface"
                >
                  <FaGithub className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Right: Contact Form */}
            <form
              action="https://formspree.io/f/YOUR_FORM_ID"
              method="POST"
              className="space-y-4"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-text-muted"
                >
                  Name
                </label>

                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="e.g. Alex Morgan"
                  maxLength={100}
                  required
                  className="w-full rounded-button border border-border-strong bg-surface-soft px-3.5 py-2.5 text-sm text-text-primary outline-none transition-colors placeholder:text-text-muted focus:border-brand-400 focus:ring-2 focus:ring-brand-500/15"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-text-muted"
                >
                  Email
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="alex@company.com"
                  maxLength={254}
                  required
                  className="w-full rounded-button border border-border-strong bg-surface-soft px-3.5 py-2.5 text-sm text-text-primary outline-none transition-colors placeholder:text-text-muted focus:border-brand-400 focus:ring-2 focus:ring-brand-500/15"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-text-muted"
                >
                  Message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  maxLength={3000}
                  placeholder="Tell me about your project or opportunity..."
                  required
                  className="w-full resize-y rounded-button border border-border-strong bg-surface-soft px-3.5 py-2.5 text-sm leading-6 text-text-primary outline-none transition-colors placeholder:text-text-muted focus:border-brand-400 focus:ring-2 focus:ring-brand-500/15"
                />
              </div>

              <button
                type="submit"
                className="group inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-button bg-brand-500 px-4 py-2.5 text-sm font-semibold text-gray-950 shadow-brand transition-all duration-200 hover:bg-brand-400 active:scale-[0.99]"
              >
                Send Message
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Bottom Footer Bar */}
      <div className="border-t border-border bg-surface/30">
        <div className="mx-auto flex max-w-[var(--page-max-width)] flex-col gap-3 px-4 py-5 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} Abdullahi MOhamed Said. All rights reserved.
          </p>

          <p className="text-xs text-text-muted">
            Arbaminch, ET &middot; React &middot; Node.js &middot; JavaScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;