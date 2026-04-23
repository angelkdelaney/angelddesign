import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-warm bg-paper mt-32">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="https://framerusercontent.com/images/EUSGpCVt7img99GiVWMpL6EYp0.png"
            alt="Angel Delaney"
            className="w-9 h-9 rounded-full object-cover"
          />
          <span className="font-display text-sm font-medium leading-tight">
            Angel<br />
            <span className="text-muted">Delaney</span>
          </span>
        </Link>

        {/* Nav */}
        <nav className="flex flex-col gap-4">
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/case-studies" className="nav-link">Case Studies</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>

        {/* Right */}
        <div className="flex flex-col gap-4">
          <p className="text-sm text-muted leading-relaxed">
            Always open to thoughtful conversations about product and design.
          </p>
          <a
            href="https://www.linkedin.com/in/angelkdelaney/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-accent hover:text-ink transition-colors"
          >
            LinkedIn →
          </a>
        </div>
      </div>

      <div className="border-t border-warm/60 px-6 py-5 max-w-6xl mx-auto flex items-center justify-between">
        <p className="text-xs text-muted font-mono">© 2026 Angel Delaney</p>
        <p className="text-xs text-muted/50 font-mono">angeld.design</p>
      </div>
    </footer>
  );
}
