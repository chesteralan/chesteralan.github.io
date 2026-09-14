# Assets

## Image Assets

### Favicon & Branding
- `public/apple-touch-icon.png` - Apple touch icon (180x180)
- `public/favicon.svg` - SVG favicon with gradient design
- `docs/assets/apple-touch-icon-Cw9JgD5j.png` - Generated variant

### Social Icons
- `public/icons.svg` - SVG sprite sheet containing:
  - `bluesky-icon` - Bluesky social icon
  - `discord-icon` - Discord social icon
  - `github-icon` - GitHub social icon
  - `x-icon` - X (Twitter) social icon
  - `social-icon` - Generic social/profile icon
  - `documentation-icon` - Documentation icon

### Source Assets
- `src/assets/hero.png` - Hero section illustration (3D isometric design)
- `src/assets/react.svg` - React logo
- `src/assets/vite.svg` - Vite logo

## Icon System

### Library
- **Lucide React** - Primary icon library

### Usage
```tsx
import { Github, Linkedin, Mail, Code2, UserRound, Menu, X } from 'lucide-react';

<Code2 className="h-5 w-5" />
<UserRound className="h-5 w-5" />
<Mail className="h-5 w-5" />
```

### Icons in Use
- `Code2` - GitHub/social links
- `UserRound` - LinkedIn/user links
- `Mail` - Email links
- `Menu`, `X` - Mobile navigation
- `Heart` - Footer attribution
- `Sun`, `Moon` - Theme toggle
- `Home` - 404 page
- `ExternalLink` - External project links
- `MapPin`, `Briefcase`, `Calendar` - About page metadata
- `Send`, `CheckCircle`, `AlertCircle`, `Loader2` - Contact form states
- `Globe` - Extensions page

## Optimization

### Current State
- No lazy loading implemented
- No srcset/responsive images
- SVG icons inline in sprite sheet

### Recommendations
- Add `loading="lazy"` to below-the-fold images
- Use `srcset` for multiple image sizes
- Prefer WebP format for photos
- Keep SVG for icons and graphics
