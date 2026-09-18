import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import ScrollReveal from '../components/ScrollReveal';
import ProjectCard from '../components/ProjectCard';
import Icon from '../components/Icon';
import Tag from '../components/Tag';
import SectionContainer from '../components/SectionContainer';
import CTASection from '../components/CTASection';
import { projects } from '../data/portfolio';

const filterPills = ['All Projects', 'Frontend', 'Chrome Extensions', 'Open Source'] as const;
type FilterType = (typeof filterPills)[number];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('All Projects');

  const filteredItems = projects.filter((item) => {
    switch (activeFilter) {
      case 'Frontend':
        return item.category === 'web';
      case 'Chrome Extensions':
        return item.category === 'extension';
      case 'Open Source':
        return item.status === 'Open Source';
      default:
        return true;
    }
  });

  return (
    <div>
      <PageHero
        badge="Engineering Portfolio"
        subtitle="Production Case Studies &amp; Systems"
        heading="Featured Work &amp; Engineering Projects"
        description="A curated collection of web applications, Chrome extensions, and developer tools engineered for scale, resiliency, and optimal user experience."
      />

      {/* Filter & Search Toolbar + Project Grid */}
      <SectionContainer padding="py-10">
        {/* Filter & Search */}
        <ScrollReveal>
          <div className="mb-8 flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex w-full flex-wrap items-center gap-1.5 md:w-auto">
              {filterPills.map((pill) => (
                <button key={pill} onClick={() => setActiveFilter(pill)} className="cursor-pointer">
                  <Tag variant={activeFilter === pill ? 'active' : 'outline'}>{pill}</Tag>
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* 3-Column Project Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <ScrollReveal key={item.id}>
              <ProjectCard project={item} />
            </ScrollReveal>
          ))}
        </div>
      </SectionContainer>

      {/* Collaboration CTA */}
      <CTASection
        variant="light"
        badge={{ text: 'Ready to Collaborate' }}
        heading="Have a website or web application you want to build or improve?"
        description="I help businesses turn ideas into reliable, production-ready web solutions. From modernizing existing websites to building custom applications, I focus on clean code, great user experiences, and long-term maintainability."
      >
        <div className="flex flex-wrap items-center gap-3">
          <Link
            to="/contact"
            className="shadow-xs flex items-center space-x-2 rounded-lg bg-brand-600 px-5 py-2.5 text-xs font-semibold text-white transition-all hover:bg-brand-700"
          >
            <span>Start a Conversation</span>
            <Icon name="chat_bubble_outline" size={14} />
          </Link>
          <a
            href="mailto:tagudinalchie@gmail.com"
            className="shadow-xs flex items-center space-x-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-xs font-medium text-slate-700 transition-all hover:bg-slate-50"
          >
            <span>Direct Email</span>
            <Icon name="mail" size={14} className="text-slate-500" />
          </a>
        </div>
      </CTASection>
    </div>
  );
}
