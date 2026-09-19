import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import ScrollReveal from '../ScrollReveal';

let observerCallback: IntersectionObserverCallback | null = null;

class MockIntersectionObserver {
  callback: IntersectionObserverCallback;
  constructor(cb: IntersectionObserverCallback) {
    observerCallback = cb;
    this.callback = cb;
  }
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
}

describe('ScrollReveal', () => {
  beforeEach(() => {
    observerCallback = null;
    vi.stubGlobal('IntersectionObserver', MockIntersectionObserver);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders children', () => {
    render(
      <ScrollReveal>
        <p>Reveal content</p>
      </ScrollReveal>
    );
    expect(screen.getByText('Reveal content')).toBeInTheDocument();
  });

  it('starts invisible', () => {
    const { container } = render(
      <ScrollReveal>
        <p>Content</p>
      </ScrollReveal>
    );
    const wrapper = container.firstElementChild as HTMLElement;
    expect(wrapper).toHaveClass('opacity-0');
    expect(wrapper).toHaveClass('translate-y-5');
  });

  it('becomes visible when intersecting', () => {
    const { container } = render(
      <ScrollReveal>
        <p>Content</p>
      </ScrollReveal>
    );
    const wrapper = container.firstElementChild as HTMLElement;

    act(() => {
      observerCallback!(
        [{ isIntersecting: true } as IntersectionObserverEntry],
        {} as IntersectionObserver
      );
    });

    expect(wrapper).toHaveClass('opacity-100');
    expect(wrapper).toHaveClass('translate-y-0');
  });

  it('stays invisible when not intersecting', () => {
    const { container } = render(
      <ScrollReveal>
        <p>Content</p>
      </ScrollReveal>
    );
    const wrapper = container.firstElementChild as HTMLElement;

    act(() => {
      observerCallback!(
        [{ isIntersecting: false } as IntersectionObserverEntry],
        {} as IntersectionObserver
      );
    });

    expect(wrapper).toHaveClass('opacity-0');
  });

  it('applies custom className', () => {
    const { container } = render(
      <ScrollReveal className="custom-class">
        <p>Content</p>
      </ScrollReveal>
    );
    const wrapper = container.firstElementChild as HTMLElement;
    expect(wrapper).toHaveClass('custom-class');
  });
});
