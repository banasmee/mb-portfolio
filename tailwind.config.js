/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // 👇 Add CSS variables
        main: ["var(--font-quicksand)"],
        second: ["var(--font-bree)"],
      },
    },
    colors: {
      'orange': '#FFAB2B',
      'orange-hover': '#ED9F28',
      'dark': '#000',
      'turquoise': '#48B6AA',
      'turquoise-hover': '#378F86',
      'white': '#fff',
      'transparent': 'transparent',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '16rem',
        '2xl': '19rem',
      },
    }
  },
  plugins: [],
}
 