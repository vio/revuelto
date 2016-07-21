var locals = require('./locals');

module.exports = {
  output: 'www',

  // http://jade-lang.com/api/
  jade: {
    locals: locals
  },

  // http://stylus-lang.com/docs/js.html
  stylus: {
    paths: [
      './assets/css',
      './assets/img',
    ]
  },

  // https://github.com/postcss/autoprefixer#options 
  autoprefixer: {
    browsers: ['last 3 versions']
  },

  // https://github.com/hail2u/node-css-mqpacker#options
  mqpacker: {},

  // https://github.com/hail2u/node-csswring#options
  csswring: {}
};
