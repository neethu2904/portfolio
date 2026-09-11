'use client';

import React from 'react';
import Image from 'next/image';
import { useCardTilt } from '@/hooks/useCardTilt';

export const ShowcaseGrid: React.FC = () => {
  const card1 = useCardTilt<HTMLDivElement>(7);
  const card2 = useCardTilt<HTMLDivElement>(7);
  const card3 = useCardTilt<HTMLDivElement>(7);

  return (
    <div className="hero-showcase-grid reveal-on-scroll delay-4">
      {/* Left Showcase Card */}
      <div
        ref={card1.ref}
        onMouseMove={card1.handleMouseMove}
        onMouseLeave={card1.handleMouseLeave}
        className="showcase-card"
      >
        <div className="showcase-card-img-wrap">
          <Image
            src="/assets/img/portfolio/images.jpeg"
            alt="Machine Learning Intrusion Detection"
            width={400}
            height={260}
            className="w-100 h-auto"
          />
        </div>
        <div className="showcase-card-caption">
          <h5>Machine Learning Intrusion Detection</h5>
          <p>LuFlow Dataset · Security Analytics</p>
        </div>
      </div>

      {/* Center Showcase Card (Portrait) */}
      <div
        ref={card2.ref}
        onMouseMove={card2.handleMouseMove}
        onMouseLeave={card2.handleMouseLeave}
        className="showcase-card"
      >
        <div className="showcase-card-img-wrap">
          <Image
            src="/assets/img/neethu pic.jpg"
            alt="Neethumol Tomy"
            width={400}
            height={260}
            className="w-100 h-auto"
          />
        </div>
        <div className="showcase-card-caption">
          <h5>Neethumol Tomy</h5>
          <p>PHP Developer · DigitalSphere</p>
        </div>
      </div>

      {/* Right Showcase Card */}
      <div
        ref={card3.ref}
        onMouseMove={card3.handleMouseMove}
        onMouseLeave={card3.handleMouseLeave}
        className="showcase-card"
      >
        <div className="showcase-card-img-wrap">
          <Image
            src="/assets/img/portfolio/library.jpg"
            alt="Library E-Gate Management Portal"
            width={400}
            height={260}
            className="w-100 h-auto"
          />
        </div>
        <div className="showcase-card-caption">
          <h5>Library E-Gate Management Portal</h5>
          <p>PHP · MySQL · Automated Access</p>
        </div>
      </div>
    </div>
  );
};
