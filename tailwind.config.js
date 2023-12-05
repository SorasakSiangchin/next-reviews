/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{jsx,tsx}', 
    './components/**/*.{jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily : {
        exo_2 : ['var(--font-exo_2)' , 'sans-serif'] ,
        orbitron : ['var(--font-orbitron)' , 'sans-serif']
      }
    },
  },
  //โปรแกรมเสริมชนิดหนึ่ง ที่จะเพิ่มความสามารถให้กับโปรแกรมหลัก
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

