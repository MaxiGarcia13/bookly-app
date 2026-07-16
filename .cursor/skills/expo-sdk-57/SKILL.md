---
name: expo-sdk-57
description: >-
  Expo SDK 57 and React Native conventions for bookly-app. Use when writing app
  code, installing Expo packages, configuring Expo/Metro/Babel, or when unsure
  about Expo APIs for this project.
---

# Expo SDK 57

This project targets **Expo SDK 57** (`expo@~57.0.4`) with **React Native 0.86** and **React 19.2**.

## Docs

Follow `AGENTS.md`: versioned SDK 57 docs only (never unversioned).

## Project layout

| Path | Purpose |
|------|---------|
| `src/app/` | Expo Router screens & layouts |
| `src/components/` | Shared UI components |
| `assets/` | Images, icons, splash |
| `global.css` | Tailwind entry (imported once in root layout) |

## Path aliases

Use `@/` imports (see `tsconfig.json`):

```ts
import Button from '@/components/button';
import '@/global.css';
```

- `@/*` → `src/*`
- `@/assets/*` → `assets/*`
- `@/global.css` → `global.css`

## Packages

- Install Expo-compatible versions with: `npx expo install <pkg>`
- Prefer Expo modules already in the stack (`expo-image`, `expo-linking`, `expo-font`, etc.) over ad-hoc RN alternatives when equivalent
- `@expo/ui` is available for native UI primitives when appropriate

## Experiments (app.json)

- `typedRoutes: true` — use typed `Href` / router helpers from `expo-router`
- `reactCompiler: true` — avoid unnecessary `useMemo` / `useCallback`; write plain React

## TypeScript & lint

- `strict: true`
- Single quotes, default exports for screens/components (match existing files)
- Lint: `npm run lint` / `npm run lint:fix` (`@maxigarcia/eslint-config`)

## Scripts

- `npm start` — Expo dev server (`--clear`)
- `npm run start:ios` / `start:android` / `start:web`
