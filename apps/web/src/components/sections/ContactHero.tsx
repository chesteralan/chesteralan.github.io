import BadgePill from '@/components/ui/BadgePill';
import PageHeading from '@/components/shared/PageHeading';
import SectionContainer from '@/components/layout/SectionContainer';
import ScrollReveal from '@/components/layout/ScrollReveal';

export default function ContactHero() {
  return (
    <SectionContainer padding="pt-16 pb-8">
      <ScrollReveal>
        <BadgePill size="md" className="mb-4">
          GET IN TOUCH
        </BadgePill>
      </ScrollReveal>
      <ScrollReveal>
        <PageHeading size="lg" className="mb-4">
          Let's Build Something Exceptional
        </PageHeading>
      </ScrollReveal>
      <ScrollReveal>
        <p className="max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
          Currently available for freelance engineering contracts, consulting, and full-time senior
          engineering roles.
        </p>
      </ScrollReveal>
    </SectionContainer>
  );
}
