import AboutHero from '@/components/sections/AboutHero';
import AboutSkills from '@/components/sections/AboutSkills';
import AboutTimeline from '@/components/sections/AboutTimeline';
import AboutCta from '@/components/sections/AboutCta';

export default function About() {
  return (
    <div>
      <AboutHero />
      <AboutSkills />
      <AboutTimeline />
      <AboutCta />
    </div>
  );
}
