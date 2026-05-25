export default function ScrollReveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`animate-fade-in ${className}`}>
      {children}
    </div>
  );
}
