import ScrollReveal from '@/components/layout/ScrollReveal';
import SectionContainer from '@/components/layout/SectionContainer';
import ContactHero from '@/components/sections/ContactHero';
import ContactSidebar from '@/components/sections/ContactSidebar';
import ContactForm from '@/components/sections/ContactForm';
import { useContactForm } from '@/hooks/useContactForm';

export default function Contact() {
  const { formData, status, errorMsg, copied, handleChange, handleCopyEmail, handleSubmit } =
    useContactForm();

  return (
    <div>
      <ContactHero />
      <SectionContainer padding="pb-20">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          <ContactSidebar copied={copied} onCopy={handleCopyEmail} />
          <div className="lg:col-span-7">
            <ScrollReveal>
              <ContactForm
                formData={formData}
                status={status}
                errorMsg={errorMsg}
                onChange={handleChange}
                onSubmit={handleSubmit}
              />
            </ScrollReveal>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
