import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, within, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';

function renderNavbar(initialRoute = '/') {
  return render(
    <MemoryRouter initialEntries={[initialRoute]}>
      <Navbar />
    </MemoryRouter>
  );
}

function getDesktopNav(container: HTMLElement) {
  return container.querySelector('.hidden.items-center.gap-1.rounded-xl') as HTMLElement;
}

describe('Navbar', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('renders all nav links', () => {
    const { container } = renderNavbar();
    const desktop = getDesktopNav(container);
    expect(within(desktop).getByText('Home')).toBeInTheDocument();
    expect(within(desktop).getByText('About')).toBeInTheDocument();
    expect(within(desktop).getByText('Projects')).toBeInTheDocument();
    expect(within(desktop).getByText('Contact')).toBeInTheDocument();
  });

  it('highlights active route', () => {
    const { container } = renderNavbar('/about');
    const desktop = getDesktopNav(container);
    const aboutLink = within(desktop).getByText('About');
    expect(aboutLink.className).toMatch(/bg-white/);
  });

  it('toggles mobile menu open and closed', () => {
    renderNavbar();
    const toggleButton = screen.getByRole('button', { name: /toggle menu/i });
    const mobileMenu = document.querySelector('.overflow-hidden.transition-all') as HTMLElement;

    act(() => {
      fireEvent.click(toggleButton);
    });
    expect(mobileMenu.className).toMatch(/max-h-64/);

    act(() => {
      fireEvent.click(toggleButton);
    });
    expect(mobileMenu.className).toMatch(/max-h-0/);
  });

  it('applies scrolled styles when page is scrolled', () => {
    const { container } = renderNavbar();
    const header = container.querySelector('header')!;
    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 100, writable: true, configurable: true });
      window.dispatchEvent(new Event('scroll'));
    });
    expect(header.className).toMatch(/backdrop-blur-md/);
  });

  it('calls closeMenu when mobile link is clicked', () => {
    renderNavbar();
    const toggleButton = screen.getByRole('button', { name: /toggle menu/i });
    act(() => {
      fireEvent.click(toggleButton);
    });
    const mobileAbout = screen.getAllByText('About')[1];
    act(() => {
      fireEvent.click(mobileAbout);
    });
    const header = document.querySelector('header')!;
    expect(header).toBeInTheDocument();
  });
});
