'use client';

import React from 'react';
import { PlusCircle } from 'lucide-react';
import { experiences } from '@/data/experience';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="framer-badge reveal-on-scroll">
          <span className="badge-symbol">⊙</span>
          <span>Career Journey</span>
        </div>

        <div className="section-header text-center reveal-on-scroll">
          <h2>Experience & Education</h2>
          <p className="mx-auto">
            A chronological view of my professional background and academic credentials.
          </p>
        </div>

        {/* Experience Rows */}
        <div className="experience-list">
          {experiences.map((item, idx) => (
            <div
              key={idx}
              className={`experience-row reveal-on-scroll delay-${(idx % 3) + 1}`}
            >
              <div>
                <h4 className="experience-role">{item.role}</h4>
                <small className="text-muted">{item.description}</small>
              </div>
              <div>
                <p className="experience-company">{item.company}</p>
              </div>
              <div>
                <p className="experience-date">{item.period}</p>
              </div>
            </div>
          ))}

          {/* Add Experience Placeholder Indicator */}
          <div className="add-experience-row reveal-on-scroll delay-4">
            <PlusCircle size={18} />
            <span>Area reserved to add future roles, achievements & experience</span>
          </div>
        </div>
      </div>
    </section>
  );
};
