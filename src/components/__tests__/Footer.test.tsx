import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Footer from '../Footer';

function renderFooter() {
  return render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>
  );
}

describe('Footer', () => {
  it('renders copyright year', () => {
    renderFooter();
    const year = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`${year}.*Alchie Tagudin`))).toBeInTheDocument();
  });

  it('renders social links (github, linkedin, email)', () => {
    renderFooter();
    const github = screen.getByLabelText('GitHub').closest('a');
    expect(github).toHaveAttribute('href', 'https://github.com/chesteralan');

    const linkedin = screen.getByLabelText('LinkedIn').closest('a');
    expect(linkedin).toHaveAttribute('href', 'https://www.linkedin.com/in/chesteralan/');

    const email = screen.getByLabelText('Email').closest('a');
    expect(email).toHaveAttribute('href', 'mailto:hello@alchie.cc');
  });

  it('renders navigation links', () => {
    renderFooter();
    expect(screen.getByText('Home').closest('a')).toHaveAttribute('href', '/');
    expect(screen.getByText('About').closest('a')).toHaveAttribute('href', '/about');
    expect(screen.getByText('Projects').closest('a')).toHaveAttribute('href', '/projects');
    expect(screen.getByText('Extensions').closest('a')).toHaveAttribute('href', '/extensions');
    expect(screen.getByText('Contact').closest('a')).toHaveAttribute('href', '/contact');
  });
});
