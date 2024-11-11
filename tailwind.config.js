/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      height: {
        'half-screen': '50vh'
      },
      minHeight: {
        'half-screen': '50vh'
      }
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.link': {
          '@apply border-b-2 border-dotted border-b-cyan-500 hover:border-solid': {},
        },
        ".scrollbar-hidden::-webkit-scrollbar": {
          display: "none",
        },

        ".scrollbar-hidden": {
          "scrollbar-width": "none" /* Firefox */,
          "-ms-overflow-style": "none" /* IE and Edge */,
        },
      });
    },
  ],
}

