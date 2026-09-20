import { Link } from 'react-router-dom';
import Badge from '@/components/ui/Badge';
import Icon from '@/components/ui/Icon';
import SectionContainer from '@/components/layout/SectionContainer';
import ScrollReveal from '@/components/layout/ScrollReveal';

export default function AboutCta() {
  return (
    <SectionContainer padding="!pt-12 !pb-20">
      <ScrollReveal>
        <div className="overflow-hidden rounded-3xl border border-cyan-100/80 bg-gradient-to-r from-cyan-50/70 via-cyan-50/50 to-purple-50/50 p-8 shadow-sm sm:p-12">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-xl space-y-3">
              <Badge icon="description">My Background</Badge>
              <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl">
                Want to learn more about my experience?
              </h2>
              <p className="text-sm text-slate-600 sm:text-base">
                Take a look at my detailed resume and technical background, or reach out to discuss
                a project, contract, or full-time opportunity.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <a
                href="https://cdn.alchie.cc/resume/Alchie%20Tagudin%20Resume%209.2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary shadow-sm"
              >
                <Icon name="download" size={18} />
                <span>Download Resume (PDF)</span>
              </a>
              <Link to="/contact" className="btn-outline">
                <span>Get in Touch</span>
                <Icon name="arrow_forward" size={18} />
              </Link>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </SectionContainer>
  );
}
