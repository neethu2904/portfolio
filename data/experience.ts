import { Experience, ProcessStep } from './types';

export const experiences: Experience[] = [
  {
    role: 'PHP Developer',
    company: 'DigitalSphere, Kakkanad',
    period: 'May 2025 – Present',
    description: 'Developed CodeIgniter & MySQL applications, built client/invoice admin dashboards, reduced form submission times by 40% via AJAX/jQuery, and scaled database queries by 30% for 5x data growth.',
    type: 'job'
  },
  {
    role: 'PHP Developer',
    company: 'Hawks Solutions, Kochi',
    period: 'Nov 2023 – May 2025',
    description: 'Optimized 50+ SQL queries (+30% speedup, 20% overall boost), resolved 100+ legacy bugs ensuring 99.9% uptime, executed zero-downtime Git deployments, and delivered root-cause defect reductions.',
    type: 'job'
  },
  {
    role: 'Master’s of Computer Application (MCA)',
    company: 'Amrita Vishwa Vidyapeetham, Kochi',
    period: '2021 – 2023',
    description: 'Postgraduate degree with distinction specializing in software architecture, distributed database systems, and advanced algorithmic design.',
    type: 'education'
  },
  {
    role: 'Bachelor’s of Computer Application (BCA)',
    company: 'NRI Group of Institutes, Bangalore',
    period: '2017 – 2020',
    description: 'Undergraduate degree focusing on web programming, relational database management systems (RDBMS), object-oriented programming, and computer networks.',
    type: 'education'
  },
  {
    role: 'Python Web Development Certification',
    company: 'Luminar Technolab, Kochi',
    period: 'June 2021',
    description: 'NACTET Certified Professional training in backend development, database architecture, and server-side APIs.',
    type: 'certification'
  },
  {
    role: 'Higher Secondary (CBSE)',
    company: 'Central Board of Secondary Education',
    period: '2017',
    description: 'Computer Science and Mathematics stream with high academic standing.',
    type: 'education'
  },
  {
    role: 'Secondary School (CBSE)',
    company: 'Central Board of Secondary Education',
    period: '2015',
    description: 'General high school foundation with academic distinction.',
    type: 'education'
  }
];

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Research & Architecture',
    description: 'Analyzing business requirements, mapping database schemas, designing relational tables, and outlining API endpoints and data flows before coding.'
  },
  {
    number: '02',
    title: 'Development & Optimization',
    description: 'Implementing clean, modular MVC code, writing parameterized SQL queries, indexing databases for low latency, and building intuitive user interfaces.'
  },
  {
    number: '03',
    title: 'Testing & Delivery',
    description: 'Conducting rigorous debugging, verifying security measures, testing edge cases, and delivering reliable, production-ready web deployments.'
  }
];

export const skillCategories = [
  'PHP (Core, OOP, MVC)',
  'CodeIgniter (CI3 / CI4)',
  'Laravel',
  'RESTful APIs',
  'MySQL & DB Design',
  'Query Optimization',
  'JavaScript & jQuery',
  'AJAX Real-Time',
  'Angular',
  'Bootstrap 5',
  'HTML5 & CSS3',
  'Git & GitHub',
  'Composer & Postman',
  'cPanel & Hostinger',
  'Root Cause Analysis (RCA)'
];
