/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: 'var(--primary-color)' ,// as a class i use in tailwind
        secondColor: 'var(--second-color)' ,
        PrimSecColor: 'var(--PrimSec)', 
        OrangeColor: 'var(--orange)', 
        textColor: 'var(--text-color)' ,
        btnColor: 'var(--btn-color)', 
        btnTxTColor: 'var(--btn-txt-color)', 
      },
      backgroundImage: {
        navyGradient:'var(--root-body)' ,
        gradient:  'var(--gradient)' 
      },
      background: {
        BGsecondColor: 'var(--second-color)' ,
      },
      // screens: {
      //   'max-300': { 'max': '300px' },
      // },
    },
  },
  plugins: [
    require('tailwind-scrollbar'), // or require('tailwind-scrollbar') with all the defaults
  ],
}