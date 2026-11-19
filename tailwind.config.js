import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ultramarine: '#1E2ED8',
        sand: '#F7F7F5',
        surface: '#FFFFFF',
        ink: '#121316',
        'ink-muted': '#5D6068',
        'border-line': '#E5E5E0',
        'hero-blue': '#EEF3FF',
        'brand-dark': '#0F2A6B',
      },
      fontFamily: {
        'diag-sans': ['"Plus Jakarta Sans"', 'sans-serif'],
        'diag-serif': ['"Newsreader"', 'serif'],
        'diag-mono': ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [typography],
}
