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
        ink: '#0f0f0f',
        paper: '#f5f2ee',
        warm: '#e8e2d9',
        muted: '#8c8478',
        accent: '#c96a3a',
        'accent-light': '#e8b49a',
        // New palette
        pearl: '#faf9f7',
        indigo: '#4a5568',
        'indigo-dark': '#2d3748',
        rust: '#c96a3a',
        'rust-dark': '#9c4f26',
        'tag-indigo-bg': '#e8eaf0',
        'tag-rust-bg': '#f5e6de',
      },
      letterSpacing: {
        widest: '0.2em',
      },
    },
  },
  plugins: [],
}
