import React from 'react';
import { NodeGlyph } from './NodeGlyph';

interface SectionProps {
  id?: string;
  title: string;
  intro?: string;
  size?: 'narrow' | 'wide';
  tone?: 'base' | 'alt';
  children: React.ReactNode;
}

const widths = {
  narrow: 'max-w-3xl',
  wide: 'max-w-5xl'
} as const;

export const Section: React.FC<SectionProps> = ({ id, title, intro, size = 'narrow', tone = 'base', children }) => (
  <section id={id} className={`relative py-14 md:py-20 ${tone === 'alt' ? 'bg-surface/50' : ''}`}>
    <div
      aria-hidden="true"
      className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-line-strong to-transparent"
    />
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(ellipse_50%_100%_at_50%_0%,rgba(143,183,232,0.10),transparent)]"
    />
    <div className="relative mx-auto max-w-6xl px-6">
      <header className="mx-auto max-w-xl text-center">
        <NodeGlyph className="mx-auto mb-4" />
        <h2 className="bg-gradient-to-b from-fg to-accent/80 bg-clip-text font-serif text-title text-transparent">{title}</h2>
        {intro && <p className="mt-3 text-muted">{intro}</p>}
      </header>
      <div className={`mx-auto mt-9 ${widths[size]}`}>{children}</div>
    </div>
  </section>
);
