import type { Config } from 'tailwindcss';

import { backgroundImage, borderRadius, colors, zIndex } from './src/styles';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors,
      zIndex,
      borderRadius,
      backgroundImage,
      fontFamily: {
        alkatra: ['Alkatra', 'system-ui'],
      },
    },
  },
  plugins: [],
};
export default config;
