import BadgePill from '@/components/ui/BadgePill';
import PageHeading from '@/components/shared/PageHeading';
import SectionContainer from '@/components/layout/SectionContainer';
import ScrollReveal from '@/components/layout/ScrollReveal';

export default function AboutHero() {
  return (
    <SectionContainer padding="pt-10 md:pt-16 pb-0">
      <ScrollReveal>
        <BadgePill icon="info" className="mb-4">
          About Alchie Tagudin
        </BadgePill>
      </ScrollReveal>
      <ScrollReveal>
        <PageHeading className="mb-4 max-w-4xl leading-[1.15]">
          About Me & Engineering Philosophy
        </PageHeading>
      </ScrollReveal>
      <ScrollReveal>
        <p className="max-w-3xl text-lg leading-relaxed text-slate-600">
          Frontend developer leveraging AI-assisted development to ship production applications,
          developer platforms, and resilient cloud infrastructure — faster iteration, sharper code,
          better outcomes.
        </p>
      </ScrollReveal>
    </SectionContainer>
  );
}
