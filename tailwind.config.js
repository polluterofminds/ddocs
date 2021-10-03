const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        mono: ["'Ubunto Mono'", ...defaultTheme.fontFamily.mono]
      },
      backgroundColor: {
        primaryPink: "#E200D9", 
        secondaryPink: "#FFE455"
      }, 
      color: {
        primaryPink: "#E200D9", 
        secondaryPink: "#FFE455"
      }, 
      gradientColorStops: {
        primaryPink: "#E200D9", 
        secondaryPink: "#FFE455"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
