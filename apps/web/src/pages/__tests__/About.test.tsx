import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import About from '../About';

describe('About', () => {
  function renderAbout() {
    return render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );
  }

  it('renders bio section', () => {
    renderAbout();
    expect(screen.getByText(/About Me & Engineering Philosophy/)).toBeInTheDocument();
    expect(screen.getByText(/Full-stack software architect/)).toBeInTheDocument();
  });

  it('renders career timeline section', () => {
    renderAbout();
    expect(screen.getByText(/Career Timeline & Experience/)).toBeInTheDocument();
    expect(screen.getAllByText('Freelance Web Developer').length).toBeGreaterThan(0);
  });

  it('renders technical skills matrix', () => {
    renderAbout();
    expect(screen.getByText(/Technical Skills Matrix/)).toBeInTheDocument();
    expect(screen.getAllByText('TypeScript').length).toBeGreaterThan(0);
  });

  it('renders engineering values', () => {
    renderAbout();
    expect(screen.getByText(/Engineering Values & Principles/)).toBeInTheDocument();
    expect(screen.getByText('Scalability by Design')).toBeInTheDocument();
  });
});
