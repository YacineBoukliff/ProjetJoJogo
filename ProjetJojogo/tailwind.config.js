/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.html', 
  ],
  theme: {
    extend: {
      backgroundImage: {
        radialgradient: 'radial-gradient(circle at 50% 92%, rgba(15, 20, 218, 1), rgba(193, 185, 186, 1))',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [ "dark", "light" ],
  },
  darkMode: 'class',  
}
