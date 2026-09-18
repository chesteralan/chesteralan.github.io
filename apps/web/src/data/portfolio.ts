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

export const experience: Experience[] = [
  {
    id: 'petlabco',
    role: 'Frontend Web Developer',
    company: 'PetLabCo.®',
    period: 'July 2020 — Present',
    description:
      'Develop and maintain high-converting e-commerce funnel, presell, and upsell experiences using modern frameworks.',
    highlights: [
      'Build reusable and scalable frontend components using React, Next.js, Gatsby.js, Vue.js, TypeScript, and JavaScript',
      'Develop and integrate headless CMS solutions using Strapi, enabling content-managed and scalable web experiences',
      'Implement complex product, pricing, promotional, discount, bundle, SKU, and quantity logic across e-commerce customer journeys',
      'Work with GraphQL and API integrations to retrieve and manage product, promotional, and customer-facing data',
      'Deploy and maintain production websites through Netlify and support CI/CD workflows',
    ],
    tags: [
      'React',
      'Next.js',
      'Gatsby.js',
      'Vue.js',
      'TypeScript',
      'GraphQL',
      'Strapi CMS',
      'Netlify',
    ],
    dotColor: 'bg-brand-600',
  },
  {
    id: 'freelance',
    role: 'Freelance Web Developer',
    company: 'oDesk (now Upwork)',
    period: 'Nov 2009 — Aug 2015',
    description:
      'Developed and maintained WordPress websites for various clients across different industries.',
    highlights: [
      'Developed and customized WordPress themes based on client requirements and design specifications',
      'Converted PSD designs into fully functional, responsive WordPress themes',
      'Managed website updates, content changes, troubleshooting, and ongoing maintenance for client websites',
    ],
    tags: ['WordPress', 'PHP', 'HTML', 'CSS', 'JavaScript'],
    dotColor: 'bg-purple-600',
  },
  {
    id: 'accountant-anc',
    role: 'Accountant',
    company: 'Archdiocesan Nourishment Center',
    period: 'July 2018 — June 2020',
    description: 'Manage and maintain financial records using QuickBooks Accounting System.',
    highlights: [
      'Perform bookkeeping and day-to-day accounting activities, ensuring accurate and up-to-date financial records',
      'Prepare and process employee payroll, including payroll calculations and related documentation',
      'Process bank deposits and perform regular bank reconciliations to ensure accurate financial records',
    ],
    tags: ['QuickBooks', 'Accounting', 'Payroll'],
    dotColor: 'bg-green-600',
  },
  {
    id: 'accountant-archdio',
    role: 'Accountant',
    company: "Archdiocese of Davao - Bishop's Residence",
    period: 'Sept 2015 — July 2018',
    description:
      'Manage and maintain accurate financial records using QuickBooks Accounting System.',
    highlights: [
      'Prepare and process employee payroll, ensuring accurate and timely payment',
      'Review and verify parish remittances to ensure accuracy and proper documentation',
      'Prepare and present financial reports to support management review and decision-making',
    ],
    tags: ['QuickBooks', 'Accounting', 'Financial Reporting'],
    dotColor: 'bg-yellow-600',
  },
  {
    id: 'internet-cafe',
    role: 'Internet Cafe Owner / Operator',
    company: 'Alchie Internet Cafe',
    period: 'Nov 2009 — Sept 2015',
    description: 'Managed the day-to-day operations of a small Internet cafe business.',
    highlights: [
      'Assisted customers with computer, internet, and basic technical support',
      'Diagnosed and repaired computer hardware and software issues',
      'Set up, configured, and maintained new computers and workstations',
    ],
    tags: ['Hardware', 'Technical Support', 'Business Operations'],
    dotColor: 'bg-orange-600',
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
