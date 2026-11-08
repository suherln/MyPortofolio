import React, { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { DownloadCv } from './DownloadCv';
import { useActiveSection } from '../hooks/useActiveSection';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Credentials', href: '#credentials' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' }
];

const sectionIds = links.map((link) => link.href.slice(1));

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(sectionIds);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${ratio})`;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-200 ${
        scrolled || menuOpen
          ? 'border-b border-line bg-canvas/85 backdrop-blur-md'
          : 'border-b border-transparent'
      }`}
    >

      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-6 md:grid md:grid-cols-[1fr_auto_1fr]">
        <a href="#overview" className="shrink-0 justify-self-start font-serif text-lg tracking-tight text-fg">
          {portfolioData.profile.name}
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? 'true' : undefined}
                className={`border-b py-1 text-sm transition-colors ${
                  isActive
                    ? 'border-accent text-fg'
                    : 'border-transparent text-muted hover:border-line-strong hover:text-fg'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 justify-self-end md:flex">
          <DownloadCv className="btn btn-secondary btn-sm" iconClassName="h-3.5 w-3.5" />
          <a href="#contact" className="btn btn-primary btn-sm">
            Contact
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className="-mr-2 rounded-md p-2 text-fg transition-colors hover:bg-raised md:hidden"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        ref={progressRef}
        aria-hidden="true"
        className="absolute bottom-[-1px] left-0 h-px w-full origin-left bg-accent"
        style={{ transform: 'scaleX(0)' }}
      />

      {menuOpen && (
        <div id="mobile-menu" className="border-t border-line px-6 pt-4 pb-6 md:hidden">
          <nav aria-label="Mobile" className="flex flex-col text-center">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-line py-3 text-fg"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-5 flex gap-2">
            <DownloadCv className="btn btn-secondary flex-1" onClick={() => setMenuOpen(false)} />
            <a href="#contact" onClick={() => setMenuOpen(false)} className="btn btn-primary flex-1">
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
