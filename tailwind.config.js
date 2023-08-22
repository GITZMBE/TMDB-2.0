/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#418EC6',
        'secondary': '#7B2049',
        'tertiary': '#1E2762',
      },
      aspectRatio: {
        'video': '2/3',
      }
    },
  },
  plugins: [],
}