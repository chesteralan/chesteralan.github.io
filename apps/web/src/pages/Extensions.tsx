import PageHero from '../components/PageHero';
import ScrollReveal from '../components/ScrollReveal';
import Icon from '../components/Icon';
import Tag from '../components/Tag';
import IconBox from '../components/IconBox';
import Card from '../components/Card';
import SectionContainer from '../components/SectionContainer';
import { projects } from '../data/portfolio';

const extensions = projects.filter((p) => p.category === 'extension');

export default function Extensions() {
  return (
    <div>
      <PageHero
        badge="Chrome Extensions"
        subtitle="Productivity-Boosting Browser Tools"
        heading="Browser Tools"
        description="Productivity-boosting Chrome extensions I've built and published."
      />

      {/* Extensions Grid */}
      <SectionContainer padding="py-10">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {extensions.map((ext) => (
            <ScrollReveal key={ext.id}>
              <a
                href={ext.links.chrome}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <Card hoverable padding="default" className="h-full group-hover:border-cyan-200">
                  <div className="mb-4">
                    <IconBox icon="extension" color="cyan" size="lg" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold tracking-tight text-slate-900 transition-colors group-hover:text-brand-600">
                    {ext.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-slate-600">{ext.description}</p>
                  <div className="mb-5 flex flex-wrap gap-2">
                    {ext.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 transition-colors group-hover:text-brand-700">
                    View in Chrome Web Store
                    <Icon name="open_in_new" size={14} />
                  </span>
                </Card>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </SectionContainer>
    </div>
  );
}
