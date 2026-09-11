'use client';

import React from 'react';
import { useScrollProgress } from '@/hooks/useScrollProgress';

export const ScrollProgressBar: React.FC = () => {
  const progress = useScrollProgress();

  return (
    <div
      id="scroll-progress-bar"
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      style={{ width: `${progress}%` }}
    />
  );
};
