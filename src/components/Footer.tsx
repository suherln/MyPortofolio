import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { DownloadCv } from './DownloadCv';
import { NodeGlyph } from './NodeGlyph';

export const Footer: React.FC = () => {
  const { profile } = portfolioData;

  return (
    <footer className="border-t border-line py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center text-sm">
        <NodeGlyph />
        <nav aria-label="Footer" className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
          <a href={profile.contact.github} target="_blank" rel="noreferrer" className="text-link">
            GitHub
          </a>
          <a href={profile.contact.linkedin} target="_blank" rel="noreferrer" className="text-link">
            LinkedIn
          </a>
          <DownloadCv className="text-link" iconClassName="h-3.5 w-3.5" />
          <a href="#overview" className="text-link">
            Back to top
          </a>
        </nav>
        <p className="text-subtle">
          &copy; {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
};
