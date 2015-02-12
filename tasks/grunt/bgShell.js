module.exports = {
  // For starting the server
  server: {
    cmd: 'NODE_ENV=localhost nodemon ./bin/www'
  },

  jsx: {
    cmd: 'jsx -x jsx <%= jsPath %>/components/ <%= jsPath %>/components/'
  },

  comments: {
    cmd: 'browserify <%= jsPath %>/components/comments/comments.js -o <%= pubJsPath %>/comments.bundle.js'
  }
};