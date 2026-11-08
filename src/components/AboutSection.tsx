import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { Section } from './Section';

const principles = [
  {
    title: 'Models built from scratch',
    description:
      'Custom neural network layers, custom loss functions with tf.GradientTape, Seq2Seq with teacher forcing, and OCR engines built without relying on black-box APIs.'
  },
  {
    title: 'Production systems thinking',
    description:
      'Taking machine learning research into production microservices with FastAPI, Docker, and responsive frontends designed for real-world adoption.'
  },
  {
    title: 'Cross-functional leadership',
    description:
      "Directing international relations at AIESEC in BINUS, organizing events hosted at Grab's headquarters, and coordinating multi-disciplinary hackathon teams."
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
      intro="Based in West Jakarta, combining academic computer science foundations with hands-on capstone engineering and cross-border leadership."
    >
      <div className="mx-auto max-w-[60ch] font-serif text-[1.1875rem] leading-[1.75] text-fg/90">
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
            <p className="mt-3 text-[0.95rem] text-muted">{item.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
};
