const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');
const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
    flowbite.content({ base: '../../' }),
  ],
  theme: {
    container: {
      padding: {
        lg: '4rem',
      }
    },
    extend: {
      screens: {
        'xs': '375px',
      },
      colors: {
        'primary': "var(--primary)",
        'primary-contrast': "var(--primary-contrast)",
        'accent': "var(--accent)",
        'accent-contrast': "var(--accent-contrast)",
        'secondary': "var(--secondary)",
        'secondary-contrast': "var(--secondary-contrast)",

        'neutral-darkest': "var(--neutral-darkest)",
        'neutral-dark': "var(--neutral-dark)",
        'neutral': "var(--neutral)",
        'neutral-light': "var(--neutral-light)"
      },
    },
    fontFamily: {
      'sans': ['Poppins'],
      serif: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [flowbite.plugin({ base: '../../' }),],
};
