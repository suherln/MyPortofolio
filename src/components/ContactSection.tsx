import React from 'react';
import { ArrowUpRight, Check, Copy, Github, Instagram, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useCopy } from '../hooks/useCopy';
import { Section } from './Section';

export const ContactSection: React.FC = () => {
  const { contact } = portfolioData.profile;
  const { copiedKey, copy } = useCopy();

  const rows = [
    {
      key: 'personalEmail',
      label: 'Personal email',
      value: contact.personalEmail,
      href: `mailto:${contact.personalEmail}`,
      actionLabel: 'Send email',
      ActionIcon: Mail,
      external: false
    },
    {
      key: 'studentEmail',
      label: 'Student email',
      value: contact.studentEmail,
      href: `mailto:${contact.studentEmail}`,
      actionLabel: 'Send email',
      ActionIcon: Mail,
      external: false
    },
    {
      key: 'phone',
      label: 'Phone and WhatsApp',
      value: contact.phone,
      href: `https://wa.me/${contact.phone.replace(/[^0-9]/g, '')}`,
      actionLabel: 'Open WhatsApp',
      ActionIcon: MessageCircle,
      external: true
    }
  ];

  const profiles = [
    { label: 'GitHub', href: contact.github, Icon: Github },
    { label: 'LinkedIn', href: contact.linkedin, Icon: Linkedin },
    { label: 'Instagram', href: `https://instagram.com/${contact.instagram.replace('@', '')}`, Icon: Instagram }
  ];

  return (
    <Section id="contact" title="Contact" tone="alt">
      <ul className="panel mx-auto max-w-xl divide-y divide-line overflow-hidden">
        {rows.map((row) => (
          <li
            key={row.key}
            className="flex flex-col items-center gap-4 px-6 py-6 text-center sm:flex-row sm:justify-between sm:text-left"
          >
            <div className="min-w-0">
              <p className="text-sm text-subtle">{row.label}</p>
              <p className="mt-1 break-words text-lg text-fg">{row.value}</p>
            </div>

            <div className="flex shrink-0 items-center gap-2">
              <button
                type="button"
                onClick={() => copy(row.value, row.key)}
                aria-label={`Copy ${row.label.toLowerCase()}`}
                className="btn btn-secondary btn-sm min-w-[5.75rem]"
              >
                {copiedKey === row.key ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-accent" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    Copy
                  </>
                )}
              </button>
              <a
                href={row.href}
                target={row.external ? '_blank' : undefined}
                rel="noreferrer"
                className="btn btn-primary btn-sm"
              >
                <row.ActionIcon className="h-4 w-4" />
                {row.actionLabel}
                {row.external && <ArrowUpRight className="h-3.5 w-3.5" />}
              </a>
            </div>
          </li>
        ))}
      </ul>

      <ul className="mt-8 flex flex-wrap items-center justify-center gap-3">
        {profiles.map(({ label, href, Icon }) => (
          <li key={label}>
            <a href={href} target="_blank" rel="noreferrer" className="btn btn-secondary">
              <Icon className="h-4 w-4" />
              {label}
              <ArrowUpRight className="h-3.5 w-3.5 text-subtle" />
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
};
