'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { useCardTilt } from '@/hooks/useCardTilt';

const SERVICE_TAGS = [
  'Web Applications (CodeIgniter & Laravel)',
  'RESTful APIs & Backend Architecture',
  'MySQL Database Optimization',
  'AJAX Real-Time Dashboards',
  'E-Commerce & Custom CMS Platforms',
  'Bug Fixing, Testing & Performance Tuning'
];

export const Services: React.FC = () => {
  const imgCardTilt = useCardTilt<HTMLDivElement>(6);

  return (
    <section id="services" className="services section-alt">
      <div className="container">
        <div className="services-container">
          <div className="reveal-on-scroll">
            <div className="framer-badge">
              <span className="badge-symbol">⊙</span>
              <span>Engineering Services</span>
            </div>

            <div className="section-header mb-4">
              <h2>Services</h2>
              <p>
                Creating reliable digital solutions through scalable backend architectures, clean code conventions, and high-speed database query optimizations.
              </p>
            </div>

            {/* Service Pills Grid */}
            <div className="services-tags-grid">
              {SERVICE_TAGS.map((tag, idx) => (
                <span key={idx} className="service-pill-tag">
                  {tag}
                </span>
              ))}
            </div>

            <div className="framer-btn-group justify-content-start">
              <a href="#contact" className="framer-btn framer-btn-primary scrollto">
                <span>Connect</span>
                <ArrowUpRight size={16} />
              </a>
              <a href="#portfolio" className="framer-btn framer-btn-outline scrollto">
                <span>See Projects</span>
                <ArrowDown size={16} />
              </a>
            </div>
          </div>

          {/* Service Image Card with 3D Tilt */}
          <div
            ref={imgCardTilt.ref}
            onMouseMove={imgCardTilt.handleMouseMove}
            onMouseLeave={imgCardTilt.handleMouseLeave}
            className="services-img-card reveal-on-scroll delay-2"
          >
            <Image
              src="/assets/img/portfolio/web1.png"
              alt="Development & Engineering Workflow"
              width={540}
              height={360}
              className="w-100 h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
