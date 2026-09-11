import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { projects } from '@/data/projects';

export function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div style={{ paddingTop: '100px', minHeight: '80vh' }}>
      {/* Breadcrumbs */}
      <div style={{ background: 'var(--bg-section-alt)', borderBottom: '1px solid var(--border-card)', padding: '24px 0' }}>
        <div className="container d-flex align-items-center justify-content-between flex-wrap gap-2">
          <Link
            href="/#portfolio"
            className="d-inline-flex align-items-center gap-2"
            style={{ color: 'var(--blue-vivid)', fontWeight: 600, fontSize: '14px' }}
          >
            <ArrowLeft size={16} />
            <span>Back to All Projects</span>
          </Link>
          <span style={{ color: 'var(--text-muted)', fontSize: '14px' }}>
            Projects / <strong style={{ color: '#ffffff' }}>{project.title}</strong>
          </span>
        </div>
      </div>

      <div className="container" style={{ padding: '60px 24px 90px 24px' }}>
        <div className="row g-4 align-items-start">
          {/* Main Showcase Image */}
          <div className="col-lg-7">
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-card)', borderRadius: 'var(--radius-card)', overflow: 'hidden', boxShadow: 'var(--shadow-card)' }}>
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={500}
                className="w-100 h-auto"
                priority
              />
            </div>
          </div>

          {/* Project Details Panel */}
          <div className="col-lg-5">
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-card)', borderRadius: 'var(--radius-card)', padding: '32px', backdropFilter: 'blur(14px)' }}>
              <div className="framer-project-tags" style={{ marginBottom: '16px' }}>
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="framer-tag-pill">
                    {tag}
                  </span>
                ))}
              </div>

              <h1 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '16px', color: '#ffffff' }}>
                {project.title}
              </h1>

              <div style={{ borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)', padding: '16px 0', margin: '20px 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {project.client && (
                  <div className="d-flex justify-content-between">
                    <span style={{ color: 'var(--text-muted)' }}>Client / Institution:</span>
                    <strong style={{ color: '#ffffff' }}>{project.client}</strong>
                  </div>
                )}
                {project.date && (
                  <div className="d-flex justify-content-between">
                    <span style={{ color: 'var(--text-muted)' }}>Timeline:</span>
                    <strong style={{ color: '#ffffff' }}>{project.date}</strong>
                  </div>
                )}
                <div className="d-flex justify-content-between">
                  <span style={{ color: 'var(--text-muted)' }}>Category:</span>
                  <strong style={{ color: 'var(--blue-light)', textTransform: 'capitalize' }}>{project.category}</strong>
                </div>
              </div>

              <p style={{ color: 'var(--text-light)', lineHeight: 1.8, marginBottom: '28px' }}>
                {project.longDescription || project.description}
              </p>

              <div className="d-flex flex-wrap gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="framer-btn-primary"
                    style={{ padding: '12px 28px' }}
                  >
                    <span>Visit Live Project</span>
                    <ExternalLink size={15} />
                  </a>
                )}
                {project.doiUrl && (
                  <a
                    href={project.doiUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="framer-btn-outline"
                    style={{ padding: '12px 28px' }}
                  >
                    <span>Read IEEE Publication</span>
                    <ExternalLink size={15} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
