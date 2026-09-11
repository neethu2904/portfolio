'use client';

import React from 'react';

const MARQUEE_ITEMS = [
  'Backend Architecture',
  'PHP & CodeIgniter',
  'Laravel Development',
  'MySQL Database Optimization',
  'RESTful API Design',
  'AJAX & Real-Time Dashboards',
  'Query Indexing & Tuning',
  'Scalable Web Portals',
  'MVC Architecture'
];

export const Marquee: React.FC = () => {
  return (
    <div className="marquee-band">
      <div className="marquee-content">
        {MARQUEE_ITEMS.map((item, idx) => (
          <span key={`mq-1-${idx}`} className="marquee-item">
            {item} <span className="sep-dot" />
          </span>
        ))}
        {MARQUEE_ITEMS.map((item, idx) => (
          <span key={`mq-2-${idx}`} className="marquee-item">
            {item} <span className="sep-dot" />
          </span>
        ))}
      </div>
    </div>
  );
};
