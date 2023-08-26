/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#418EC6",
        secondary: "#7B2049",
        tertiary: "#1E2762",
        quaternary: "#0B1416",
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
        }
      },
      animation: {
        "fade-in": 'fade-in 1s ease-in-out forwards 3s',
        "fade-out": 'fade-out 1s ease-in-out forwards 3s',
      }
    },
  },
  plugins: [],
};
