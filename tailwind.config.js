/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: "#2B293D",
        yellowApp: "#FFE047",
        lightGray: "2B293D",
        darkGray: "#5A5A5A",
        lightGray: "#2B293D",
        purple: "#4539B4"
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"], //para llamarlo dentro de la etiqueta de tailwind de debe colocar font-montserrat
        openSans: ["Open Sans", "sans-serif"], //para llamarlo dentro de la etiqueta de tailwind  de debe colocar font-openSanz
        lalezar: ["Lalezar", "system-ui"], //para llamarlo dentro de la etiqueta de tailwind de debe colocar font-lalezar
      },
    },
  },
  plugins: [],
};
