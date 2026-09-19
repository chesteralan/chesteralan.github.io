import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import MetricStat from '../MetricStat';

describe('MetricStat', () => {
  it('renders value', () => {
    render(<MetricStat value="42" label="Projects" />);
    expect(screen.getByText('42')).toBeInTheDocument();
  });

  it('renders label', () => {
    render(<MetricStat value="42" label="Projects" />);
    expect(screen.getByText('Projects')).toBeInTheDocument();
  });

  it('renders with different values', () => {
    render(<MetricStat value="100%" label="Coverage" />);
    expect(screen.getByText('100%')).toBeInTheDocument();
    expect(screen.getByText('Coverage')).toBeInTheDocument();
  });
});
