import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import CardFooter from '../CardFooter';

describe('CardFooter', () => {
  it('renders left and right content', () => {
    render(<CardFooter left="Label" right="Value" />);
    expect(screen.getByText('Label')).toBeInTheDocument();
    expect(screen.getByText('Value')).toBeInTheDocument();
  });

  it('renders only left content', () => {
    render(<CardFooter left="Only Left" />);
    expect(screen.getByText('Only Left')).toBeInTheDocument();
  });

  it('renders only right content', () => {
    render(<CardFooter right="Only Right" />);
    expect(screen.getByText('Only Right')).toBeInTheDocument();
  });

  it('applies between alignment by default', () => {
    const { container } = render(<CardFooter left="A" right="B" />);
    expect(container.firstChild).toHaveClass('justify-between');
  });

  it('applies left alignment when specified', () => {
    const { container } = render(<CardFooter left="A" right="B" align="left" />);
    expect(container.firstChild).toHaveClass('gap-1.5');
  });

  it('applies custom className', () => {
    const { container } = render(<CardFooter left="A" className="custom-class" />);
    expect(container.firstChild).toHaveClass('custom-class');
  });
});
