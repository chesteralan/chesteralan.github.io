export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  links: {
    github?: string;
    live?: string;
    chrome?: string;
  };
  featured?: boolean;
  category?: 'web' | 'extension' | 'tool';
  previewGradient?: string;
  metric?: string;
  status?: 'Production' | 'Open Source' | 'Side Project';
}

export interface Extension {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
}

export interface Skill {
  name: string;
  category: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  badge: string;
  skills: string[];
  footerLabel: string;
  footerValue: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
  tags: string[];
  dotColor: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  initials: string;
}

export interface Stats {
  projectsCompleted: number;
  yearsExperience: number;
  extensionsPublished: number;
  happyClients: number;
}
