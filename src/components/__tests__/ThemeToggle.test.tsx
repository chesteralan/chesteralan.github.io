import { it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ThemeToggle from '../ThemeToggle';

beforeEach(() => {
  localStorage.clear();
  document.documentElement.classList.remove('dark');
  vi.restoreAllMocks();

  vi.stubGlobal(
    'matchMedia',
    vi.fn().mockImplementation(() => ({
      matches: false,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    }))
  );
});

it('renders toggle button', () => {
  render(<ThemeToggle />);
  expect(screen.getByRole('button', { name: /toggle dark mode/i })).toBeInTheDocument();
});

it('switches between sun/moon icons on click', () => {
  const { container } = render(<ThemeToggle />);
  const button = screen.getByRole('button', { name: /toggle dark mode/i });

  const sunIcon = container.querySelector('.text-amber-500');
  const moonIcon = container.querySelector('.text-blue-400');

  expect(sunIcon).toHaveClass('opacity-100');
  expect(moonIcon).toHaveClass('opacity-0');

  fireEvent.click(button);

  expect(container.querySelector('.text-amber-500')).toHaveClass('opacity-0');
  expect(container.querySelector('.text-blue-400')).toHaveClass('opacity-100');
});

it('persists theme to localStorage', () => {
  render(<ThemeToggle />);
  const button = screen.getByRole('button', { name: /toggle dark mode/i });

  fireEvent.click(button);
  expect(localStorage.getItem('theme')).toBe('dark');

  fireEvent.click(button);
  expect(localStorage.getItem('theme')).toBe('light');
});
