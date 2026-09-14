# Portfolio Data

## Content Structure

All portfolio content lives in `src/data/portfolio.ts`.

## Data Types

### Project

```typescript
export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  links: {
    github?: string;
    live?: string;
    chrome?: string;
  };
  featured?: boolean;
}
```

### Extension

```typescript
export interface Extension {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  icon?: string;
}
```

### Skill

```typescript
export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'cloud';
}
```

### Social Links

```typescript
export const socialLinks = {
  github: string;
  linkedin: string;
  website: string;
  email: string;
};
```

## Content Categories

### Projects

| ID | Title | Featured |
|----|-------|----------|
| anc | Archdiocesan Nourishment Center | Yes |
| payrollph | PayrollPH | Yes |
| tailwind-portfolio | Tailwind Cards Portfolio | No |
| altrugenix | Altrugenix.js.org | No |

### Chrome Extensions

| ID | Title |
|----|-------|
| bootstrap-offline | Bootstrap 3.3.x Offline Guide |
| icon-fonts | Icon Fonts |
| tailwind-cheatsheet | Tailwind Cheatsheet |

### Skills

- **Frontend:** React, TypeScript, JavaScript, Next.js, Tailwind CSS, Bootstrap, HTML/CSS
- **Backend:** Node.js, Firebase, REST APIs
- **Tools:** Git, GitHub, VS Code, Chrome Extensions, CLI Tools
- **Cloud:** Firebase, Netlify, Vercel

### Social Links

- GitHub: github.com/chesteralan
- LinkedIn: linkedin.com/in/chesteralan
- Website: alchie.cc
- Email: hello@alchie.cc

## Updating Content

1. Edit `src/data/portfolio.ts`
2. Follow the TypeScript interfaces defined in that file
3. Run `yarn build` to verify
4. Run `yarn test` to ensure no regressions
