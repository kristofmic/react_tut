module.exports = {
  dev: {
    options: {
      style: 'expanded'
    },
    files: {
      '<%= pubCssPath %>/main.css': '<%= cssPath %>/main.scss'
    }
  }
};