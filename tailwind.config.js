/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#418EC6',
        'secondary': '#7B2049',
        'tertiary': '#1E2762',
        'quaternary': '#0B1416',
      },
      aspectRatio: {
        'video': '2/3',
      }
    },
  },
  plugins: [],
}