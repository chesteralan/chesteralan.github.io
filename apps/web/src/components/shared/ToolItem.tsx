interface ToolItemProps {
  title: string;
  subtitle: string;
}

export default function ToolItem({ title, subtitle }: ToolItemProps) {
  return (
    <div className="rounded-lg border border-slate-100 bg-slate-50 p-3">
      <div className="text-xs font-bold text-slate-900">{title}</div>
      <div className="mt-0.5 text-[11px] text-slate-500">{subtitle}</div>
    </div>
  );
}
