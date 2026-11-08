import React, { useState } from 'react';
import { Github, Instagram, Linkedin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { DownloadCv } from './DownloadCv';
import { NeuralBackground } from './NeuralBackground';

const delay = (ms: number) => ({ '--d': `${ms}ms` }) as React.CSSProperties;

const PHOTO = '/photos/profile.png';

export const Hero: React.FC = () => {
  const { profile } = portfolioData;
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const commaAt = profile.tagline.indexOf(',');
  const first = profile.tagline.slice(0, commaAt + 1);
  const second = profile.tagline.slice(commaAt + 1).trim();

  const socials = [
    { label: 'GitHub', href: profile.contact.github, Icon: Github },
    { label: 'LinkedIn', href: profile.contact.linkedin, Icon: Linkedin },
    {
      label: 'Instagram',
      href: `https://instagram.com/${profile.contact.instagram.replace('@', '')}`,
      Icon: Instagram
    }
  ];

  return (
    <section
      id="overview"
      className="relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden px-6 pt-24 pb-12"
    >
      <NeuralBackground />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(ellipse_45%_60%_at_50%_30%,rgba(143,183,232,0.14),transparent)]" />
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
        <div className="rise relative grid h-64 w-64 place-items-center sm:h-80 sm:w-80" style={delay(0)}>

          <svg
            aria-hidden="true"
            viewBox="0 0 100 100"
            fill="none"
            className="absolute inset-0 h-full w-full animate-[spin_140s_linear_infinite] motion-reduce:animate-none"
          >
            <circle cx="50" cy="50" r="49" className="stroke-line-strong" strokeWidth="0.5" strokeDasharray="0.6 2.2" strokeLinecap="round" />
            <circle cx="50" cy="1" r="1.6" className="fill-accent" />
            <circle cx="92.4" cy="74.5" r="1.1" className="fill-canvas stroke-accent" strokeWidth="0.5" />
            <circle cx="7.6" cy="74.5" r="1.1" className="fill-canvas stroke-line-strong" strokeWidth="0.5" />
          </svg>

          <div className="relative h-56 w-56 overflow-hidden rounded-full border border-line-strong bg-surface shadow-[0_0_70px_-8px_rgba(143,183,232,0.35)] sm:h-72 sm:w-72">
            {!failed && (
              <img
                src={PHOTO}
                alt={profile.name}
                referrerPolicy="no-referrer"
                onLoad={() => setLoaded(true)}
                onError={() => setFailed(true)}
                className={`h-full w-full object-cover object-top transition-opacity duration-300 ${
                  loaded ? 'opacity-100' : 'opacity-0'
                }`}
              />
            )}
            {(failed || !loaded) && (
              <div aria-hidden="true" className="absolute inset-0 grid place-items-center">
                <div className="absolute inset-0 opacity-70 [background-image:radial-gradient(var(--color-line-strong)_1px,transparent_1px)] [background-size:14px_14px]" />
                <span className="relative font-serif text-6xl tracking-tight text-line-strong">MRS</span>
              </div>
            )}
          </div>
        </div>

        <h1 className="rise mt-6 bg-gradient-to-b from-fg via-fg to-accent/70 bg-clip-text font-serif text-display text-transparent" style={delay(120)}>
          {profile.name}
        </h1>

        <p className="rise mt-5 font-serif text-lead text-muted" style={delay(220)}>
          <span className="block text-balance">{first}</span>
          <span className="block text-balance">{second}</span>
        </p>

        <div className="rise mt-8 flex flex-wrap items-center justify-center gap-3" style={delay(320)}>
          <a href="#projects" className="btn btn-primary">
            View projects
          </a>
          <DownloadCv />
        </div>

        <ul className="rise mt-6 flex items-center justify-center gap-3" style={delay(420)}>
          {socials.map(({ label, href, Icon }) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noreferrer" aria-label={label} title={label} className="btn-icon">
                <Icon className="h-[18px] w-[18px]" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
