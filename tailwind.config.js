/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'test',
        'secondary': 'test',
        'accent': 'test',
        'surface': 'test',
        'surface-container': '#eceeec',
        'surface-container-low': '#f2f4f2',
        'surface-container-lowest': '#ffffff',
        'on-surface': '#191c1b',
        'on-surface-variant': '#3f4947',
        'outline': '#707977',
      },
      fontFamily: {
        headline: ['var(--font-headline)', 'Manrope', 'sans-serif'],
        body: ['var(--font-body)', 'Inter', 'sans-serif'],
        label: ['var(--font-body)', 'Inter', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.125rem',
        lg: '0.25rem',
        xl: '0.5rem',
        full: '0.75rem',
      },
    },
  },
  plugins: [],
};