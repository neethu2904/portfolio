'use client';

import React from 'react';
import { ArrowUpRight, Mail, Linkedin, Github } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact">
      <div className="container contact-content">
        {/* Status Badge */}
        <div className="framer-badge reveal-on-scroll">
          <span className="badge-dot" />
          <span>Available For Work</span>
        </div>

        {/* Main Title */}
        <h2 className="reveal-on-scroll delay-1">Let’s Build Something Meaningful</h2>

        {/* Subtitle */}
        <p className="reveal-on-scroll delay-2">
          Have a project, collaboration, or opportunity in mind? Let’s connect and create impactful digital experiences together.
        </p>

        {/* Centered Glowing CTA Button */}
        <div className="framer-btn-group reveal-on-scroll delay-3">
          <a
            href="mailto:neethumoltomy29@gmail.com"
            className="framer-btn framer-btn-primary"
          >
            <span>Connect</span>
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Social Pills Bar */}
        <div className="footer-social-bar reveal-on-scroll delay-3">
          <a
            href="https://www.linkedin.com/in/neethu-951516230"
            target="_blank"
            rel="noopener noreferrer"
            className="social-pill"
            title="LinkedIn"
          >
            <Linkedin size={16} />
            <span>LinkedIn</span>
          </a>

          <a
            href="mailto:neethumoltomy29@gmail.com"
            className="social-pill"
            title="Email"
          >
            <Mail size={16} />
            <span>Email</span>
          </a>

          <a
            href="https://github.com/neethu2904"
            target="_blank"
            rel="noopener noreferrer"
            className="social-pill"
            title="GitHub"
          >
            <Github size={16} />
            <span>GitHub</span>
          </a>
        </div>

        <div className="footer-copy">
          &copy; {new Date().getFullYear()} <strong>Neethumol Tomy</strong>. All rights reserved. Crafted with Next.js, TypeScript & clean architecture.
        </div>
      </div>
    </footer>
  );
};
