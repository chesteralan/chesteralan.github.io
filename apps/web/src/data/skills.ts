import type { Skill, SkillCategory } from './types';

export const skills: Skill[] = [
  { name: 'React', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'JavaScript', category: 'frontend' },
  { name: 'Next.js', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'Bootstrap', category: 'frontend' },
  { name: 'HTML/CSS', category: 'frontend' },
  { name: 'Node.js', category: 'backend' },
  { name: 'Firebase', category: 'backend' },
  { name: 'REST APIs', category: 'backend' },
  { name: 'Git', category: 'tools' },
  { name: 'GitHub', category: 'tools' },
  { name: 'VS Code', category: 'tools' },
  { name: 'Chrome Extensions', category: 'tools' },
  { name: 'CLI Tools', category: 'tools' },
  { name: 'Firebase Hosting', category: 'cloud' },
  { name: 'Netlify', category: 'cloud' },
  { name: 'Vercel', category: 'cloud' },
];

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend Engineering',
    description:
      'High-performance reactive interfaces with pixel-perfect responsive execution and accessible interactions.',
    icon: 'monitor',
    badge: 'Core Mastery',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'JavaScript', 'HTML/CSS'],
    footerLabel: 'Primary Focus',
    footerValue: 'React + TypeScript',
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    description:
      'Fault-tolerant backend architectures engineered for low latency and high concurrency throughput.',
    icon: 'terminal',
    badge: 'Distributed',
    skills: ['Node.js', 'Firebase', 'REST APIs', 'GraphQL'],
    footerLabel: 'Runtime',
    footerValue: 'Node.js',
  },
  {
    id: 'cloud',
    title: 'Cloud & Deployment',
    description: 'Cloud platform deployment, hosting, and CI/CD pipeline configuration.',
    icon: 'cloud',
    badge: 'Infrastructure',
    skills: ['Firebase Hosting', 'Netlify', 'Vercel', 'CloudFlare'],
    footerLabel: 'Platforms',
    footerValue: '3 Cloud Providers',
  },
];
