/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        'primary_background': '#001a2c',
        'secondary_background' : '#002945',
        'primary_text':'#ffff'
      },
      fontFamily : {
        dosis : ['Dosis']
      },
      fontWeight : {
        medium : 500,
        extralight : 200
      }
    },
  },
  plugins: [],
}

