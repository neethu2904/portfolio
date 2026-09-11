import { Project } from './types';

export const projects: Project[] = [
  {
    id: 'alcodeals',
    slug: 'alcodeals',
    title: 'ALCODEALS — Catalog Website',
    category: 'web',
    tags: ['PHP', 'Product Catalog', 'Admin Panel'],
    description: 'Built a full product catalog featuring dynamic multi-parameter filtering, custom admin panel management, and direct WhatsApp order dispatching.',
    longDescription: 'ALCODEALS is a dynamic product catalog system designed for seamless browsing and order management. Built with core PHP and responsive architecture, it incorporates advanced filtering mechanisms, category filtering, an administrative dashboard for catalog updates, and streamlined WhatsApp checkout integration.',
    image: '/assets/img/portfolio/portfolio-2.jpg',
    liveUrl: 'https://alcoproducts.in',
    client: 'Alco Products',
    date: '2024'
  },
  {
    id: 'emerg-forum',
    slug: 'emerg-forum',
    title: 'EMERG Business Forum Platform',
    category: 'web',
    tags: ['PHP', 'CMS & ERP', 'REST APIs'],
    description: 'Comprehensive business software & CMS platform featuring member referral tracking, thank-you notes, business gift workflows, and API integrations.',
    longDescription: 'A custom enterprise-grade business management and content platform engineered for the EMERG networking forum. Features a full referral tracking engine, recognition notes, reward systems, searchable directories, and multi-endpoint RESTful API integrations.',
    image: '/assets/img/portfolio/portfolio-5.jpg',
    liveUrl: 'https://emergbusinessforum.com',
    client: 'EMERG Forum',
    date: '2024'
  },
  {
    id: 'talisha-fashion',
    slug: 'talisha-fashion',
    title: 'Talisha Fashion — E-Commerce',
    category: 'web',
    tags: ['PHP', 'E-Commerce', 'Cart & Orders'],
    description: 'Architected modern e-commerce storefront with shopping cart logic, authenticated user profiles, product variants, and backend order management.',
    longDescription: 'Talisha Fashion is an end-to-end e-commerce store with catalog categorization, cart session management, user authorization, and backend order processing, optimized for fast page loads and seamless mobile purchasing.',
    image: '/assets/img/portfolio/portfolio-7.jpg',
    liveUrl: 'https://talishafashion.com',
    client: 'Talisha Fashion',
    date: '2024'
  },
  {
    id: 'library-egate',
    slug: 'library-egate',
    title: 'Library E-Gate Tracking System',
    category: 'app',
    tags: ['PHP', 'MySQL', 'Institutional'],
    description: 'Engineered automated web-based check-in/out tracking system for students & faculty with administrative real-time attendance dashboards.',
    longDescription: 'Library E-Gate provides automated, high-precision access tracking for educational institutions. Instructors and administrators can review real-time attendance records, generate time-stamped activity reports, and manage student permissions seamlessly.',
    image: '/assets/img/portfolio/library.jpg',
    caseStudyUrl: '/projects/library-egate/',
    client: 'Amrita School of Arts & Science College',
    date: '2023'
  },
  {
    id: 'network-intrusion-detection',
    slug: 'network-intrusion-detection',
    title: 'Intrusion Detection Research (LUFLOW)',
    category: 'app',
    tags: ['Machine Learning', 'Python', 'IEEE Published'],
    description: 'Applied ML models (Decision Tree, Random Forest) on LUFLOW dataset evaluating precision, recall, and F1. Published IEEE paper (DOI: 10.1109/10306474).',
    longDescription: 'This research investigation evaluated cybersecurity classification models on the benchmark LUFLOW telemetry dataset. Comparing Decision Trees and Random Forests across pre-processing and feature selection pipelines, the research yielded high-precision intrusion mitigation.',
    image: '/assets/img/portfolio/images.jpeg',
    doiUrl: 'https://doi.org/10.1109/10306474',
    caseStudyUrl: '/projects/network-intrusion-detection/',
    date: 'November 2023'
  },
  {
    id: 'prowiden-recruitment',
    slug: 'prowiden-recruitment',
    title: 'Prowiden Recruitment UK',
    category: 'web',
    tags: ['PHP', 'Recruitment', 'UK Client'],
    description: 'Full-featured commercial recruitment platform featuring job search, applicant tracking, and dynamic client management interfaces.',
    longDescription: 'A commercial recruitment portal built for a UK staffing agency, featuring job search filters, applicant application workflows, and recruiter portals with dynamic resume parsers and CRM tracking.',
    image: '/assets/img/portfolio/web1.png',
    liveUrl: 'https://prowidenrecruitment.co.uk/',
    caseStudyUrl: '/projects/prowiden-recruitment/',
    client: 'Prowiden UK',
    date: '2023'
  }
];
