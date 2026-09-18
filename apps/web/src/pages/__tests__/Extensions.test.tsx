import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Extensions from '../Extensions';
import { projects } from '../../data/portfolio';

const extensions = projects.filter((p) => p.category === 'extension');

describe('Extensions', () => {
  function renderExtensions() {
    return render(
      <MemoryRouter>
        <Extensions />
      </MemoryRouter>
    );
  }

  it('renders page title', () => {
    renderExtensions();
    expect(screen.getByRole('heading', { name: 'Browser Tools' })).toBeInTheDocument();
  });

  it('renders all extensions from portfolio data', () => {
    renderExtensions();
    for (const ext of extensions) {
      expect(screen.getByText(ext.title)).toBeInTheDocument();
    }
  });
});
