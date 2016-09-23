module.exports = function(grunt){

 grunt.initConfig({
   jshint: {
     all: ['Gruntfile.js', 'models/**/*.js', 'test/**/*.js', 'routes/**/*.js']
   }
 });

 grunt.loadNpmTasks('grunt-contrib-jshint');

 grunt.registerTask('default', ['jshint']);

};
