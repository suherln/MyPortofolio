import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { CredentialsSection } from './components/CredentialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { Project, portfolioData } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const selectProjectByTitle = (title: string) => {
    const project = portfolioData.projects.find((item) => item.title === title);
    if (project) setSelectedProject(project);
  };

  return (
    <div className="app flex min-h-screen flex-col">
      <a
        href="#about"
        className="sr-only z-50 rounded-md bg-accent px-4 py-2 text-sm font-medium text-canvas focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>

      <Navbar />

      <main className="flex-1">
        <Hero />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection onSelectProject={setSelectedProject} />
        <CredentialsSection />
        <SkillsSection onSelectProjectByTitle={selectProjectByTitle} />
        <ContactSection />
      </main>

      <Footer />

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}
