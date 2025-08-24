// postcss.config.cjs
module.exports = {
  plugins: [
    require('@tailwindcss/postcss')(), // ✅ now correct
    require('autoprefixer'),
  ],
};


