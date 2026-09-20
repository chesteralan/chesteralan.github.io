import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import SubHeading from '@/components/shared/SubHeading';

describe('SubHeading', () => {
  it('renders children text', () => {
    render(<SubHeading>My Heading</SubHeading>);
    expect(screen.getByText('My Heading')).toBeInTheDocument();
  });

  it('renders as h3 element', () => {
    render(<SubHeading>Heading</SubHeading>);
    expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<SubHeading className="custom">Text</SubHeading>);
    expect(container.firstChild).toHaveClass('custom');
  });
});
