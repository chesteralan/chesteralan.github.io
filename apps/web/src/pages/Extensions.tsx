import PageHero from '@/components/shared/PageHero';
import ExtensionsGrid from '@/components/sections/ExtensionsGrid';

export default function Extensions() {
  return (
    <div>
      <PageHero
        badge="Chrome Extensions"
        subtitle="Productivity-Boosting Browser Tools"
        heading="Browser Tools"
        description="Productivity-boosting Chrome extensions I've built and published."
      />
      <ExtensionsGrid />
    </div>
  );
}
