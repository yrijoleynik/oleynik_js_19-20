module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['js/src/*.js'],
        dest: 'js/dist/script.main.js'
      }  
    },	
	uglify: {
		dist: {
		src: ['js/dist/script.main.js'],
		dest: 'js/dist/script.main.js'
		}
	},
    sass: {
        dist: {
        files: [{
        expand: true,
        cwd: 'styles',
        src: ['*.scss'],
        dest: 'css',
        ext: '.css'
           }]
        }
    },
    cssmin: {
        target: {
            files: [{
            expand: true,
            cwd: 'css',
            src: ['*.css', '!*.min.css'],
            dest: 'css',
            ext: '.min.css'
            }]
        }
    },	
    watch: {
        sass: {
        files: ['styles/*.scss'],
        tasks: ['sass'],
        },
	}	
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify'); 
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  
  grunt.registerTask('default', ['sass']);

};
