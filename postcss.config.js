/* eslint-disable */

module.exports = {
  map: { inline: true },
  plugins: [
    require('postcss-import-ext-glob'),
    require('postcss-import'),
    require('postcss-custom-properties'),
    require('cssnano')({
      preset: ['default', {
        colormin: false
      }]
    }),
  ]
};
