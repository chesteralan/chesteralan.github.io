import { Link } from 'react-router-dom';
import BadgePill from '@/components/ui/BadgePill';
import PageHeading from '@/components/shared/PageHeading';
import PulseDot from '@/components/ui/PulseDot';
import SectionContainer from '@/components/layout/SectionContainer';
import ScrollReveal from '@/components/layout/ScrollReveal';
import Icon from '@/components/ui/Icon';
import Tag from '@/components/ui/Tag';
import IconBox from '@/components/ui/IconBox';
import { skills } from '@/data/portfolio';
import AlchieImage from '@/assets/alchietagudin.jpg';

export default function HomeHero() {
  return (
    <SectionContainer padding="py-16 lg:py-20">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
        {/* Left Column */}
        <div className="flex flex-col items-start lg:col-span-7">
          <ScrollReveal>
            <BadgePill icon="terminal" size="md" className="mb-4">
              Frontend Developer
            </BadgePill>
          </ScrollReveal>
          <ScrollReveal>
            <PageHeading className="mb-6 leading-tight">
              Building apps with AI-assisted development — faster iteration, sharper code, better
              outcomes.
            </PageHeading>
          </ScrollReveal>
          <ScrollReveal>
            <p className="mb-8 max-w-xl text-lg leading-relaxed text-slate-600">
              Hi, I'm Alchie Tagudin — a frontend developer using AI tooling to ship production apps
              faster. Based in Davao City, Philippines.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <div className="mb-10 flex flex-wrap items-center gap-4">
              <Link to="/projects" className="btn-primary">
                <span>View Featured Work</span>
                <Icon name="arrow_forward" size={18} />
              </Link>
              <Link to="/contact" className="btn-outline">
                <Icon name="mail" size={18} />
                <span>Get in Touch</span>
              </Link>
            </div>
          </ScrollReveal>
          {/* Tech Stack */}
          <ScrollReveal>
            <div className="w-full border-t border-slate-200 pt-4">
              <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Core Tech Stack
              </div>
              <div className="flex flex-wrap gap-2">
                {skills
                  .filter((s) =>
                    ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Node.js'].includes(s.name)
                  )
                  .map((skill) => (
                    <Tag key={skill.name}>{skill.name}</Tag>
                  ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Column — Avatar */}
        <div className="flex justify-center lg:col-span-5 lg:justify-end">
          <ScrollReveal>
            <div className="relative">
              <div className="h-72 w-72 overflow-hidden rounded-full border-4 border-white shadow-xl ring-4 ring-cyan-100 sm:h-80 sm:w-80">
                <img
                  src={AlchieImage}
                  alt="Alchie Tagudin"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  fetchPriority="high"
                  width="320"
                  height="320"
                />
              </div>
              {/* Floating badge bottom-left */}
              <div className="absolute -bottom-3 -left-4 flex items-center gap-2 rounded-full border border-slate-100 bg-white px-4 py-2 shadow-lg">
                <PulseDot color="emerald" size="md" />
                <span className="text-xs font-semibold text-slate-800">Available for Projects</span>
              </div>
              {/* Floating badge top-right */}
              <div className="absolute -right-2 -top-3 flex items-center gap-2.5 rounded-xl border border-slate-100 bg-white px-4 py-2 shadow-lg">
                <IconBox icon="verified" color="cyan" size="xs" />
                <div className="flex flex-col">
                  <span className="text-xs font-bold leading-tight text-slate-900">
                    Frontend Developer
                  </span>
                  <span className="text-[10px] text-slate-500">8+ Yrs Experience</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </SectionContainer>
  );
}
