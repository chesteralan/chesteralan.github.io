import type { Experience } from './types';

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
