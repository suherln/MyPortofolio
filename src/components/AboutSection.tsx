import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { Section } from './Section';

const principles = [
  {
    title: 'Ground-Up Data Processing',
    description:
      'Building models and data pipelines from first principles, without relying on black-box APIs or pre-built solutions.'
  },
  {
    title: 'Algorithmic Problem Solving',
    description:
      'Applying algorithmic thinking to search for optimal solutions, from research prototypes to production-ready systems.'
  },
  {
    title: 'Collaborative and International Exposure',
    description:
      'Working across borders and disciplines through international organizations, events, and multi-disciplinary team projects.'
  }
];

export const AboutSection: React.FC = () => {
  const { profile } = portfolioData;
  const [lead, ...rest] = profile.summary;
  const [expanded, setExpanded] = useState(false);

  return (
    <Section
      id="about"
      title="About"
      intro="Based in Greater Jakarta, combining academic computer science foundations with hands-on engineering and stakeholder-oriented problem solving, with a focus on bridging business problems and data AI solutions."
    >
      <div className="mx-auto max-w-[75ch] font-serif text-[1.1875rem] leading-[1.75] text-fg/90">
        <p>{lead}</p>
        {expanded && (
          <div id="about-more" className="mt-6 space-y-6">
            {rest.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        )}
      </div>

      {rest.length > 0 && (
        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={() => setExpanded((value) => !value)}
            aria-expanded={expanded}
            aria-controls="about-more"
            className="btn btn-secondary btn-sm"
          >
            {expanded ? 'Show less' : 'Read more'}
            <ChevronDown className={`h-4 w-4 transition-transform ${expanded ? 'rotate-180' : ''}`} />
          </button>
        </div>
      )}

      <ul className="mt-12 grid gap-4 text-center md:grid-cols-3">
        {principles.map((item) => (
          <li key={item.title} className="panel p-6">
            <h3 className="font-serif text-xl tracking-tight text-fg">{item.title}</h3>
            <p className="mt-3 text-[0.90rem] text-muted">{item.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
};
