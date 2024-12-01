module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        agustina: ['"Agustina Regular"', 'sans-serif'], 
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        scroll: 'scroll 35s linear infinite',
        'scroll-reverse': 'scroll 35s linear infinite reverse',
      },
      colors: {
        accent: '#38bdf8',
      },
    },
  },
  variants: {
    animation: ['responsive', 'hover', 'group-hover'],
  },
  plugins: [],
};
