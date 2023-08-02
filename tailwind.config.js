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
        'twitter-chirp': ['TwitterChirp', 'sans-serif'],
        'twitter-chirp-extended': ['TwitterChirpExtendedHeavy', 'sans-serif'],
      },
      colors: {
        'primary-blue': '#1D9BF0',
        'primary-dark-blue': '#2795D9',
        'primary-light-blue': '#EFF9FF',
        'secondary-black': '#14171A',
        'secondary-light-400': '#657786',
        'secondary-light-300': '#AAB8C2',
        'secondary-light-200': '#E1E8ED',
        'secondary-light-100': '#F5F8FA',
        'secondary-light': '#E7E9EA',
        'secondary-white': '#FFF',
      },
    },
  },
  plugins: [],
}
