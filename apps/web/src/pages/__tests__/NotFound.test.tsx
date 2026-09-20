import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, useLocation } from 'react-router-dom';
import NotFound from '@/pages/NotFound';

function LocationDisplay() {
  const { pathname } = useLocation();
  return <div data-testid="location">{pathname}</div>;
}

describe('NotFound', () => {
  it('renders 404 heading', () => {
    render(
      <MemoryRouter initialEntries={['/missing']}>
        <NotFound />
      </MemoryRouter>
    );
    expect(screen.getByText('404')).toBeInTheDocument();
  });

  it('renders home link', () => {
    render(
      <MemoryRouter initialEntries={['/missing']}>
        <NotFound />
      </MemoryRouter>
    );
    expect(screen.getByRole('link', { name: /Back to Home/ })).toBeInTheDocument();
  });

  it('navigates to home on click', () => {
    render(
      <MemoryRouter initialEntries={['/missing']}>
        <NotFound />
        <LocationDisplay />
      </MemoryRouter>
    );

    expect(screen.getByTestId('location')).toHaveTextContent('/missing');

    fireEvent.click(screen.getByRole('link', { name: /Back to Home/ }));

    expect(screen.getByTestId('location')).toHaveTextContent('/');
  });
});
