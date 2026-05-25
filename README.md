# Alchie Tagudin — Portfolio

A modern, minimal portfolio website built with React + TypeScript + Tailwind CSS + Firebase.

## 🚀 Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React 18, TypeScript, Vite |
| **Styling** | Tailwind CSS, Lucide Icons |
| **Routing** | React Router v6 |
| **Backend** | Firebase (Hosting + Functions + Firestore) |
| **Contact Form** | Firebase Function → Slack Webhook |

## 📁 Project Structure

```
alchie-portfolio/
├── src/
│   ├── components/     # Reusable UI components
│   │   ├── Layout.tsx     # Main layout with navbar + footer
│   │   ├── Navbar.tsx     # Responsive navigation
│   │   ├── Footer.tsx     # Footer with social links
│   │   ├── ThemeToggle.tsx  # Dark mode toggle
│   │   ├── ScrollReveal.tsx # Animated reveal wrapper
│   │   ├── ProjectCard.tsx  # Project card component
│   │   └── ScrollToTop.tsx  # Route-based scroll reset
│   ├── pages/
│   │   ├── Home.tsx        # Landing page
│   │   ├── About.tsx       # About + experience + timeline
│   │   ├── Projects.tsx    # All projects
│   │   ├── Extensions.tsx  # Chrome extensions showcase
│   │   └── Contact.tsx     # Contact form
│   ├── data/
│   │   └── portfolio.ts    # Content data (projects, skills, etc.)
│   ├── lib/
│   │   └── firebase.ts     # Firebase client config
│   ├── App.tsx             # Routes setup
│   ├── main.tsx            # Entry point
│   └── index.css           # Tailwind + global styles
├── functions/
│   ├── index.js            # Firebase Cloud Function (Slack integration)
│   └── package.json
├── .env.example            # Environment variables template
├── tailwind.config.js
├── postcss.config.js
├── vite.config.ts
└── tsconfig.json
```

## 🛠️ Getting Started

### 1. Clone and install

```bash
git clone <your-repo-url>
cd alchie-portfolio
npm install
```

### 2. Set up Firebase

1. Create a project at [console.firebase.google.com](https://console.firebase.google.com/)
2. Enable **Firestore** (for storing contact messages)
3. Enable **Cloud Functions** (upgrade to Blaze plan — free tier works)
4. Enable **Firebase Hosting**
5. Copy your Firebase config from Project Settings → General → Your apps → Web app
6. Create a `.env` file:
   ```env
   VITE_FIREBASE_API_KEY=your-api-key
   VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your-project-id
   VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
   VITE_FIREBASE_APP_ID=your-app-id
   ```

### 3. Set up Slack Webhook

1. Create a Slack app at [api.slack.com/apps](https://api.slack.com/apps)
2. Enable **Incoming Webhooks** and create a webhook URL
3. Deploy the function and set the webhook secret:
   ```bash
   cd functions && npm install
   npx firebase functions:secrets:set SLACK_WEBHOOK_URL
   ```

### 4. Deploy

```bash
# Firebase
npm install -g firebase-tools
firebase login
firebase init hosting functions

# Build and deploy
npm run build
firebase deploy
```

## 📄 Pages

| Route | Page |
|---|---|
| `/` | Home — Hero, featured projects, skills, CTA |
| `/about` | About — Bio, experience, timeline, all skills |
| `/projects` | Projects — Full project grid |
| `/extensions` | Extensions — Chrome extension showcase |
| `/contact` | Contact — Form with Slack integration |

## 🎨 Customization

All portfolio content lives in `src/data/portfolio.ts`:
- **Projects**: Add/modify project entries
- **Extensions**: Add/modify Chrome extension entries
- **Skills**: Add/modify skills/tags
- **Social Links**: Update GitHub, LinkedIn, email

Colors can be customized in `tailwind.config.js` under `colors.primary` and `colors.accent`.

---

Built with ❤️ by Hermes Agent
