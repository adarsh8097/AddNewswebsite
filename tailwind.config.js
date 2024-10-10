/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      720 :'720px',
      colors: {
        customGray: '#303030', // Add your custom color here
        customYellow:'#F8EF03',
      },
       backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #34880D 0%, #20490C 100%)',
      },
      backgroundColor:{
        customgreen:'#ECF4FF',
        customblue:"#094998",
      }
    },
    
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-none': {
          '::-webkit-scrollbar': { display: 'none' }, /* Chrome, Safari, and Edge */
          '-ms-overflow-style': 'none',              /* Internet Explorer 10+ */
          'scrollbar-width': 'none',                 /* Firefox */
        },
      });
    },
  ],
};
