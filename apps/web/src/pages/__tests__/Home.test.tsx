import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from '@/pages/Home';

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
    expect(screen.getAllByText(/Frontend Developer/).length).toBeGreaterThan(0);
  });

  it('renders selected work section', () => {
    renderHome();
    expect(screen.getByText(/Selected Work/)).toBeInTheDocument();
  });

  it('renders stats section', () => {
    renderHome();
    expect(screen.getByText(/Years Experience/)).toBeInTheDocument();
    expect(screen.getByText(/Projects Shipped/)).toBeInTheDocument();
  });

  it('renders CTA section', () => {
    renderHome();
    expect(screen.getByText(/Have a project in mind/)).toBeInTheDocument();
  });
});
