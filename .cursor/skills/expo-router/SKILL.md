---
name: expo-router
description: >-
  Expo Router file-based navigation for bookly-app. Use when adding or editing
  screens, layouts, links, navigation, routes, or deep links under src/app.
---

# Expo Router

File-based routing lives in **`src/app/`** (not a root `app/` directory). Entry: `expo-router/entry`. Scheme: `bookly`.

## Docs

Router APIs: SDK 57 Expo Router section per `AGENTS.md` (versioned docs only).

## File conventions

| File | Role |
|------|------|
| `src/app/_layout.tsx` | Root layout — import `@/global.css` here once; wrap with `Stack` / tabs as needed |
| `src/app/index.tsx` | Route `/` |
| `src/app/<name>.tsx` | Route `/<name>` |
| `src/app/<name>/index.tsx` | Route `/<name>` (segment folder) |
| `src/app/<name>/_layout.tsx` | Nested layout for that segment |

Default-export each route/layout component.

## Root layout pattern

Keep CSS import in the root layout only:

```tsx
import { Stack } from 'expo-router';
import '@/global.css';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        contentStyle: { flex: 1 },
      }}
    />
  );
}
```

## Navigation

- `typedRoutes` is enabled — prefer typed hrefs from `expo-router` (`Link`, `router.push`, `Href`)
- Use `Stack` from `expo-router` (already in root); add nested stacks/tabs only when the IA needs them
- Screen UI goes in route files; reusable chrome goes in `src/components/`

## Screen pattern

```tsx
import { View, Text } from 'react-native';
import Button from '@/components/button';

export default function ScreenName() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-2xl font-bold">Title</Text>
      <Button onPress={() => {}}>Action</Button>
    </View>
  );
}
```

## Do not

- Create a top-level `app/` directory — routes stay under `src/app/`
- Re-import `global.css` in nested layouts or screens
- Bypass the router with ad-hoc navigation libraries
