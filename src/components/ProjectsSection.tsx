import React, { useMemo, useState } from 'react';
import { ArrowUpRight, FileText, Github, Search, X } from 'lucide-react';
import { hasLink, portfolioData, Project, projectCategories } from '../data/portfolioData';
import { ProjectImage } from './ProjectImage';
import { FilterTabs } from './FilterTabs';
import { Section } from './Section';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

const filters = [{ id: 'all', label: 'All' }, ...projectCategories];

const corners = [
  'top-2 left-2 border-t border-l',
  'top-2 right-2 border-t border-r',
  'bottom-2 left-2 border-b border-l',
  'bottom-2 right-2 border-b border-r'
];

const trackPointer = (event: React.PointerEvent<HTMLElement>) => {
  const rect = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty('--mx', `${event.clientX - rect.left}px`);
  event.currentTarget.style.setProperty('--my', `${event.clientY - rect.top}px`);
};

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState('all');
  const [query, setQuery] = useState('');

  const visible = useMemo(() => {
    const q = query.toLowerCase().trim();
    return projects.filter((project) => {
      const inCategory = filter === 'all' || project.category === filter;
      const inQuery =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.role.toLowerCase().includes(q) ||
        project.technologies.some((tech) => tech.toLowerCase().includes(q));
      return inCategory && inQuery;
    });
  }, [projects, filter, query]);

  const reset = () => {
    setQuery('');
    setFilter('all');
  };

  return (
    <Section id="projects" size="wide" title="Projects">
      <div className="space-y-6">
        <FilterTabs label="Filter projects by category" options={filters} value={filter} onChange={setFilter} />

        <div className="relative mx-auto w-full max-w-sm">
          <Search className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-subtle" />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by title or technology"
            aria-label="Search projects"
            className="field pr-9 pl-10 [&::-webkit-search-cancel-button]:hidden"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              aria-label="Clear search"
              className="absolute top-1/2 right-2 -translate-y-1/2 rounded p-1.5 text-muted hover:text-fg"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      </div>

      <p aria-live="polite" className="mt-6 mb-5 text-center text-sm text-subtle">
        Showing {visible.length} of {projects.length} projects
      </p>

      {visible.length === 0 ? (
        <div className="py-16 text-center">
          <p className="text-muted">No projects match your search.</p>
          <button type="button" onClick={reset} className="btn btn-secondary btn-sm mt-5">
            Clear filters
          </button>
        </div>
      ) : (

        <ul className="flex flex-wrap justify-center gap-5">
          {visible.map((project) => (
            <li key={project.id} className="w-full md:w-[calc(50%-0.625rem)]">
              <article
                onPointerMove={trackPointer}
                className="group relative flex h-full flex-col items-center panel p-5 text-center transition duration-200 focus-within:border-accent hover:-translate-y-0.5 hover:border-accent/60 hover:shadow-[0_12px_40px_-12px_rgba(143,183,232,0.25)]"
              >

                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      'radial-gradient(300px circle at var(--mx, 50%) var(--my, 50%), rgba(143, 183, 232, 0.09), transparent 65%)'
                  }}
                />
                {corners.map((corner) => (
                  <span
                    key={corner}
                    aria-hidden="true"
                    className={`pointer-events-none absolute h-2.5 w-2.5 border-line-strong transition-all duration-300 group-hover:h-4 group-hover:w-4 group-hover:border-accent ${corner}`}
                  />
                ))}
                <ProjectImage imageName={project.imageName} projectTitle={project.title} />

                <h3 className="mt-6 font-serif text-heading text-fg">{project.title}</h3>
                <p className="mt-1 text-sm text-subtle">{project.projectType}</p>
                <div className="mt-5 w-full border-t border-line pt-4">
                  <h4 className="font-serif text-lg tracking-tight text-fg">Project Outcome</h4>
                  <ul className="mt-3 w-full list-disc space-y-1.5 pl-5 text-justify text-[0.85rem] text-muted marker:text-subtle">
                    {project.results.map((result) => (
                      <li key={result}>{result}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto flex flex-wrap items-center justify-center gap-2 pt-6">
                  <button
                    type="button"
                    onClick={() => onSelectProject(project)}
                    aria-label={`View ${project.title} case study`}
                    className="btn btn-primary btn-sm after:absolute after:inset-0 after:content-['']"
                  >
                    Project Detail
                  </button>
                  {hasLink(project.links.github) && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-secondary btn-sm relative z-10"
                      aria-label={`${project.title} on GitHub`}
                    >
                      <Github className="h-4 w-4" />
                      Source Code
                      <ArrowUpRight className="h-3.5 w-3.5 text-subtle" />
                    </a>
                  )}
                  {hasLink(project.links.pitchDeck) && (
                    <a
                      href={project.links.pitchDeck}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-secondary btn-sm relative z-10"
                      aria-label={`${project.title} pitch deck`}
                    >
                      <FileText className="h-4 w-4" />
                      Pitch deck
                      <ArrowUpRight className="h-3.5 w-3.5 text-subtle" />
                    </a>
                  )}
                </div>
              </article>
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
};
