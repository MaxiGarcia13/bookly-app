/** Runtime palette values for APIs that need a concrete color (e.g. SVG stroke). */
export const palette = {
  background: { light: '#f3f0fa', dark: '#0c0a14' },
  foreground: { light: '#100e18', dark: '#f5f1ff' },
  muted: { light: '#e8e3f4', dark: '#1a1628' },
  mutedForeground: { light: '#3f3655', dark: '#b8b0d0' },
  surface: { light: '#ffffff', dark: 'rgba(24, 20, 38, 0.82)' },
  surfaceBorder: { light: '#b8a8e0', dark: 'rgba(183, 159, 255, 0.32)' },
  accent: '#b794ff',
  accentForeground: '#0c0a14',
  accentHover: '#c9aeff',
  glow: { light: 'rgba(183, 159, 255, 0.35)', dark: 'rgba(183, 159, 255, 0.42)' },
} as const;
