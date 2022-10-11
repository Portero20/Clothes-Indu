/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      screens:{

        'sm':{max:'480px'},
        'xl': {max:'1370px'},
        'lg': {max:'1290px'},
        'md': {max:'898px'},
        'xs':{min:'280px',max:'454px'}

      }

    },
  },
  plugins: [require("daisyui")],
}
