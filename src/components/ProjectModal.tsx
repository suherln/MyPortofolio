import React from 'react';
import { ArrowUpRight, FileText, Github } from 'lucide-react';
import { hasLink, Project } from '../data/portfolioData';
import { ProjectImage } from './ProjectImage';
import { Modal } from './Modal';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const Block: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className="mx-auto max-w-[62ch] space-y-4">
    <h3 className="text-center font-serif text-xl tracking-tight text-fg">{title}</h3>
    {children}
  </section>
);

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const github = project?.links.github;
  const deck = project?.links.pitchDeck;

  return (
    <Modal
      open={project !== null}
      onClose={onClose}
      label={project ? `${project.title} case study` : 'Case study'}
      heading={project && `${project.role}, ${project.yearAccomplished}`}
      size="lg"
    >
      {project && (
        <article className="space-y-12 p-6 sm:p-10">
          <ProjectImage imageName={project.imageName} projectTitle={project.title} aspectRatio="wide" />

          <header className="flex flex-col items-center text-center">
            <h2 className="font-serif text-4xl tracking-tight text-fg">{project.title}</h2>
            <p className="mt-2 text-muted">{project.projectType}</p>

            {project.highlightMetric && (
              <div className="mt-6">
                <p className="font-serif text-3xl tracking-tight text-fg tabular-nums">
                  {project.highlightMetric.value}
                </p>
                <p className="mt-1 text-sm text-subtle">{project.highlightMetric.label}</p>
              </div>
            )}

            {(hasLink(github) || hasLink(deck)) && (
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                {hasLink(github) && (
                  <a href={github} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">
                    <Github className="h-4 w-4" />
                    View source
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                )}
                {hasLink(deck) && (
                  <a href={deck} target="_blank" rel="noreferrer" className="btn btn-secondary btn-sm">
                    <FileText className="h-4 w-4" />
                    Pitch deck
                    <ArrowUpRight className="h-3.5 w-3.5 text-subtle" />
                  </a>
                )}
              </div>
            )}
          </header>

          <Block title="Project Description">
            <p className="text-muted">{project.description}</p>
          </Block>

          <Block title="Key Responsibilities">
            <ul className="list-disc space-y-2.5 pl-5 text-muted marker:text-subtle">
              {project.keyResponsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Block>

          <Block title="Project Outcomes">
            <ul className="list-disc space-y-2.5 pl-5 text-fg/90 marker:text-subtle">
              {project.results.map((result) => (
                <li key={result}>{result}</li>
              ))}
            </ul>
          </Block>

          <Block title="Skills and tools">
            <p className="text-center text-muted">{project.technologies.join(', ')}</p>
          </Block>
        </article>
      )}
    </Modal>
  );
};
