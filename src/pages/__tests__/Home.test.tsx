import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from '../Home';

describe('Home', () => {
  function renderHome() {
    return render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
  }

  it('renders hero section with name', () => {
    renderHome();
    expect(screen.getByText(/Alchie Tagudin/)).toBeInTheDocument();
    expect(screen.getByText(/Frontend Developer/)).toBeInTheDocument();
  });

  it('renders featured projects section', () => {
    renderHome();
    expect(screen.getByText(/Featured Projects/)).toBeInTheDocument();
    expect(screen.getByText('Archdiocesan Nourishment Center')).toBeInTheDocument();
    expect(screen.getByText('PayrollPH')).toBeInTheDocument();
  });

  it('renders skills section', () => {
    renderHome();
    expect(screen.getByText(/Skills & Tools/)).toBeInTheDocument();
    expect(screen.getAllByText('React').length).toBeGreaterThan(0);
  });

  it('renders CTA section', () => {
    renderHome();
    expect(screen.getByText(/Let's Build Something Together/)).toBeInTheDocument();
  });
});
