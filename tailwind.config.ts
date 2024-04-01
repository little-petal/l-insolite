import type { Config } from 'tailwindcss'
import withMT from '@material-tailwind/react/utils/withMT';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'landing-page-md': "url('/assets/images/landing-page-md.jpg')",
        'landing-page-sm': "url('/assets/images/landing-page-sm.jpg')"
      },
      fontFamily: {
        'georgia': ['Georgia'],
        'cambria': ['Cambria'],
        'inter': ['Inter'], //Fin
        'bebas': ['"Bebas Neue"'],
        'bellaza': ['Belleza'], //Fin
        'bevan': ['Bevan'],
        'cantata': ['"Cantata One"'],
        'caudex': ['Caudex'],
        'league': ['"League Gothic"'],
        'oswald': ['Oswald']
      },
      colors: {
        'sable' : '#d4cbc6',
        'stone-light' : '#e7e5e4',
        'stone-medium' : '#d6d3d1',
        'stone-dark' : '#a8a29e',
        'emerald-light' : '#a7f3d0',
        'emerald-medium' : '#6ee7b7',
        'emerald-dark' : '#059669',
      },
      textColor: {
        'sable' : '#d4cbc6',
      }
    },
  },
  plugins: [],
}
export default withMT(config);
