/**
 * Modern Royal Blue Portfolio Motion & Interaction System
 * Designed for Neethumol Tomy
 */

(function() {
  "use strict";

  /**
   * Helper selector functions
   */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener);
  };

  /**
   * 1. Top Scroll Progress Indicator
   */
  const progressBar = select('#scroll-progress-bar');
  if (progressBar) {
    const updateScrollProgress = () => {
      const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollTotal > 0) {
        const progressPct = (window.scrollY / scrollTotal) * 100;
        progressBar.style.width = `${progressPct}%`;
      }
    };
    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    window.addEventListener('load', updateScrollProgress);
  }

  /**
   * 2. Header Fixed & Scrolled State
   */
  let selectHeader = select('#header');
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 40) {
        selectHeader.classList.add('header-scrolled');
      } else {
        selectHeader.classList.remove('header-scrolled');
      }
    };
    window.addEventListener('load', headerScrolled);
    onscroll(document, headerScrolled);
  }

  /**
   * 3. Back to Top Button
   */
  let backtotop = select('.back-to-top');
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 200) {
        backtotop.classList.add('active');
      } else {
        backtotop.classList.remove('active');
      }
    };
    window.addEventListener('load', toggleBacktotop);
    onscroll(document, toggleBacktotop);
  }

  /**
   * 4. Navbar active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true);
  const navbarlinksActive = () => {
    let position = window.scrollY + 200;
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return;
      let section = select(navbarlink.hash);
      if (!section) return;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active');
      } else {
        navbarlink.classList.remove('active');
      }
    });
  };
  window.addEventListener('load', navbarlinksActive);
  onscroll(document, navbarlinksActive);

  /**
   * 5. Smooth scroll for .scrollto links
   */
  const scrollto = (el) => {
    let header = select('#header');
    let offset = header ? header.offsetHeight : 0;
    let target = select(el);
    if (!target) return;

    let elementPos = target.offsetTop;
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    });
  };

  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault();

      let navbar = select('#navbar');
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile');
        let navbarToggle = select('.mobile-nav-toggle');
        navbarToggle.classList.toggle('bi-list');
        navbarToggle.classList.toggle('bi-x');
      }
      scrollto(this.hash);
    }
  }, true);

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile');
    this.classList.toggle('bi-list');
    this.classList.toggle('bi-x');
  });

  /**
   * 6. Dynamic Typing Effect for Hero Subtitle
   */
  const typedTarget = select('#typed-text');
  if (typedTarget) {
    const phrases = [
      'PHP (CodeIgniter & Laravel)',
      'RESTful APIs & Backend Architecture',
      'MySQL Database Optimization',
      'AJAX & Real-Time Web Apps',
      'Full-Stack Web Engineering'
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingDelay = 110;

    function typeLoop() {
      const currentPhrase = phrases[phraseIndex];

      if (isDeleting) {
        typedTarget.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typingDelay = 45;
      } else {
        typedTarget.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typingDelay = 100;
      }

      if (!isDeleting && charIndex === currentPhrase.length) {
        typingDelay = 1800; // Pause at end of phrase
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typingDelay = 350;
      }

      setTimeout(typeLoop, typingDelay);
    }

    typeLoop();
  }

  /**
   * 7. Scroll-Triggered Reveal Observer
   */
  const revealElements = select('.reveal-on-scroll', true);
  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  }

  /**
   * 8. Animated Count-Up for Stat Numbers
   */
  const statChips = select('.stat-chip-num', true);
  if (statChips.length > 0) {
    const countObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const text = el.getAttribute('data-count') || el.textContent.trim();
          const targetNum = parseInt(text.replace(/[^0-9]/g, ''), 10);
          const suffix = text.replace(/[0-9]/g, '');

          if (!isNaN(targetNum)) {
            let count = 0;
            const step = Math.max(1, Math.floor(targetNum / 25));
            const timer = setInterval(() => {
              count += step;
              if (count >= targetNum) {
                count = targetNum;
                clearInterval(timer);
              }
              el.textContent = `${count}${suffix}`;
            }, 40);
          }
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    statChips.forEach(chip => countObserver.observe(chip));
  }

  /**
   * 9. 3D Card Hover / Tilt Physics
   */
  const interactiveCards = select('.showcase-card, .framer-project-card, .process-step-card', true);
  interactiveCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  /**
   * 10. Portfolio Isotope & Filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer && typeof Isotope !== 'undefined') {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
      }, true);
    }
  });

  /**
   * 11. Initiate Portfolio Lightbox
   */
  if (typeof GLightbox !== 'undefined') {
    GLightbox({
      selector: '.portfolio-lightbox'
    });
  }

})();