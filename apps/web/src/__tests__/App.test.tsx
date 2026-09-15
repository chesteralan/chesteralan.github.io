import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('renders the home page by default', () => {
    render(<App />);
    expect(screen.getByText(/Hi, I'm/)).toBeInTheDocument();
    expect(screen.getAllByText(/Alchie Tagudin/).length).toBeGreaterThan(0);
  });

  it('renders the layout with navbar and footer', () => {
    render(<App />);
    expect(screen.getAllByRole('navigation').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Alchie Tagudin').length).toBeGreaterThan(0);
  });
});
