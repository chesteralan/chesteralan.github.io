import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ScrollToTop from '../ScrollToTop';

describe('ScrollToTop', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('scrolls to top on route change', () => {
    const scrollToSpy = vi.spyOn(window, 'scrollTo').mockImplementation(() => {});

    const { rerender } = render(
      <MemoryRouter initialEntries={['/']}>
        <ScrollToTop />
      </MemoryRouter>
    );

    expect(scrollToSpy).toHaveBeenCalledWith(0, 0);

    rerender(
      <MemoryRouter initialEntries={['/about']}>
        <ScrollToTop />
      </MemoryRouter>
    );

    expect(scrollToSpy).toHaveBeenCalledWith(0, 0);
  });
});
