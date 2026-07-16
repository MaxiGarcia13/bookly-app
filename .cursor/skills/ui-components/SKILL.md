---
name: ui-components
description: >-
  Styling rules and shared UI component patterns for bookly-app. Use when writing
  or editing components under src/components, adding variants, className merges,
  or deciding how to structure reusable UI.
---

# UI components

NativeWind setup lives in the `nativewind` skill. This skill covers how to style and structure UI.

## Styling rules

1. Prefer Tailwind utility classes on RN primitives (`View`, `Text`, `Pressable`, …)
2. Merge overrides with `cn` from `@maxigarcia/js-utils`
3. Use interactive variants NativeWind supports: `hover:`, `active:`
4. Keep visual tokens in class strings; extend `theme.extend` in `tailwind.config.js` when adding shared colors/spacing — don’t hardcode one-off hex in many places without a token

## Do not

- Use web-only Tailwind (e.g. arbitrary complex CSS grid) without checking RN support
- Style with inline `style={{}}` when a utility class exists
- Introduce `StyleSheet.create` unless a library API requires a style object

## Component pattern

Match `src/components/button.tsx`:

- Default export, lowercase filename
- Place shared UI in `src/components/`
- Extend the underlying RN prop type (`PressableProps`, etc.)
- Optional `variant` maps of class strings
- Accept `className` and merge onto the root with `cn`
- Separate text/container variant maps when needed

```tsx
import type { PressableProps } from 'react-native';
import { cn } from '@maxigarcia/js-utils';
import { Pressable, Text } from 'react-native';

const variants = {
  primary: 'bg-blue-500 active:bg-blue-700',
};

interface ButtonProps extends PressableProps {
  children: React.ReactNode;
  variant?: keyof typeof variants;
}

export default function Button({
  variant = 'primary',
  children,
  className,
  ...rest
}: ButtonProps) {
  return (
    <Pressable className={cn('rounded-md px-4 py-3', variants[variant], className)} {...rest}>
      <Text className="text-center font-semibold text-white">{children}</Text>
    </Pressable>
  );
}
```
