import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import About from '@/pages/About';

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
    expect(screen.getByText(/Frontend developer leveraging/)).toBeInTheDocument();
  });

  it('renders career timeline section', () => {
    renderAbout();
    expect(screen.getByText(/Career Timeline/)).toBeInTheDocument();
    expect(screen.getAllByText('Freelance Web Developer').length).toBeGreaterThan(0);
  });

  it('renders technical skills', () => {
    renderAbout();
    expect(screen.getByText(/Technical Skills/)).toBeInTheDocument();
    expect(screen.getAllByText('TypeScript').length).toBeGreaterThan(0);
  });
});
