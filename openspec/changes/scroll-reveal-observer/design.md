# Design: scroll-reveal-observer

## Technical Approach

The change is localized to `src/components/ScrollReveal.tsx` with supporting styles in `src/index.css`. No external dependencies are required — the native Intersection Observer API is used.

1. **Ref + effect**: Use `useRef` to capture the wrapper `<div>` and `useEffect` to set up an `IntersectionObserver` against that element after mount.

2. **Observer setup**: Create the observer with a `threshold` taken from a new optional prop (default `0.1`). On each intersection callback, when `entry.isIntersecting` is true, add a visible class (e.g. `is-visible`) to the element and `unobserve` it so the animation fires only once.

3. **Class toggling**: The wrapper starts with a hidden class (e.g. `reveal-hidden`) and the observer adds `is-visible` on intersection. The `animate-fade-in` static class is replaced by this state-driven class toggle.

4. **Cleanup**: Disconnect the observer in the effect cleanup to avoid leaks.

5. **CSS**: In `src/index.css`, define the initial hidden state (e.g. `opacity: 0; transform: translateY(...)`) and the revealed state via the `is-visible` class (e.g. `opacity: 1; transform: none`) with a `transition`.

## Example shape

```tsx
export default function ScrollReveal({ children, className = '', threshold = 0.1 }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          obs.unobserve(el);
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return (
    <div ref={ref} className={`reveal-hidden ${className}`}>
      {children}
    </div>
  );
}
```
