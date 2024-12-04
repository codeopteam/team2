/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", ],
  theme: {
    extend: {
      colors:{

      darkBlue: "#2B293D",
      yellowApp: "#FFE047",

      },

      fontFamily:{

        montserrat:[ "Monserrat", "sans-serif"],

      }


    },
  },
  plugins: [],
}

