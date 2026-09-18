import { describe, it, expect } from 'vitest';
import { stripBase } from '../config';

describe('stripBase', () => {
  it('returns / for empty path', () => {
    expect(stripBase('')).toBe('/');
  });

  it('returns the path as-is when it starts with /', () => {
    expect(stripBase('/about')).toBe('/about');
  });

  it('handles root path', () => {
    expect(stripBase('/')).toBe('/');
  });
});
