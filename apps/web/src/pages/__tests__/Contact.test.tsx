import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Contact from '../Contact';
import { socialLinks } from '../../data/portfolio';

describe('Contact', () => {
  function renderContact() {
    return render(
      <MemoryRouter>
        <Contact />
      </MemoryRouter>
    );
  }

  beforeEach(() => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: true, json: async () => ({}) }));
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('renders contact form', () => {
    renderContact();
    expect(screen.getByLabelText(/First Name/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Last Name/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Work Email Address/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Project Details/)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Send Message/ })).toBeInTheDocument();
  });

  it('renders social links', () => {
    renderContact();
    expect(screen.getByText('GitHub')).toBeInTheDocument();
    expect(screen.getByText('LinkedIn')).toBeInTheDocument();
    expect(screen.getByText('@chesteralan')).toBeInTheDocument();
    expect(screen.getByText('/in/chesteralan')).toBeInTheDocument();
    expect(screen.getAllByText(socialLinks.email).length).toBeGreaterThan(0);
  });

  it('shows honeypot field (hidden)', () => {
    renderContact();
    const honeypot = screen.getByLabelText(/Leave this blank/);
    expect(honeypot).toBeInTheDocument();
    expect(honeypot).toHaveAttribute('name', 'website');
    expect(honeypot).toHaveAttribute('tabindex', '-1');
    expect(honeypot.closest('[aria-hidden="true"]')).not.toBeNull();
  });

  it('validates required fields', () => {
    renderContact();
    const form = screen.getByRole('button', { name: /Send Message/ }).closest('form')!;
    fireEvent.submit(form);
    expect(screen.getByText(/Please fill in all required fields/)).toBeInTheDocument();
  });

  it('validates email format', () => {
    renderContact();
    fireEvent.change(screen.getByLabelText(/First Name/), { target: { value: 'Jane' } });
    fireEvent.change(screen.getByLabelText(/Last Name/), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByLabelText(/Work Email Address/), { target: { value: 'not-an-email' } });
    fireEvent.change(screen.getByLabelText(/Project Details/), { target: { value: 'Hi' } });
    const form = screen.getByRole('button', { name: /Send Message/ }).closest('form')!;
    fireEvent.submit(form);
    expect(screen.getByText(/Please enter a valid email address/)).toBeInTheDocument();
  });

  it('handles successful form submission', async () => {
    renderContact();
    fireEvent.change(screen.getByLabelText(/First Name/), { target: { value: 'Jane' } });
    fireEvent.change(screen.getByLabelText(/Last Name/), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByLabelText(/Work Email Address/), { target: { value: 'jane@example.com' } });
    fireEvent.change(screen.getByLabelText(/Project Details/), {
      target: { value: 'Hello there!' },
    });

    fireEvent.click(screen.getByRole('button', { name: /Send Message/ }));

    await waitFor(() => expect(screen.getByText(/Message sent/)).toBeInTheDocument());
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('shows error on fetch failure', async () => {
    vi.mocked(fetch).mockRejectedValueOnce(new Error('Network error'));
    renderContact();
    fireEvent.change(screen.getByLabelText(/First Name/), { target: { value: 'Jane' } });
    fireEvent.change(screen.getByLabelText(/Last Name/), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByLabelText(/Work Email Address/), { target: { value: 'jane@example.com' } });
    fireEvent.change(screen.getByLabelText(/Project Details/), { target: { value: 'Hi' } });
    fireEvent.click(screen.getByRole('button', { name: /Send Message/ }));
    await waitFor(() => expect(screen.getByText(/Something went wrong/)).toBeInTheDocument());
  });

  it('shows error on non-ok response', async () => {
    vi.mocked(fetch).mockResolvedValueOnce({ ok: false } as Response);
    renderContact();
    fireEvent.change(screen.getByLabelText(/First Name/), { target: { value: 'Jane' } });
    fireEvent.change(screen.getByLabelText(/Last Name/), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByLabelText(/Work Email Address/), { target: { value: 'jane@example.com' } });
    fireEvent.change(screen.getByLabelText(/Project Details/), { target: { value: 'Hi' } });
    fireEvent.click(screen.getByRole('button', { name: /Send Message/ }));
    await waitFor(() => expect(screen.getByText(/Something went wrong/)).toBeInTheDocument());
  });

  it('rejects honeypot submissions', async () => {
    renderContact();
    const honeypot = screen.getByLabelText(/Leave this blank/);
    fireEvent.change(honeypot, { target: { value: 'bot' } });
    fireEvent.change(screen.getByLabelText(/First Name/), { target: { value: 'Jane' } });
    fireEvent.change(screen.getByLabelText(/Last Name/), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByLabelText(/Work Email Address/), { target: { value: 'jane@example.com' } });
    fireEvent.change(screen.getByLabelText(/Project Details/), { target: { value: 'Hi' } });
    fireEvent.click(screen.getByRole('button', { name: /Send Message/ }));
    await waitFor(() => expect(fetch).not.toHaveBeenCalled());
  });
});
