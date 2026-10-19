const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full min-h-[var(--navbar-height)] bg-page/90 border-b border-border/80 backdrop-blur-md transition-all">
      <div className="w-[min(calc(100%-3rem),var(--page-max-width))] mx-auto flex items-center justify-between py-4 px-0">
        {/* Left: Logo / Brand */}
        <a
          href="#home"
          className="flex items-center gap-2 font-display text-xl font-bold tracking-brand text-text-primary"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface shadow-xs text-brand-600 font-mono text-sm">
            &gt;_
          </span>
          <span>Tokio<span className="text-brand-600">.</span></span>
        </a>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 m-0 list-none font-medium">
            <li>
              <a href="#about" className="text-text-secondary hover:text-brand-600 transition-colors duration-[var(--transition-fast)]">About</a>
            </li>
            <li>
              <a href="#experience" className="text-text-secondary hover:text-brand-600 transition-colors duration-[var(--transition-fast)]">Experience</a>
            </li>
            <li>
              <a href="#skills" className="text-text-secondary hover:text-brand-600 transition-colors duration-[var(--transition-fast)]">Skills</a>
            </li>
            <li>
              <a href="#projects" className="text-text-secondary hover:text-brand-600 transition-colors duration-[var(--transition-fast)]">Projects</a>
            </li>
            <li>
              <a href="#hoppies" className="text-text-secondary hover:text-brand-600 transition-colors duration-[var(--transition-fast)]">Hoppies</a>
            </li>
            <li>
              <a href="#contact" className="text-text-secondary hover:text-brand-600 transition-colors duration-[var(--transition-fast)]">Contact</a>
            </li>
          </ul>
        </nav>

        {/* Far Right: CTA Button */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="inline-flex min-h-[44px] items-center justify-center gap-2 px-5 py-3 rounded-button bg-brand-600 text-text-inverse font-semibold shadow-none hover:bg-brand-700 hover:shadow-brand hover:-translate-y-px transition-all duration-[var(--transition-fast)] ease-brand"
          >
            Hire Me
          </a>
        </div>

      </div>
    </header>
  )
}

export default Header