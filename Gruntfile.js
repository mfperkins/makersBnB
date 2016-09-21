module.exports = function(grunt){

 grunt.initConfig({
   jshint: {
     all: ['Gruntfile.js', 'app/models**/*.js', 'test/**/*.js']
   }
 });

 grunt.loadNpmTasks('grunt-contrib-jshint');

 grunt.registerTask('default', ['jshint']);

};
