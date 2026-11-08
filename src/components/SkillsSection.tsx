import React, { useState } from 'react';
import { portfolioData, projectCategories, Skill } from '../data/portfolioData';
import { FilterTabs } from './FilterTabs';
import { Section } from './Section';

interface SkillsSectionProps {
  onSelectProjectByTitle: (title: string) => void;
}

const filters = [{ id: 'all', label: 'All' }, ...projectCategories];

export const SkillsSection: React.FC<SkillsSectionProps> = ({ onSelectProjectByTitle }) => {
  const { skillCategories, projects } = portfolioData;
  const [filter, setFilter] = useState('all');
  const [selected, setSelected] = useState<string | null>(null);

  const inScope = projects.filter((project) => filter === 'all' || project.category === filter);
  const projectsFor = (skill: Skill) => inScope.filter((project) => skill.projects.includes(project.id));

  const groups = skillCategories
    .map((category) => ({
      ...category,
      items: category.items.filter((skill) => filter === 'all' || projectsFor(skill).length > 0)
    }))
    .filter((category) => category.items.length > 0);

  return (
    <Section id="skills" title="Skills" size="wide">
      <FilterTabs
        label="Filter skills by project category"
        options={filters}
        value={filter}
        onChange={(value) => {
          setFilter(value);
          setSelected(null);
        }}
        align="start"
      />

      <div className="mt-8 space-y-4">
        {groups.map((category) => {
          const active = category.items.find((skill) => skill.name === selected);
          const related = active ? projectsFor(active) : [];

          return (
            <div key={category.key} className="panel grid gap-4 p-6 md:grid-cols-[15rem_1fr] md:gap-10">
              <h3 className="font-serif text-xl tracking-tight text-fg">{category.label}</h3>

              <div>
                <ul className="flex flex-wrap gap-2.5">
                  {category.items.map((skill) => {
                    const isSelected = selected === skill.name;
                    const count = projectsFor(skill).length;
                    return (
                      <li key={skill.name}>
                        <button
                          type="button"
                          aria-pressed={isSelected}
                          onClick={() => setSelected(isSelected ? null : skill.name)}
                          className="chip gap-2"
                        >
                          {skill.name}
                          {count > 0 && <span className="text-xs text-subtle tabular-nums">{count}</span>}
                        </button>
                      </li>
                    );
                  })}
                </ul>

                {active && (
                  <div aria-live="polite" className="mt-5 border-l-2 border-accent/60 pl-4">
                    {related.length > 0 ? (
                      <>
                        <p className="text-sm text-subtle">{active.name} was applied in</p>
                        <ul className="mt-3 flex flex-wrap gap-2">
                          {related.map((project) => (
                            <li key={project.id}>
                              <button
                                type="button"
                                onClick={() => onSelectProjectByTitle(project.title)}
                                className="btn btn-secondary btn-sm"
                              >
                                {project.title}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <p className="text-sm text-muted">
                        Applied across coursework, laboratory exercises, and team workflows.
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};
