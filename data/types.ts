export interface Project {
  id: string;
  slug: string;
  title: string;
  category: 'web' | 'app';
  tags: string[];
  description: string;
  longDescription?: string;
  image: string;
  liveUrl?: string;
  caseStudyUrl?: string;
  doiUrl?: string;
  client?: string;
  date?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  type: 'job' | 'education' | 'certification';
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
