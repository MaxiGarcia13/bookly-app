---
name: nativewind
description: >-
  NativeWind v4 and Tailwind tooling for bookly-app. Use when configuring
  NativeWind/Tailwind/Metro/Babel, global.css, or diagnosing why className is
  missing. For styling rules and UI component patterns, use the ui-components skill.
---

# NativeWind (v4)

Styling is **NativeWind v4** + **Tailwind CSS 3** via `className`.

For how to write classes and shared components, use the `ui-components` skill.

## Setup (already wired)

- `global.css` — `@tailwind` layers; imported only in `src/app/_layout.tsx`
- `metro.config.js` — `withNativeWind(..., { input: './global.css' })`
- `babel.config.js` — `jsxImportSource: 'nativewind'` + `nativewind/babel`
- `tailwind.config.js` — `content: ['./src/**/*.{js,jsx,ts,tsx}']`, `nativewind/preset`
- Types: `nativewind-env.d.ts`

Only put classNames on files under `src/` (Tailwind content paths).

## Do not

- Import `global.css` outside the root layout
- Put new UI under a path outside `src/` (classes won’t be scanned)
