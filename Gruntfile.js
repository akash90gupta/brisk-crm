module.exports = function(grunt) {
  grunt.initConfig({

    pkg : grunt.file.readJSON('package.json'),
    sass : {
      dist: {
        files: {
          'css/style.css' : 'css/sass/style.scss'
        }
      }
    },
    watch: {
      css : {
        files : '**/*.scss',
        tasks : ['sass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['sass', 'watch']);
}