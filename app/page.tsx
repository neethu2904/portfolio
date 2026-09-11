'use client';

import React from 'react';
import { Hero } from '@/components/Hero';
import { Marquee } from '@/components/Marquee';
import { Services } from '@/components/Services';
import { Projects } from '@/components/Projects';
import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { Process } from '@/components/Process';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Home() {
  useScrollReveal('.reveal-on-scroll');

  return (
    <>
      <Hero />
      <Marquee />
      <Services />
      <Projects />
      <About />
      <Experience />
      <Process />
    </>
  );
}
