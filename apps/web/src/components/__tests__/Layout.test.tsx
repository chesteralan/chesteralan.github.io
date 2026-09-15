import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Layout from '../Layout';

vi.mock('../Navbar', () => ({
  default: () => <nav data-testid="navbar">Navbar</nav>,
}));

vi.mock('../Footer', () => ({
  default: () => <footer data-testid="footer">Footer</footer>,
}));

vi.mock('../ScrollToTop', () => ({
  default: () => null,
}));

function renderLayout() {
  return render(
    <MemoryRouter>
      <Layout />
    </MemoryRouter>
  );
}

describe('Layout', () => {
  it('renders Navbar', () => {
    renderLayout();
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
  });

  it('renders Footer', () => {
    renderLayout();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  it('renders skip link', () => {
    renderLayout();
    const skipLink = screen.getByText('Skip to content');
    expect(skipLink).toHaveAttribute('href', '#main-content');
  });

  it('renders main content area with id', () => {
    renderLayout();
    const main = document.getElementById('main-content');
    expect(main).toBeInTheDocument();
    expect(main?.tagName).toBe('MAIN');
  });
});
