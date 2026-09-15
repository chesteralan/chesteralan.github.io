// Base path for GitHub Pages deployment
// Root domain (e.g., chesteralan.github.io): empty string
// Subfolder (e.g., username.github.io/repo): "/repo-name"
export const BASE_PATH = '';

// Helper to get the pathname without the base path
export function stripBase(pathname: string): string {
  return pathname.replace(BASE_PATH, '') || '/';
}
