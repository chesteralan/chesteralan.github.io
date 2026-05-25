export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  links: {
    github?: string;
    live?: string;
    chrome?: string;
  };
  featured?: boolean;
}

export interface Extension {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  icon?: string;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'cloud';
}

export const projects: Project[] = [
  {
    id: 'pinas',
    title: 'Pinas.cc',
    description:
      'A comprehensive gateway to the Philippines — your portal for exploring Filipino culture, destinations, and resources. Built with React and Firebase.',
    tags: ['React', 'Firebase', 'Tailwind CSS'],
    links: {
      live: 'https://pinas.cc/',
    },
    featured: true,
  },
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
  },
  {
    id: 'create-agent-docs',
    title: 'Create Agent Docs',
    description:
      'A CLI tool that scaffolds AI-ready documentation systems to help developers and teams build better documentation for their AI agents.',
    tags: ['TypeScript', 'CLI', 'Documentation', 'AI'],
    links: {
      github: 'https://github.com/chesteralan/create-agent-docs',
    },
    featured: true,
  },
  {
    id: 'agent-docs-template',
    title: 'Agent Docs Template',
    description:
      'Reusable AI-ready documentation templates for developers and teams building agentic applications.',
    tags: ['Documentation', 'Templates', 'AI'],
    links: {
      github: 'https://github.com/chesteralan/agent-docs-template',
    },
    featured: false,
  },
  {
    id: 'digital-architect',
    title: 'Digital Architect Template',
    description:
      'A design-to-code workflow template — stitch your designs in a studio and generate production-ready code.',
    tags: ['TypeScript', 'Design', 'AI Studio'],
    links: {
      github: 'https://github.com/chesteralan/digital-architect-web-template',
    },
    featured: false,
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
  },
  {
    id: 'altrugenix',
    title: 'Altrugenix.js.org',
    description:
      'A community site dedicated to JavaScript and its awesome ecosystem. Contributions and resources for JS developers since 2015.',
    tags: ['JavaScript', 'Community', 'Documentation'],
    links: {
      github: 'https://github.com/chesteralan/altrugenix.js.org',
    },
    featured: false,
  },
];

export const extensions: Extension[] = [
  {
    id: 'bootstrap-offline',
    title: 'Bootstrap 3.3.x Offline Guide',
    description:
      'A made-easy offline documentation of Bootstrap 3.3.x for web designers and developers. Access all Bootstrap components and utilities without an internet connection.',
    tags: ['Bootstrap', 'Documentation', 'Offline', 'Tools'],
    link: 'https://chromewebstore.google.com/detail/bootstrap-33x-offline-gui/gaojaekjdcfbdfiiggmklaocglaknnkd',
  },
  {
    id: 'icon-fonts',
    title: 'Icon Fonts',
    description:
      'One-click access to Glyphicon, Font Awesome, Material Icons, Dashicons, Ionicons, Octicons, Genericons, and Devicons all in one extension.',
    tags: ['Icons', 'Fonts', 'Design', 'Productivity'],
    link: 'https://chromewebstore.google.com/detail/icon-fonts/djbcaikkgpmefanfonnebhgepgpkghkf',
  },
  {
    id: 'tailwind-cheatsheet',
    title: 'Tailwind Cheatsheet',
    description:
      'Simplify your web development workflow — find Tailwind CSS class names in a flash with this handy Chrome extension.',
    tags: ['Tailwind CSS', 'Productivity', 'Cheatsheet'],
    link: 'https://chromewebstore.google.com/detail/tailwind-cheatsheet/',
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
  { name: 'Firebase', category: 'cloud' },
  { name: 'Netlify', category: 'cloud' },
  { name: 'Vercel', category: 'cloud' },
];

export const socialLinks = {
  github: 'https://github.com/chesteralan',
  linkedin: 'https://www.linkedin.com/in/chesteralan/',
  website: 'https://alchie.cc',
  email: 'hello@alchie.cc',
};
