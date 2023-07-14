/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors:{
      gris_lightGris: '#4A4A4A',
      white: '#ffffff',
      lightDark: '#121212',
      orange: '#FF6700',
      lightGreen: '#88cc00',
      darkGris:'#333333',
      dark:'#000000',
      lightBlues: '#55ACEE',
      blue: '#0A66C2',
      gris: '#D9D9D9',
      lightRed: '#F24E1E'
    },
    fontFamily:{
      "Libre Franklin":['Libre Franklin', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
