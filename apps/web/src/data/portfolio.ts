import type {
  Project,
  Extension,
  Skill,
  SkillCategory,
  Experience,
  Testimonial,
  Stats,
} from './types';

export type { Project, Extension, Skill, SkillCategory, Experience, Testimonial, Stats };

export const projects: Project[] = [
  {
    id: 'anc',
    title: 'Archdiocesan Nourishment Center',
    description:
      'A charity platform providing integral nourishment programs and services including spiritual formation and medical assistance to the poorest communities in Davao.',
    tags: ['React', 'Bootstrap', 'Charity'],
    links: {
      live: 'https://www.ancdavao.com/',
    },
    featured: true,
    category: 'web',
    previewGradient: 'from-slate-900 to-slate-800',
    metric: 'Charity Platform',
    status: 'Production',
  },
  {
    id: 'payrollph',
    title: 'PayrollPH',
    description:
      'A Philippine payroll management system built with React, TypeScript, and Firebase to simplify payroll processing for local businesses.',
    tags: ['TypeScript', 'React', 'Firebase', 'Tailwind CSS'],
    links: {
      github: 'https://github.com/chesteralan/payrollph-react-firebase',
    },
    featured: true,
    category: 'web',
    previewGradient: 'from-indigo-950 to-slate-900',
    metric: 'Payroll System',
    status: 'Production',
  },
  {
    id: 'tailwind-portfolio',
    title: 'Tailwind Cards Portfolio',
    description:
      'A portfolio site template built with Tailwind CSS card components for a clean, modern showcase.',
    tags: ['TypeScript', 'Tailwind CSS', 'Portfolio'],
    links: {
      github: 'https://github.com/chesteralan/tailwind-cards-portfolio-site',
    },
    featured: false,
    category: 'web',
    previewGradient: 'from-cyan-950 to-slate-900',
    metric: 'Portfolio Template',
    status: 'Open Source',
  },
  {
    id: 'altrugenix',
    title: 'Altrugenix.js.org',
    description:
      'A community site dedicated to JavaScript and its awesome ecosystem. Contributions and resources for JS developers since 2015.',
    tags: ['JavaScript', 'Community', 'Documentation'],
    links: {
      github: 'https://github.com/Altrugenix/ui',
    },
    featured: false,
    category: 'web',
    previewGradient: 'from-amber-950 to-slate-900',
    metric: 'Community Hub',
    status: 'Open Source',
  },
];

export const extensions: Extension[] = [
  {
    id: 'bootstrap-offline',
    title: 'Bootstrap 3.3.x Offline Guide',
    description:
      'A made-easy offline documentation of Bootstrap 3.3.x for web designers and developers.',
    tags: ['Bootstrap', 'Documentation', 'Offline'],
    link: 'https://chromewebstore.google.com/detail/bootstrap-33x-offline-gui/gaojaekjdcfbdfiiggmklaocglaknnkd',
  },
  {
    id: 'icon-fonts',
    title: 'Icon Fonts',
    description:
      'One-click access to Glyphicon, Font Awesome, Material Icons, Dashicons, Ionicons, Octicons, Genericons, and Devicons.',
    tags: ['Icons', 'Fonts', 'Design'],
    link: 'https://chromewebstore.google.com/detail/icon-fonts/djbcaikkgpmefanfonnebhgepgpkghkf',
  },
  {
    id: 'tailwind-cheatsheet',
    title: 'Tailwind Cheatsheet',
    description:
      'Simplify your web development workflow — find Tailwind CSS class names in a flash.',
    tags: ['Tailwind CSS', 'Productivity'],
    link: 'https://chromewebstore.google.com/detail/tailwind-css-cheat-sheet/fndbnfnjnhldjeppmglocapmfjdjkleh',
  },
];

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
    skills: ['Node.js', 'Firebase', 'REST APIs', 'Express'],
    footerLabel: 'Runtime',
    footerValue: 'Node.js',
  },
  {
    id: 'cloud',
    title: 'Cloud & Deployment',
    description: 'Cloud platform deployment, hosting, and CI/CD pipeline configuration.',
    icon: 'cloud',
    badge: 'Infrastructure',
    skills: ['Firebase Hosting', 'Netlify', 'Vercel'],
    footerLabel: 'Platforms',
    footerValue: '3 Cloud Providers',
  },
];

export const experience: Experience[] = [
  {
    id: 'freelance',
    role: 'Freelance Web Developer',
    company: 'Self-Employed',
    period: '2015 — Present',
    description:
      'Building web applications, Chrome extensions, and digital solutions for clients and personal projects.',
    highlights: [
      'Developed and published 3+ Chrome extensions with thousands of users',
      'Built charity platforms serving underprivileged communities',
      'Created payroll management systems for local businesses',
    ],
    tags: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    dotColor: 'bg-[#0891b2]',
  },
  {
    id: 'open-source',
    role: 'Open Source Contributor',
    company: 'Community',
    period: '2015 — Present',
    description:
      'Contributing to JavaScript ecosystem through community sites, extensions, and developer tools.',
    highlights: [
      'Created Altrugenix.js.org community hub',
      'Published 3 Chrome extensions on the Web Store',
      'Active GitHub contributor since 2012',
    ],
    tags: ['JavaScript', 'Community', 'Chrome Extensions'],
    dotColor: 'bg-purple-600',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 'test1',
    name: 'Client',
    role: 'ANC Davao',
    content:
      'Working with Chester was a great experience. He delivered a professional website that perfectly captured our mission and helped us reach more people.',
    initials: 'AN',
  },
];

export const stats: Stats = {
  projectsCompleted: 15,
  yearsExperience: 8,
  extensionsPublished: 3,
  happyClients: 10,
};

export const socialLinks = {
  github: 'https://github.com/chesteralan',
  linkedin: 'https://www.linkedin.com/in/chesteralan/',
  website: 'https://alchie.cc',
  email: 'tagudinalchie@gmail.com',
};
