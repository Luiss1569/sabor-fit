/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors:{
      gris_claro: '#4A4A4A',
      branco: '#ffffff',
      quase_negro: '#121212',
      laranga: '#FF6700',
      verde_claro: '#88cc00',
      gris_escuro:'#333333',
      negro:'#000000',
      azul_claro: '#55ACEE',
      azul: '#0A66C2',
      gris: '#D9D9D9',
      quase_vermelho: '#F24E1E'
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
