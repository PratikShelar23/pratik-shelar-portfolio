/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customgray: ' #FD5C01', 
        cumtomtextcolor: '#1E212F',
        custombackground : '#A6BBCC',
        linecolor : '#FCEDE8',
        ballcolor : '#F77321 ',
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"], 
        bamboy: ["var(--font-bamboy)", "sans-serif"], 
        bamboyCondensed: ["var(--font-bamboy-condensed)", "sans-serif"],
        Montserrat :["var(--font-Montserrat)", "sans-serif"],
        Montserrat_medium :["var(--font-Montserrat-medium)", "sans-serif"],
      },
      animation: {
        scroll: 'scrollLoop 30s linear infinite',
        marquee: "marquee 15s linear infinite",
      },
      keyframes: {
        scrollLoop: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        textShadow: {
        outline: '0 0 2px black', // Outline effect
        'outline-blur': '0 0 3px black', // Outline with slight blur
      },
       marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.scrollbar-hide::-webkit-scrollbar': {
          display: 'none',
        },
        '.scrollbar-hide': {
          scrollbarWidth: 'none', // For Firefox
        },
      });
    },
    require('tailwind-scrollbar'),
  ],
};
