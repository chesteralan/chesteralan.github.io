interface FormFieldProps {
  id: string;
  name: string;
  label: string;
  type?: 'text' | 'email' | 'password';
  required?: boolean;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
}: FormFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-semibold text-slate-700 mb-1.5">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-xl bg-slate-50/70 border border-slate-200 text-slate-800 text-sm px-3.5 py-2.5 focus:bg-white focus:ring-2 focus:ring-[#0891b2] focus:border-transparent outline-none transition-all"
        placeholder={placeholder}
      />
    </div>
  );
}
