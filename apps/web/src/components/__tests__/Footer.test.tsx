import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Footer from '@/components/layout/Footer';

function renderFooter() {
  return render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>
  );
}

describe('Footer', () => {
  it('renders brand name', () => {
    renderFooter();
    expect(screen.getByText('Alchie Tagudin')).toBeInTheDocument();
  });

  it('renders social links (github, linkedin, email)', () => {
    renderFooter();
    const github = screen.getByLabelText('GitHub').closest('a');
    expect(github).toHaveAttribute('href', 'https://github.com/chesteralan');

    const linkedin = screen.getByLabelText('LinkedIn').closest('a');
    expect(linkedin).toHaveAttribute('href', 'https://www.linkedin.com/in/chesteralan/');

    const email = screen.getByLabelText('Email').closest('a');
    expect(email).toHaveAttribute('href', 'mailto:tagudinalchie@gmail.com');
  });

  it('renders navigation links', () => {
    renderFooter();
    expect(screen.getByText('Home').closest('a')).toHaveAttribute('href', '/');
    expect(screen.getByText('About').closest('a')).toHaveAttribute('href', '/about');
    expect(screen.getByText('Projects').closest('a')).toHaveAttribute('href', '/projects');
    expect(screen.getByText('Contact').closest('a')).toHaveAttribute('href', '/contact');
  });
});
