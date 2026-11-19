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
        /* ── Sistema nuevo ── */
        brand:            '#1B4FC4',
        'brand-deep':     '#1741A6',
        night:            '#0E1B3D',
        'night-2':        '#16295C',
        paper:            '#F6F8FC',
        forest:           '#2F6B4F',
        'forest-light':   '#8FD3B0',
        'blue-light':     '#9DB8FF',
        'text-light':     '#C9D3EA',
        'text-primary':   '#2B3550',
        'text-secondary': '#5B6785',
        'site-border':    '#E1E7F3',
        'icon-blue':      '#E8EEFC',
        'icon-green':     '#E4F0EA',
        /* ── Legacy /diagnostico (no tocar) ── */
        ultramarine:  '#1E2ED8',
        sand:         '#F7F7F5',
        surface:      '#FFFFFF',
        ink:          '#121316',
        'ink-muted':  '#5D6068',
        'border-line':'#E5E5E0',
        'hero-blue':  '#EEF3FF',
        'brand-dark': '#0F2A6B',
      },
      fontFamily: {
        sans: ['"DM Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        /* Legacy /diagnostico */
        'diag-sans':  ['"Plus Jakarta Sans"', 'sans-serif'],
        'diag-serif': ['"Newsreader"', 'serif'],
        'diag-mono':  ['"JetBrains Mono"', 'monospace'],
      },
      maxWidth: {
        site: '1200px',
      },
    },
  },
  plugins: [typography],
}
