interface FormFieldProps {
  id: string;
  name: string;
  label: string;
  type?: 'text' | 'email' | 'password';
  required?: boolean;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorId?: string;
}

export default function FormField({
  id,
  name,
  label,
  type = 'text',
  required = false,
  placeholder,
  value,
  onChange,
  errorId,
}: FormFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-xs font-semibold text-slate-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-lg border border-slate-200 bg-slate-50/70 px-3.5 py-2.5 text-sm text-slate-800 outline-none transition-all focus:border-transparent focus:bg-white focus:ring-2 focus:ring-brand-600"
        placeholder={placeholder}
        aria-describedby={errorId}
      />
    </div>
  );
}
