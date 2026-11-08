import React from 'react';

export const NodeGlyph: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg aria-hidden="true" viewBox="0 0 64 16" fill="none" className={`h-4 w-16 ${className}`}>
    <path d="M8.5 8H55.5" className="stroke-line-strong" strokeWidth="1" />
    <circle cx="6" cy="8" r="2.5" className="fill-canvas stroke-line-strong" strokeWidth="1" />
    <circle cx="58" cy="8" r="2.5" className="fill-canvas stroke-line-strong" strokeWidth="1" />
    <circle cx="32" cy="8" r="6.5" className="stroke-accent/35" strokeWidth="1" />
    <circle cx="32" cy="8" r="3" className="fill-accent" />
  </svg>
);
