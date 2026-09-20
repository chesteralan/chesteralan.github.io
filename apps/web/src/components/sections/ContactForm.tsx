import Card from '@/components/ui/Card';
import FormAlert from '@/components/form/FormAlert';
import FormField from '@/components/form/FormField';
import Icon from '@/components/ui/Icon';

interface ContactFormProps {
  formData: { name: string; email: string; message: string; website: string };
  status: string;
  errorMsg: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export default function ContactForm({
  formData,
  status,
  errorMsg,
  onChange,
  onSubmit,
}: ContactFormProps) {
  return (
    <Card className="p-6 sm:p-8">
      <div className="mb-7">
        <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">Get in Touch</h2>
        <p className="mt-1 text-sm text-slate-500">
          Have a question or want to work together? Drop me a message.
        </p>
      </div>

      <div
        className="pointer-events-none absolute h-0 overflow-hidden opacity-0"
        aria-hidden="true"
      >
        <label htmlFor="website">Leave this blank</label>
        <input
          type="text"
          id="website"
          name="website"
          value={formData.website}
          onChange={onChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <form onSubmit={onSubmit} className="space-y-6">
        <FormField
          id="name"
          name="name"
          label="Name"
          required
          value={formData.name}
          onChange={onChange}
          placeholder="Your name"
          errorId={status === 'error' ? 'contact-form-error' : undefined}
        />
        <FormField
          id="email"
          name="email"
          label="Email"
          type="email"
          required
          value={formData.email}
          onChange={onChange}
          placeholder="you@example.com"
          errorId={status === 'error' ? 'contact-form-error' : undefined}
        />
        <div>
          <label htmlFor="message" className="mb-1.5 block text-xs font-semibold text-slate-700">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={onChange}
            required
            rows={4}
            className="w-full resize-y rounded-lg border border-slate-200 bg-slate-50/70 p-3.5 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-transparent focus:bg-white focus:ring-2 focus:ring-brand-600"
            placeholder="Your message..."
            aria-describedby={status === 'error' ? 'contact-form-error' : undefined}
          />
        </div>

        <div aria-live="polite" aria-atomic="true">
          {status === 'success' && (
            <FormAlert
              type="success"
              message="Thanks for reaching out. I'll get back to you soon!"
            />
          )}
          {status === 'error' && (
            <FormAlert id="contact-form-error" type="error" message={errorMsg} />
          )}
        </div>

        <div className="space-y-3 pt-2" role="status" aria-live="polite">
          <button
            type="submit"
            disabled={status === 'sending'}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-brand-600 px-6 py-3.5 text-sm font-semibold tracking-wide text-white shadow-sm transition-all hover:bg-brand-700 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {status === 'sending' ? (
              <>
                <Icon name="hourglass_top" size={16} className="animate-spin" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <span>Send Message</span>
                <Icon name="send" size={16} />
              </>
            )}
          </button>
          <div className="flex items-center justify-center gap-1.5 text-xs text-slate-500">
            <Icon name="lock" size={14} />
            <span>Your information is kept strictly confidential and will never be shared.</span>
          </div>
        </div>
      </form>
    </Card>
  );
}
