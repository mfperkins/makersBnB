// module.exports = function(grunt){
//
//  grunt.initConfig({
//    jshint: {
//      all: ['Gruntfile.js', 'src/**/*.js', 'spec/**/*.js']
//    }
//  });
//
//  grunt.loadNpmTasks('grunt-contrib-jshint');
//
//  grunt.registerTask('default', ['jshint']);
//
// };

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    webdriver: {
      test: {
        configFile: './test/wdio.conf.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-webdriver');

  grunt.registerTask('default', ['webdriver']);
};
