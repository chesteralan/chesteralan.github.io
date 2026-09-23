import type { Project } from './types';

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
    status: 'Open Source',
  },
  {
    id: 'componentdock',
    title: 'Component Dock',
    description:
      'A modern template marketplace for developers — browse, search, and download free & premium website templates.',
    tags: ['TypeScript', 'Tailwind CSS', 'Portfolio'],
    links: {
      github: 'https://www.componentdock.com/',
    },
    featured: false,
    category: 'web',
    previewGradient: 'from-cyan-950 to-slate-900',
    metric: 'Web Templates Repository',
    status: 'Open Source',
  },
  {
    id: 'altrugenix',
    title: 'Altrugenix.js.org',
    description:
      'An open-source, scalable, and production-ready UI component library built with React, TypeScript, and Tailwind CSS.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'UI Components'],
    links: {
      github: 'https://github.com/Altrugenix/ui',
    },
    featured: false,
    category: 'web',
    previewGradient: 'from-amber-950 to-slate-900',
    metric: 'Community Hub',
    status: 'Open Source',
  },
  {
    id: 'bootstrap-offline',
    title: 'Bootstrap 3.3.x Offline Guide',
    description:
      'A made-easy offline documentation of Bootstrap 3.3.x for web designers and developers.',
    tags: ['Bootstrap', 'Documentation', 'Offline'],
    links: {
      chrome:
        'https://chromewebstore.google.com/detail/bootstrap-33x-offline-gui/gaojaekjdcfbdfiiggmklaocglaknnkd',
    },
    featured: false,
    category: 'extension',
    previewGradient: 'from-cyan-950 to-slate-900',
    metric: 'Chrome Extension',
  },
  {
    id: 'tailwind-cheatsheet',
    title: 'Tailwind Cheatsheet',
    description:
      'Simplify your web development workflow — find Tailwind CSS class names in a flash.',
    tags: ['Tailwind CSS', 'Productivity'],
    links: {
      chrome:
        'https://chromewebstore.google.com/detail/tailwind-css-cheat-sheet/fndbnfnjnhldjeppmglocapmfjdjkleh',
      live: 'https://tailwind-css-cheat-sheet.alchie.cc',
    },
    featured: false,
    category: 'extension',
    previewGradient: 'from-sky-950 to-slate-900',
    metric: 'Chrome Extension',
  },
  {
    id: 'novastyle-extension',
    title: 'NovaStyle Extension',
    description: "Visually edit any webpage's CSS — spacing, typography, colors, and layout.",
    tags: ['Web Development', 'Productivity'],
    links: {
      chrome: 'https://chromewebstore.google.com/detail/novastyle/giehjjenppeelhlabnhannafhpeboapa',
      github: 'https://github.com/chesteralan/NovaStyle',
    },
    featured: false,
    category: 'extension',
    previewGradient: 'from-sky-950 to-slate-900',
    metric: 'Chrome Extension',
  },
];
