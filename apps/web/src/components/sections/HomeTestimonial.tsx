import Card from '@/components/ui/Card';
import SectionContainer from '@/components/layout/SectionContainer';
import ScrollReveal from '@/components/layout/ScrollReveal';
import Icon from '@/components/ui/Icon';
import { testimonials } from '@/data/portfolio';

export default function HomeTestimonial() {
  if (testimonials.length === 0) return null;

  return (
    <SectionContainer padding="pb-10">
      <ScrollReveal>
        <Card padding="lg" className="relative overflow-hidden">
          <div className="mb-4 flex items-center gap-1 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Icon key={i} name="star" size={20} className="text-amber-400" />
            ))}
          </div>
          <blockquote className="mb-6 text-xl font-medium leading-relaxed text-slate-800 lg:text-2xl">
            "{testimonials[0].content}"
          </blockquote>
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white shadow-sm">
              {testimonials[0].initials}
            </div>
            <div>
              <div className="font-bold text-slate-900">{testimonials[0].name}</div>
              <div className="text-sm text-slate-500">{testimonials[0].role}</div>
            </div>
          </div>
        </Card>
      </ScrollReveal>
    </SectionContainer>
  );
}
