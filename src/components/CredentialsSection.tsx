import React from 'react';
import { ArrowUpRight, Check, Copy } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useCopy } from '../hooks/useCopy';
import { Section } from './Section';

export const CredentialsSection: React.FC = () => {
  const { credentials } = portfolioData;
  const { copiedKey, copy } = useCopy();

  return (
    <Section id="credentials" title="Credentials" tone="alt">
      <ul className="panel divide-y divide-line overflow-hidden">
        {credentials.map((cert) => (
          <li
            key={cert.id}
            className="flex flex-col items-center gap-4 px-6 py-6 text-center transition-colors hover:bg-raised/50 sm:flex-row sm:justify-between sm:gap-8 sm:text-left"
          >
            <div>
              <h3 className="font-serif text-xl tracking-tight text-fg">{cert.name}</h3>
              <p className="mt-1 text-sm text-muted">
                {cert.issuer}, issued {cert.issued}
              </p>
              <p className="text-sm text-subtle">Expires {cert.expires}</p>
            </div>

            <div className="flex shrink-0 flex-wrap items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => copy(cert.verificationCode, cert.id)}
                aria-label={`Copy credential code ${cert.verificationCode}`}
                className="btn btn-secondary btn-sm tabular-nums"
              >
                {copiedKey === cert.id ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-accent" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    {cert.verificationCode}
                  </>
                )}
              </button>
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary btn-sm"
                aria-label={`Verify ${cert.name}`}
              >
                Verify
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
};
