import { it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ProjectCard from '../ProjectCard';
import type { Project } from '../../data/portfolio';

const baseProject: Project = {
  id: 'test',
  title: 'Test Project',
  description: 'A test project description.',
  tags: ['React', 'TypeScript'],
  links: {},
};

it('renders project title, description, and tags', () => {
  render(<ProjectCard project={baseProject} />);
  expect(screen.getByText('Test Project')).toBeInTheDocument();
  expect(screen.getByText('A test project description.')).toBeInTheDocument();
  expect(screen.getByText('React')).toBeInTheDocument();
  expect(screen.getByText('TypeScript')).toBeInTheDocument();
});

it('shows GitHub link when provided', () => {
  const project: Project = {
    ...baseProject,
    links: { github: 'https://github.com/test' },
  };
  render(<ProjectCard project={project} />);
  const link = screen.getByText('Source').closest('a');
  expect(link).toHaveAttribute('href', 'https://github.com/test');
});

it('shows live link when provided', () => {
  const project: Project = {
    ...baseProject,
    links: { live: 'https://example.com' },
  };
  render(<ProjectCard project={project} />);
  const link = screen.getByText('Live Demo').closest('a');
  expect(link).toHaveAttribute('href', 'https://example.com');
});

it('shows Chrome link when provided', () => {
  const project: Project = {
    ...baseProject,
    links: { chrome: 'https://chromewebstore.google.com/detail/abc' },
  };
  render(<ProjectCard project={project} />);
  const link = screen.getByText('Chrome Store').closest('a');
  expect(link).toHaveAttribute('href', 'https://chromewebstore.google.com/detail/abc');
});

it('shows featured badge when featured', () => {
  const project: Project = { ...baseProject, featured: true };
  render(<ProjectCard project={project} />);
  expect(screen.getByText('Featured')).toBeInTheDocument();
});

it('does not show featured badge when not featured', () => {
  render(<ProjectCard project={baseProject} />);
  expect(screen.queryByText('Featured')).not.toBeInTheDocument();
});
