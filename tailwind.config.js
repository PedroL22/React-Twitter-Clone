/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        twitter: '#1d9bf0',
      },
    },
    screens: {
      '2xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }

      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '767px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '639px' },
      // => @media (max-width: 639px) { ... }

      '2xl-min': { min: '1536px' },
      // => @media (min-width: 1536px) { ... }

      'xl-min': { min: '1280px' },
      // => @media (min-width: 1280px) { ... }

      'lg-min': { min: '1024px' },
      // => @media (min-width: 1024px) { ... }

      'md-min': { min: '768px' },
      // => @media (min-width: 768px) { ... }

      'sm-min': { min: '640px' },
      // => @media (min-width: 640px) { ... }

      xlh: { raw: '(max-height: 700px)' },
    },
  },
  plugins: [],
}
