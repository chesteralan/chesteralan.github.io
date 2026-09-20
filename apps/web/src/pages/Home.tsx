import { Link } from 'react-router-dom';
import Icon from '@/components/ui/Icon';
import CTASection from '@/components/shared/CTASection';
import HomeHero from '@/components/sections/HomeHero';
import HomeStats from '@/components/sections/HomeStats';
import HomeSelectedWork from '@/components/sections/HomeSelectedWork';
import HomeTestimonial from '@/components/sections/HomeTestimonial';

export default function Home() {
  return (
    <div>
      <HomeHero />
      <HomeStats />
      <HomeSelectedWork />
      <HomeTestimonial />
      <CTASection
        variant="dark"
        badge={{ icon: 'handshake', text: "Let's Build Something" }}
        heading="Have a project in mind?"
        description="Let's build a fast, reliable, and scalable web solution together."
      >
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 shadow transition-all hover:-translate-y-0.5 hover:bg-slate-100 hover:shadow-md"
        >
          <span>Start a Conversation</span>
          <Icon name="arrow_forward" size={18} />
        </Link>
      </CTASection>
    </div>
  );
}
