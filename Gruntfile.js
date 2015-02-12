module.exports = gruntConfig;

function gruntConfig(grunt) {
  var
    pkg = grunt.file.readJSON('package.json'),
    tasks = require('./tasks/grunt'),
    gruntInitConfig;

  gruntInitConfig = {
    // Set these to the appropriate directories
    jsPath: 'assets/js',
    componentsPath: 'assets/components',
    cssPath: 'assets/css',
    htmlPath: 'assets/templates',
    imagePath: 'assets/img',
    fontPath: 'assets/fonts',
    pubJsPath: 'public/js',
    pubCssPath: 'public/css',
    pubImagePath: 'public/img',
    pubFontPath: 'public/fonts'
  };

  for (var task in tasks) {
    gruntInitConfig[task] = tasks[task];
  }

  grunt.initConfig(gruntInitConfig);

  for (var dep in pkg.devDependencies) {
    if (dep !== 'grunt' && !dep.indexOf('grunt')) {
      grunt.loadNpmTasks(dep);
    }
  }

  grunt.registerTask('default', [
    'bgShell:server'
  ]);
}