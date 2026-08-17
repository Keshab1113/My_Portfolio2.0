import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/resume', label: 'Resume' },
  { to: '/contact', label: 'Contact' },
];

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleSidebar = () => setSidebarOpen((s) => !s);
  const closeSidebar = () => setSidebarOpen(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [sidebarOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-3 backdrop-blur-xl bg-ink-950/70 border-b border-white/5'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="group flex items-center gap-3">
          <span className="relative w-10 h-10 rounded-xl overflow-hidden ring-1 ring-white/10 shadow-glow-cyan">
            <img
              src="/mypicture.png"
              alt="Keshab Das"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <span className="absolute -inset-0.5 rounded-xl bg-gradient-to-br from-cyan-400/40 to-violet-500/40 blur-md opacity-60 group-hover:opacity-100 transition-opacity pointer-events-none"></span>
          </span>
          <div className="hidden sm:block leading-tight">
            <p className="font-display font-bold text-white tracking-wide">Keshab Das</p>
            <p className="text-[11px] font-mono text-slate-400 tracking-widest uppercase">Software Engineer</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 px-2 py-1.5 rounded-full glass">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => `nav-pill text-sm ${isActive ? 'is-active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Keshab1113"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex btn-primary text-sm"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-1.93c-3.2.69-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.07 0 0 .97-.31 3.18 1.18.92-.26 1.91-.39 2.9-.39.99 0 1.98.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.6.23 2.78.11 3.07.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.69.41.35.78 1.04.78 2.1v3.12c0 .31.21.67.8.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
            </svg>
            GitHub
          </a>
          <button
            onClick={toggleSidebar}
            className="md:hidden w-10 h-10 grid place-items-center rounded-xl glass text-white"
            aria-label="Open menu"
          >
            {sidebarOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`md:hidden fixed inset-0 z-50 transition-all duration-300 ${
          sidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          onClick={closeSidebar}
          className="absolute inset-0 bg-ink-950/80 backdrop-blur-md"
        />
        <div
          className={`absolute right-0 top-0 h-full w-[80%] max-w-sm glass-strong border-l border-white/5 transition-transform duration-300 ${
            sidebarOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between p-5 border-b border-white/5">
            <div className="flex items-center gap-3">
              <span className="relative w-9 h-9 rounded-xl overflow-hidden ring-1 ring-white/10">
                <img
                  src="/mypicture.png"
                  alt="Keshab Das"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </span>
              <span className="font-display font-bold text-white">Keshab Das</span>
            </div>
            <button onClick={closeSidebar} className="w-9 h-9 grid place-items-center rounded-lg border border-white/10 text-white">
              <FiX size={18} />
            </button>
          </div>
          <nav className="flex flex-col p-5 gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                onClick={closeSidebar}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl font-semibold transition-all bg-ink-900/70 ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-400/20 to-violet-500/20 text-white border border-cyan-400/30'
                      : 'text-slate-300 border border-white/10 hover:border-cyan-400/40 hover:bg-white/10'
                  }`
                }
              >
                <span className="font-mono text-xs text-cyan-300 mr-2">0{navItems.indexOf(item) + 1}.</span>
                {item.label}
              </NavLink>
            ))}
            <a
              href="https://github.com/Keshab1113"
              target="_blank"
              rel="noreferrer"
              className="mt-4 btn-primary justify-center"
            >
              Visit GitHub
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
