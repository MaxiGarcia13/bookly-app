import { vars } from 'nativewind';
import { useColorScheme } from 'react-native';
import { palette } from '@/hooks/theme/palette';

export type ColorScheme = 'light' | 'dark';

const themes = {
  light: vars({
    '--palette-background': palette.background.light,
    '--palette-foreground': palette.foreground.light,
    '--palette-muted': palette.muted.light,
    '--palette-muted-foreground': palette.mutedForeground.light,
    '--palette-surface': palette.surface.light,
    '--palette-surface-border': palette.surfaceBorder.light,
    '--palette-accent': palette.accent,
    '--palette-accent-foreground': palette.accentForeground,
    '--palette-accent-hover': palette.accentHover,
    '--palette-glow': palette.glow.light,
  }),
  dark: vars({
    '--palette-background': palette.background.dark,
    '--palette-foreground': palette.foreground.dark,
    '--palette-muted': palette.muted.dark,
    '--palette-muted-foreground': palette.mutedForeground.dark,
    '--palette-surface': palette.surface.dark,
    '--palette-surface-border': palette.surfaceBorder.dark,
    '--palette-accent': palette.accent,
    '--palette-accent-foreground': palette.accentForeground,
    '--palette-accent-hover': palette.accentHover,
    '--palette-glow': palette.glow.dark,
  }),
} as const;

function resolveColors(scheme: ColorScheme) {
  return {
    background: palette.background[scheme],
    foreground: palette.foreground[scheme],
    muted: palette.muted[scheme],
    mutedForeground: palette.mutedForeground[scheme],
    surface: palette.surface[scheme],
    surfaceBorder: palette.surfaceBorder[scheme],
    accent: palette.accent,
    accentForeground: palette.accentForeground,
    accentHover: palette.accentHover,
    glow: palette.glow[scheme],
  };
}

export function useTheme() {
  const scheme: ColorScheme = useColorScheme() === 'dark' ? 'dark' : 'light';

  return {
    scheme,
    isDark: scheme === 'dark',
    vars: themes[scheme],
    colors: resolveColors(scheme),
  };
}
