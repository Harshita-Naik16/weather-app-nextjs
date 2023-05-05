/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      spacing: {
        '166': '41.5rem',
        '253': '63rem'
      },
      
      colors:{
        'cuscyan': '#90D9E0',
        'cusblue': '#5460E6',
      },
      minWidth: {
        '80': '300px',
      },
    },
  },
  plugins: [],
}
