// const { default: fluid } = require('fluid-tailwind');
import fluid, {extract, screens, fontSize} from 'fluid-tailwind';
import containerQueries from '@tailwindcss/container-queries';


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    files: ['./src/**/*.{js,jsx,ts,tsx}', 
    './index.html'],
    extract
  },
  theme: {
    extend: {
      containers: {
        '2xs': '61.25rem',
      },
    },
  }, screens, fontSize,
  plugins: [
    fluid,
    containerQueries,
  ],
}

