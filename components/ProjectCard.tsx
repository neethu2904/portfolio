'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight, ExternalLink } from 'lucide-react';
import { Project } from '@/data/types';
import { useCardTilt } from '@/hooks/useCardTilt';

interface ProjectCardProps {
  project: Project;
  delayIndex?: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, delayIndex = 1 }) => {
  const { ref, handleMouseMove, handleMouseLeave } = useCardTilt<HTMLDivElement>(7);

  const destinationUrl = project.liveUrl || project.caseStudyUrl || '#';
  const isExternal = Boolean(project.liveUrl);

  return (
    <div className={`col-lg-4 col-md-6 portfolio-item filter-${project.category} reveal-on-scroll delay-${delayIndex}`}>
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="framer-project-card"
      >
        <div className="framer-project-img">
          <Image
            src={project.image}
            alt={project.title}
            width={480}
            height={320}
            className="w-100 h-auto"
          />
          {isExternal ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="framer-overlay-btn"
              title="Open Live Site"
            >
              <span>Visit Site</span>
              <ArrowUpRight size={15} />
            </a>
          ) : (
            <Link
              href={project.caseStudyUrl || '#'}
              className="framer-overlay-btn"
              title="View Case Study"
            >
              <span>View Casestudy</span>
              <ArrowUpRight size={15} />
            </Link>
          )}
        </div>

        <div className="framer-project-content">
          <div className="framer-project-tags">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="framer-tag-pill">
                {tag}
              </span>
            ))}
          </div>

          <h4>{project.title}</h4>
          <p>{project.description}</p>

          <div className="d-flex align-items-center gap-3 mt-auto">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="d-inline-flex align-items-center gap-1"
                style={{ fontSize: '13px', fontWeight: 700, color: 'var(--blue-primary)' }}
              >
                <span>Live Site</span>
                <ExternalLink size={13} />
              </a>
            )}
            {project.caseStudyUrl && (
              <Link
                href={project.caseStudyUrl}
                className="d-inline-flex align-items-center gap-1"
                style={{ fontSize: '13px', fontWeight: 700, color: 'var(--blue-primary)' }}
              >
                <span>Case Study</span>
                <ArrowRight size={13} />
              </Link>
            )}
            {project.doiUrl && (
              <a
                href={project.doiUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="d-inline-flex align-items-center gap-1"
                style={{ fontSize: '13px', fontWeight: 600, color: 'var(--blue-vivid)' }}
              >
                <span>DOI Publication</span>
                <ExternalLink size={13} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
