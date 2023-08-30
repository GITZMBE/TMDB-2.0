/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
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
            width: '166px',
            paddingLeft: '16px',
            paddingTop: '8px',
            paddingBottom: '8px',
          },
        },
        'hide-details': {
          from: { 
            width: '166px',
            paddingLeft: '16px',
            paddingTop: '8px',
            paddingBottom: '8px',
          },
          to: { 
            width: '0',
            padding: '0',
          },
        },
      },
      animation: {
        "fade-in": 'fade-in 1s ease-in-out forwards 3s',
        "fade-out": 'fade-out 1s ease-in-out forwards 3s',
        'show-details': 'show-details 100ms ease-in-out forwards 300ms',
        'hide-details': 'hide-details ease-in-out forwards',
      }
    },
  },
  plugins: [],
};
