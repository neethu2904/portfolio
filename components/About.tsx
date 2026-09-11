'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight, Mail } from 'lucide-react';
import { skillCategories } from '@/data/experience';
import { useCardTilt } from '@/hooks/useCardTilt';

export const About: React.FC = () => {
  const portraitTilt = useCardTilt<HTMLDivElement>(6);

  return (
    <section id="about" className="about section-alt">
      <div className="container">
        <div className="framer-badge reveal-on-scroll">
          <span className="badge-symbol">⊙</span>
          <span>About Me</span>
        </div>

        <div className="about-grid">
          <div className="reveal-on-scroll">
            <div className="section-header mb-4">
              <h2>Meet Neethumol</h2>
              <p>
                PHP Developer with 2 years of experience designing and scaling web applications using CodeIgniter and Laravel.
              </p>
            </div>

            <p className="about-bio-text">
              I specialize in backend web engineering, RESTful APIs, and relational database optimization. Skilled in CodeIgniter and Laravel, I have delivered solutions that improved application efficiency by up to 40% and boosted database performance by 30%. With a strong focus on clean code, maintainability, and business growth, I build resilient server architectures paired with high-performance user interfaces.
            </p>

            {/* Stat Counter Chips */}
            <div className="about-stats-row">
              <div className="stat-chip">
                <div className="stat-chip-num">2+</div>
                <div className="stat-chip-label">Years Experience</div>
              </div>
              <div className="stat-chip">
                <div className="stat-chip-num">40%</div>
                <div className="stat-chip-label">Form Speedup (AJAX)</div>
              </div>
              <div className="stat-chip">
                <div className="stat-chip-num">30%</div>
                <div className="stat-chip-label">Query Optimization</div>
              </div>
            </div>

            {/* Skills Tag Pills Wrap */}
            <div className="skills-tags-wrap">
              {skillCategories.map((skill, idx) => (
                <span key={idx} className="skill-tag-pill">
                  {skill}
                </span>
              ))}
            </div>

            <div className="framer-btn-group justify-content-start">
              <a href="#contact" className="framer-btn framer-btn-primary scrollto">
                <span>Connect</span>
                <ArrowUpRight size={16} />
              </a>
              <a href="mailto:neethumoltomy29@gmail.com" className="framer-btn framer-btn-outline">
                <span>Send Direct Email</span>
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Portrait Card */}
          <div
            ref={portraitTilt.ref}
            onMouseMove={portraitTilt.handleMouseMove}
            onMouseLeave={portraitTilt.handleMouseLeave}
            className="about-portrait-card reveal-on-scroll delay-2"
          >
            <Image
              src="/assets/img/neethu pic.jpg"
              alt="Neethumol Tomy"
              width={500}
              height={500}
              className="w-100 h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
