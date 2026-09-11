'use client';

import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { projects } from '@/data/projects';
import { ProjectCard } from './ProjectCard';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'web' | 'app'>('all');

  const filteredProjects = projects.filter(
    (p) => filter === 'all' || p.category === filter
  );

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="framer-badge reveal-on-scroll">
          <span className="badge-symbol">⊙</span>
          <span>Featured Works</span>
        </div>

        <div className="projects-header-bar reveal-on-scroll">
          <div className="section-header mb-0">
            <h2>Projects</h2>
            <p>
              Selected client and research projects spanning machine learning security, institutional systems, and commercial portals.
            </p>
          </div>

          {/* Filter Pills */}
          <ul className="project-filters-pill">
            <li
              className={filter === 'all' ? 'filter-active' : ''}
              onClick={() => setFilter('all')}
            >
              All
            </li>
            <li
              className={filter === 'app' ? 'filter-active' : ''}
              onClick={() => setFilter('app')}
            >
              Applications
            </li>
            <li
              className={filter === 'web' ? 'filter-active' : ''}
              onClick={() => setFilter('web')}
            >
              Web Portals
            </li>
          </ul>
        </div>

        {/* Projects Grid */}
        <div className="row g-4 portfolio-container">
          {filteredProjects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} delayIndex={(idx % 3) + 1} />
          ))}

          {/* Extensible Placeholder Card */}
          <div className="col-lg-4 col-md-6 portfolio-item reveal-on-scroll delay-4">
            <div className="add-project-card">
              <div className="add-project-icon">
                <Plus size={24} />
              </div>
              <h5>More Projects Coming Soon</h5>
              <p>Actively developing new PHP, CodeIgniter & Laravel projects. Check back soon for updates!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
