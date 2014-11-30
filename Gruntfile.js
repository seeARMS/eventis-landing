module.exports = function(grunt) {
  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          "assets/css/main.css": "assets/less/main.less"
        }
      },

    },
    jshint: {
       all: ['Gruntfile.js', 'assets/js/*.js']
    },
    watch: {
      styles: {
        files: ['assets/less/*.less', '<%= jshint.all %>'],
        tasks: ['less', 'jshint'],
        options: {
          spawn: false,
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['watch']);
};
