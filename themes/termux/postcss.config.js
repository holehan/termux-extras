module.exports = {
  plugins: [
    require('@fullhuman/postcss-purgecss')({
      content: ['themes/termux/layouts/**/*.html'],
      whitelist: [
        'highlight',
        'language-bash',
        'pre',
        'code',
        'content',
        'h3',
        'h4',
        'ul',
        'li'
      ]
    }),
    require('autoprefixer')
  ]
};
