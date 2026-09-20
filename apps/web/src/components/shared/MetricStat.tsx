interface MetricStatProps {
  value: string;
  label: string;
}

export default function MetricStat({ value, label }: MetricStatProps) {
  return (
    <div>
      <div className="text-2xl font-extrabold text-brand-600 sm:text-3xl">{value}</div>
      <div className="mt-0.5 text-xs font-semibold uppercase tracking-wide text-slate-500">
        {label}
      </div>
    </div>
  );
}
