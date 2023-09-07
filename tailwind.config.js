/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
      },
      spacing: {
        headerHeight: '60px',
        posterWidth: '150px',
      },
      colors: {
        primary: "#0D1C28",
        secondary: "#173248",
        tertiary: "#F5F9FC",
        quaternary: "#418EC6",
      },
      aspectRatio: {
        poster: "2/3",
      },
      keyframes: {
        "fade-in": {
          from: { 
            opacity: "0",
          },
          to: { 
            opacity: 1,
          },
        },
        "fade-out": {
          from: { 
            opacity: 1,
          },
          to: { 
            opacity: "0",
          },
        },
        'show-details': {
          from: { 
            width: '0',
            padding: '0',
          },
          to: { 
            width: '182px',
            paddingLeft: '16px',
            paddingRight: '16px',
            paddingTop: '8px',
            paddingBottom: '8px',
          },
        },
        'hide-details': {
          from: { 
            width: '182px',
            paddingLeft: '16px',
            paddingRight: '16px',
            paddingTop: '8px',
            paddingBottom: '8px',
          },
          to: { 
            width: '0',
            padding: '0',
          },
        },
        'show-menu': {
          from: {
            width: 0,
          },
          to: {
            width: '100vw',
            paddingLeft: '1rem',
            paddingRight: '1rem',
          }
        },
        'hide-menu': {
          from: {
            width: '100vw',
          },
          to: {
            width: 0,
            paddingLeft: 0,
            paddingRight: 0,
          }
        }
      },
      animation: {
        "fade-in": 'fade-in 1s ease-in-out forwards 3s',
        "fade-out": 'fade-out 1s ease-in-out forwards 3s',
        'show-details': 'show-details 100ms ease-in-out forwards 300ms',
        'hide-details': 'hide-details ease-in-out forwards',
        'show-menu': 'show-menu ease-in-out forwards 100ms',
        'hide-menu': 'hide-menu ease-in-out forwards 100ms',
      }
    },
  },
  plugins: [],
};
