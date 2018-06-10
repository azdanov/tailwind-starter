const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
  plugins: [
    require('tailwindcss')('./tailwind.js'),
    purgecss({
      content: ['**/*.html'],
      css: ['**/*.css'],
      whitelist: ['md:flex', 'md:items-center', 'md:mb-0', 'md:mr-4', 'md:text-left'],
        // whitelistPatterns: [/md:[\w-]+/] // Not Working
    }),
  ],
};
