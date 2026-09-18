import { useRef, useEffect, useState, createContext, useContext } from 'react';
import { cn } from '../lib/cn';

interface ObserverContextValue {
  observe: (el: Element, callback: () => void) => () => void;
}

const ObserverContext = createContext<ObserverContextValue | null>(null);

export function ScrollRevealProvider({ children }: { children: React.ReactNode }) {
  const callbacksRef = useRef<Map<Element, () => void>>(new Map());

  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            callbacksRef.current.get(entry.target)?.();
            observerRef.current?.unobserve(entry.target);
            callbacksRef.current.delete(entry.target);
          }
        }
      },
      { threshold: 0.1 }
    );

    return () => observerRef.current?.disconnect();
  }, []);

  const observe = (el: Element, callback: () => void) => {
    callbacksRef.current.set(el, callback);
    observerRef.current?.observe(el);
    return () => {
      observerRef.current?.unobserve(el);
      callbacksRef.current.delete(el);
    };
  };

  return <ObserverContext.Provider value={{ observe }}>{children}</ObserverContext.Provider>;
}

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
}

export default function ScrollReveal({ children, className = '' }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const ctx = useContext(ObserverContext);

  useEffect(() => {
    const el = ref.current;
    /* istanbul ignore next -- ref is always set in jsdom */
    if (!el) return;

    if (ctx) {
      return ctx.observe(el, () => setVisible(true));
    }

    // Fallback: standalone observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ctx]);

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-out',
        visible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0',
        className
      )}
    >
      {children}
    </div>
  );
}
