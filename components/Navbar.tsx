'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header id="header" className={`fixed-top ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="container header-container">
        <Link href="/" className="logo-pill">
          <span className="logo-dot" />
          <span className="logo-name">Neethumol Tomy</span>
          <span className="logo-title">/ PHP Dev</span>
        </Link>

        <nav id="navbar" className={`navbar ${mobileMenuOpen ? 'navbar-mobile' : ''}`}>
          <ul>
            <li>
              <a href="#hero" className="nav-link scrollto" onClick={() => setMobileMenuOpen(false)}>Home</a>
            </li>
            <li>
              <a href="#services" className="nav-link scrollto" onClick={() => setMobileMenuOpen(false)}>Services</a>
            </li>
            <li>
              <a href="#portfolio" className="nav-link scrollto" onClick={() => setMobileMenuOpen(false)}>Projects</a>
            </li>
            <li>
              <a href="#about" className="nav-link scrollto" onClick={() => setMobileMenuOpen(false)}>About</a>
            </li>
            <li>
              <a href="#experience" className="nav-link scrollto" onClick={() => setMobileMenuOpen(false)}>Experience</a>
            </li>
            <li>
              <a href="#contact" className="nav-link scrollto" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            </li>
          </ul>
        </nav>

        <div className="d-flex align-items-center gap-2">
          <a href="#contact" className="framer-btn-primary framer-btn-header d-none d-md-inline-flex">
            <span>Get in Touch</span>
            <ArrowUpRight size={15} />
          </a>
          <button
            type="button"
            className="mobile-nav-toggle d-md-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
};
