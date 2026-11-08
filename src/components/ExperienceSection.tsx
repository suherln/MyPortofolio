import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { FilterTabs } from './FilterTabs';
import { Section } from './Section';

type ExperienceFilter = 'all' | 'leadership' | 'program' | 'recognition';

const filters: { id: ExperienceFilter; label: string }[] = [
  { id: 'all', label: 'All roles' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'program', label: 'Programs' },
  { id: 'recognition', label: 'Recognitions' }
];

const Dot: React.FC = () => (
  <span
    aria-hidden="true"
    className="absolute top-[1.9rem] -left-8 hidden h-3.5 w-3.5 rounded-full border-2 border-accent bg-canvas shadow-[0_0_14px_rgba(143,183,232,0.5)] sm:block"
  />
);

export const ExperienceSection: React.FC = () => {
  const { experience, education } = portfolioData;
  const [filter, setFilter] = useState<ExperienceFilter>('all');
  const edu = education[0];

  const visible = experience.filter((item) => filter === 'all' || item.category === filter);

  return (
    <Section id="experience" title="Experience" tone="alt">
      <FilterTabs label="Filter experience" options={filters} value={filter} onChange={setFilter} />

      <ol className="relative mt-8 space-y-4 sm:pl-8 sm:before:absolute sm:before:top-3 sm:before:bottom-3 sm:before:left-[6px] sm:before:w-px sm:before:bg-gradient-to-b sm:before:from-accent/70 sm:before:via-line-strong sm:before:to-transparent">
        {visible.map((item) => (
          <li key={`${item.organization}-${item.role}`} className="panel relative p-6">
            <Dot />
            <p className="text-sm text-accent">
              {item.startDate} to {item.endDate}
              <span className="text-subtle">, {item.duration}</span>
            </p>

            <h3 className="mt-3 font-serif text-xl tracking-tight text-fg">{item.role}</h3>
            <p className="mt-1 text-muted">
              {item.organization}
              <span className="text-subtle">, {item.note}</span>
            </p>

            {Array.isArray(item.description) ? (
              <ul className="mt-4 max-w-[72ch] list-disc space-y-1.5 pl-5 text-[0.95rem] text-muted marker:text-subtle">
                {item.description.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 max-w-[72ch] text-[0.95rem] text-muted">{item.description}</p>
            )}
          </li>
        ))}

        <li className="panel relative p-6">
          <Dot />
          <p className="text-sm text-accent">
            {edu.startDate} to {edu.endDate}
            <span className="text-subtle">, {edu.location}</span>
          </p>

          <h3 className="mt-3 font-serif text-xl tracking-tight text-fg">{edu.degree}</h3>
          <p className="mt-1 text-muted">
            {edu.institution}
            <span className="text-subtle">, GPA {edu.gpa}</span>
          </p>
        </li>
      </ol>
    </Section>
  );
};