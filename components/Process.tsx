'use client';

import React from 'react';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { processSteps } from '@/data/experience';
import { useCardTilt } from '@/hooks/useCardTilt';

interface StepCardProps {
  number: string;
  title: string;
  description: string;
  delayIndex: number;
}

const StepCard: React.FC<StepCardProps> = ({ number, title, description, delayIndex }) => {
  const { ref, handleMouseMove, handleMouseLeave } = useCardTilt<HTMLDivElement>(7);

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`process-step-card reveal-on-scroll delay-${delayIndex}`}
    >
      <span className="process-step-number">{number}</span>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export const Process: React.FC = () => {
  return (
    <section id="process" className="process section-alt">
      <div className="container">
        <div className="framer-badge reveal-on-scroll">
          <span className="badge-symbol">⊙</span>
          <span>Development Process</span>
        </div>

        <div className="section-header reveal-on-scroll">
          <h2>Process</h2>
          <p>
            A structured engineering approach focused on creating secure, high-performance, and maintainable digital solutions.
          </p>
        </div>

        <div className="framer-btn-group justify-content-start mb-4 reveal-on-scroll delay-1">
          <a href="#contact" className="framer-btn framer-btn-primary scrollto">
            <span>Connect</span>
            <ArrowUpRight size={16} />
          </a>
          <a href="#portfolio" className="framer-btn framer-btn-outline scrollto">
            <span>See Projects</span>
            <ArrowDown size={16} />
          </a>
        </div>

        {/* Process Step Cards with 3D Interaction */}
        <div className="process-steps-grid">
          {processSteps.map((step, idx) => (
            <StepCard
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              delayIndex={idx + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
