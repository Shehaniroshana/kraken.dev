# Kraken App

> A modern marketing site built with Next.js, Three.js and Tailwind CSS showcasing an interactive 3D/UX experience.

## Quick Start

Prerequisites:
- Node.js 18+ (recommended)
- pnpm (the repository uses pnpm lockfile)

Install dependencies:

```bash
pnpm install
```

Run development server:

```bash
pnpm dev
```

Build for production:

```bash
pnpm build
pnpm start
```

Lint:

```bash
pnpm lint
```

## Project Structure (high level)

- `app/` — Next.js App Router pages and global styles
- `components/` — UI primitives, 3D scene components and sections
- `ui/` — small UI widgets (buttons, nav, effects)
- `three/` — three.js react components and scenes
- `hooks/` — React hooks
- `lib/` — utilities and actions
- `assets/` — static assets

## Scripts

The important scripts from `package.json`:

- `dev` — run Next.js in development mode
- `build` — create a production build
- `start` — run the production server
- `lint` — run ESLint

## Tech Stack

- Next.js (App Router)
- React 19
- Three.js with `@react-three/fiber` and `@react-three/drei`
- Tailwind CSS
- TypeScript

## Notes

- This repository uses `pnpm` (see `pnpm-lock.yaml`). If you prefer npm or yarn, adjust install commands accordingly.
- The `app/` directory contains route-based pages; inspect `components/sections` and `three/` for scene and UI composition.
- The `app/` directory contains route-based pages; inspect `components/sections` and `three/` for scene and UI composition.

## Contributing

If you'd like help improving this README or adding developer docs, tell me what you'd like added (environment variables, deployment steps, testing instructions) and I can update it.

---
Generated on 2026-05-29 by an automated README update.

