import type { Config } from 'tailwindcss'

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
        // 'georgia': ['Georgia'],
        'georgia': ['Cambria'],
        'inter': ['Inter']
      }
    },
  },
  plugins: [],
}
export default config
