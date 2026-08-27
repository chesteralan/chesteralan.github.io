import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Projects from '../Projects';
import { projects } from '../../data/portfolio';

describe('Projects', () => {
  function renderProjects() {
    return render(
      <MemoryRouter>
        <Projects />
      </MemoryRouter>
    );
  }

  it('renders page title', () => {
    renderProjects();
    expect(screen.getByRole('heading', { name: 'Projects' })).toBeInTheDocument();
  });

  it('renders all projects from portfolio data', () => {
    renderProjects();
    for (const project of projects) {
      expect(screen.getByText(project.title)).toBeInTheDocument();
    }
  });
});
