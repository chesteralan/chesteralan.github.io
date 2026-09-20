import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ProfileDetail from '@/components/shared/ProfileDetail';

describe('ProfileDetail', () => {
  it('renders label, value, and description', () => {
    render(
      <ProfileDetail
        icon="location_on"
        label="Location"
        value="Davao City"
        description="Philippines"
      />
    );
    expect(screen.getByText('Location')).toBeInTheDocument();
    expect(screen.getByText('Davao City')).toBeInTheDocument();
    expect(screen.getByText('Philippines')).toBeInTheDocument();
  });

  it('renders with cyan color by default', () => {
    const { container } = render(
      <ProfileDetail icon="mail" label="Email" value="test@example.com" description="Contact me" />
    );
    expect(container.querySelector('.bg-cyan-50')).toBeInTheDocument();
  });

  it('renders with purple color when specified', () => {
    const { container } = render(
      <ProfileDetail
        icon="mail"
        label="Email"
        value="test@example.com"
        description="Contact me"
        color="purple"
      />
    );
    expect(container.querySelector('.bg-purple-50')).toBeInTheDocument();
  });
});
