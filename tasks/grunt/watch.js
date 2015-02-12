module.exports = {
  jsx: {
    files: ['<%= jsPath %>/**/*.jsx'],
    tasks: ['bgShell:jsx']
  },

  comments: {
    files: ['<%= jsPath %>/components/comments/**/*.js'],
    tasks: ['bgShell:comments']
  },

  styles: {
    files: ['<%= cssPath %>/**/*.scss'],
    tasks: ['sass']
  }
};