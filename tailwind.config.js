/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      colors: {
        // Pearl & Indigo Rust — AA verified
        pearl:   '#f5f5f3',   // page background
        white:   '#ffffff',   // card background
        ink:     '#1e2d3d',   // primary text (AAA on pearl)
        indigo:  '#2b4175',   // buttons, italic headings, links (AA on pearl)
        rust:    '#a85f35',   // accents, CTAs, labels (AA Large — use 18px+ only)
        'rust-dark': '#964f28', // rust on light tag backgrounds (AA small text)
        muted:   '#5a6472',   // captions, meta, secondary text (AA on pearl)
        warm:    '#d8dce3',   // borders, dividers
        // Tag backgrounds
        'tag-indigo-bg': '#dce5f2',
        'tag-rust-bg':   '#fceee6',
      },
      letterSpacing: {
        widest: '0.2em',
      },
      borderRadius: {
        sm: '2px',
        md: '4px',
      },
    },
  },
  plugins: [],
}
