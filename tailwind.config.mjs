/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,md,mdx,ts,tsx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Accent is intentionally NOT GitLab orange (#FC6D26) to avoid brand confusion.
        accent: {
          50: '#e6f7f5',
          100: '#b3e6e0',
          500: '#00857c',
          600: '#006b63',
          700: '#00524b',
        },
      },
      fontFamily: {
        sans: [
          '"Hiragino Kaku Gothic ProN"',
          '"Noto Sans JP"',
          'system-ui',
          '-apple-system',
          'sans-serif',
        ],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: {
        prose: '72ch',
      },
    },
  },
  plugins: [],
};
