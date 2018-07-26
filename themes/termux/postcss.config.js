module.exports = {
  plugins: [
    require('@fullhuman/postcss-purgecss')({
      content: ['themes/termux/layouts/**/*.html'],
      whitelist: ['highlight', 'language-bash', 'pre', 'code']
    }),
    require('autoprefixer')
  ]
};
