import { Link } from 'react-router-dom';
import CTASection from '@/components/shared/CTASection';
import Icon from '@/components/ui/Icon';

export default function ProjectsCta() {
  return (
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
  );
}
