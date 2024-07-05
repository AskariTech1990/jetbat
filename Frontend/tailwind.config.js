/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backdropBlur: {
        'none': 'none',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
        '3xl': '36px',
      },
      backdropBrightness: {
        '0': '0',
        '50': '.5',
        '75': '.75',
        '100': '1',
        '125': '1.25',
        '150': '1.5',
        '200': '2',
      },
      backdropContrast: {
        '0': '0',
        '50': '.5',
        '75': '.75',
        '100': '1',
        '125': '1.25',
        '150': '1.5',
        '200': '2',
      },
      backdropGrayscale: {
        '0': '0',
        '50': '.5',
        '100': '1',
      },
      backdropHueRotate: {
        '0': '0deg',
        '15': '15deg',
        '30': '30deg',
        '60': '60deg',
      },
      backdropInvert: {
        '0': '0',
        '100': '1',
      },
      backdropOpacity: {
        '0': '0',
        '5': '0.05',
        '10': '0.10',
        '20': '0.20',
        '25': '0.25',
        '30': '0.30',
        '40': '0.40',
        '50': '0.50',
        '60': '0.60',
        '70': '0.70',
        '75': '0.75',
        '80': '0.80',
        '90': '0.90',
        '95': '0.95',
        '100': '1',
      },
      backdropSaturate: {
        '0': '0',
        '50': '.5',
        '100': '1',
        '150': '1.5',
        '200': '2',
      },
      backdropSepia: {
        '0': '0',
        '50': '.5',
        '100': '1',
      },
    },
  },
  plugins: [],
};
