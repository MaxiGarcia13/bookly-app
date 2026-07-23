/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        background: 'var(--palette-background)',
        foreground: 'var(--palette-foreground)',
        muted: {
          DEFAULT: 'var(--palette-muted)',
          foreground: 'var(--palette-muted-foreground)',
        },
        surface: {
          DEFAULT: 'var(--palette-surface)',
          border: 'var(--palette-surface-border)',
        },
        accent: {
          DEFAULT: 'var(--palette-accent)',
          foreground: 'var(--palette-accent-foreground)',
          hover: 'var(--palette-accent-hover)',
        },
        glow: 'var(--palette-glow)',
      },
    },
  },
  plugins: [],
};
