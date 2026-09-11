'use client';

import React from 'react';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { useTypewriter } from '@/hooks/useTypewriter';
import { ShowcaseGrid } from './ShowcaseGrid';

export const Hero: React.FC = () => {
  const typedText = useTypewriter([
    'PHP (CodeIgniter & Laravel)',
    'RESTful APIs & Backend Architecture',
    'MySQL Database Optimization',
    'AJAX & Real-Time Dashboards',
    'Full-Stack Web Engineering'
  ]);

  return (
    <section id="hero" className="hero">
      <div className="hero-orb hero-orb-left" />
      <div className="hero-orb hero-orb-right" />

      <div className="container hero-container text-center">
        {/* Status Badge */}
        <div className="framer-badge reveal-on-scroll">
          <span className="badge-dot" />
          <span>Available For Work</span>
        </div>

        {/* Main Headline */}
        <h1 className="reveal-on-scroll delay-1">
          Hi, I’m Neethumol — <span className="gradient-text">PHP & Full-Stack Developer</span> crafting high-performance and scalable web architectures.
        </h1>

        {/* Dynamic Typing Role Subtitle */}
        <h2 className="reveal-on-scroll delay-2" style={{ fontSize: '22px', fontWeight: 500, marginBottom: '22px', color: 'var(--text-heading)' }}>
          Specialized in <span className="type-wrapper"><span>{typedText}</span><span className="cursor-blink">|</span></span>
        </h2>

        {/* Subhead */}
        <p className="hero-subhead reveal-on-scroll delay-2">
          Designing robust digital applications through clean code, optimized MySQL databases, and intuitive user experiences.
        </p>

        {/* Buttons */}
        <div className="framer-btn-group reveal-on-scroll delay-3">
          <a
            href="mailto:neethumoltomy29@gmail.com?subject=Resume%20Request%20-%20Neethumol%20Tomy"
            className="framer-btn framer-btn-primary"
          >
            <span>Download Resume</span>
            <ArrowUpRight size={16} />
          </a>
          <a href="#portfolio" className="framer-btn framer-btn-outline scrollto">
            <span>See Projects</span>
            <ArrowDown size={16} />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="reveal-on-scroll delay-3">
          <a href="#services" className="hero-scroll-indicator scrollto">
            <span className="mouse-icon" />
            <span>Scroll down to explore</span>
          </a>
        </div>

        {/* 3-Card Showcase Grid */}
        <ShowcaseGrid />
      </div>
    </section>
  );
};
