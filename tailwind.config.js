const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    './public/**/*.html',
    './src/**/*.vue',
  ],
    theme: {
        extend: {
            colors: {
                primary: '#10BEC8',
                primaryactive: '#15cbd4'
            }
        }
  },
  variants: {},
  plugins: [],
};