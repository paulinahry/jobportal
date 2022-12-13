/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FCFBF7',
        textBlack : '#151515',
        lightGreen: '#84A98C',
        darkGreen: '#52796F',
        darkGreen: '#52796F',
        lightBeige: '#EDE9E0',  // details
        darkBeige: '#EEECE5',   // footer
        gray: '#515151',        // text
        lightGray: '#BDBDBD',   // form elemente 
        transparent: 'transparent'

      },
      // fontFamily: {
      //   inter: ["Inter var, sans-serif"]
      // }
    },
  },
  plugins: [],
}