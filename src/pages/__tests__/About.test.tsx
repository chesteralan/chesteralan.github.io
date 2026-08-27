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
    expect(screen.getByText(/About Me/)).toBeInTheDocument();
    expect(screen.getByText(/I craft digital experiences from/)).toBeInTheDocument();
  });

  it('renders experience section', () => {
    renderAbout();
    expect(screen.getByText(/Experience/)).toBeInTheDocument();
    expect(screen.getByText('PetLabCo.')).toBeInTheDocument();
  });

  it('renders timeline section', () => {
    renderAbout();
    expect(screen.getByText(/Timeline/)).toBeInTheDocument();
    expect(screen.getByText('Started GitHub journey')).toBeInTheDocument();
  });

  it('renders skills section', () => {
    renderAbout();
    expect(screen.getByText(/Full Stack/)).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
  });
});
