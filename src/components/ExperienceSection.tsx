import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { FilterTabs } from './FilterTabs';
import { Section } from './Section';

type ExperienceFilter = 'all' | 'leadership' | 'program';

const filters: { id: ExperienceFilter; label: string }[] = [
  { id: 'all', label: 'All roles' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'program', label: 'Programs' }
];

export const ExperienceSection: React.FC = () => {
  const { experience, education } = portfolioData;
  const [filter, setFilter] = useState<ExperienceFilter>('all');
  const edu = education[0];

  const visible = experience.filter((item) => filter === 'all' || item.category === filter);

  return (
    <Section id="experience" title="Experience" tone="alt">
      <FilterTabs label="Filter experience" options={filters} value={filter} onChange={setFilter} />

      <ol className="mt-8 space-y-4">
        {visible.map((item) => (
          <li
            key={`${item.organization}-${item.role}`}
            className="panel grid gap-3 p-6 sm:grid-cols-[13.5rem_1fr] sm:gap-5"
          >
            <div className="text-sm">
              <p className="text-accent">
                {item.startDate} to {item.endDate}
              </p>
              <p className="mt-0.5 text-subtle">{item.duration}</p>
            </div>
            <div>
              <h3 className="font-serif text-xl tracking-tight text-fg">{item.role}</h3>
              <p className="mt-1 text-muted">
                {item.organization}
                <span className="text-subtle">, {item.note}</span>
              </p>
              {Array.isArray(item.description) ? (
                <ul className="mt-4 max-w-[58ch] list-disc space-y-1.5 pl-5 text-justify text-[0.95rem] text-muted marker:text-subtle">
                  {item.description.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              ) : (
                <p className="mt-4 max-w-[58ch] text-justify text-[0.95rem] text-muted">{item.description}</p>
              )}
            </div>
          </li>
        ))}

        <li className="panel grid gap-3 p-6 sm:grid-cols-[13.5rem_1fr] sm:gap-5">
          <div className="text-sm">
            <p className="text-accent">
              {edu.startDate} to {edu.endDate}
            </p>
            <p className="mt-0.5 text-subtle">{edu.location}</p>
          </div>
          <div>
            <h3 className="font-serif text-xl tracking-tight text-fg">{edu.degree}</h3>
            <p className="mt-1 text-muted">
              {edu.institution}
              <span className="text-subtle">, GPA {edu.gpa}</span>
            </p>
          </div>
        </li>
      </ol>
    </Section>
  );
};