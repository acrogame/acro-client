module.exports = function(grunt) {

  /**
   * Grunt project configuration
   */
  
  grunt.initConfig({
    
    /**
     * Read from package.json
     */
    
    /**
     * Clean-up (delete) files
     */
    
    clean: {
      sass: ['src/app/assets/style/css/*']
    },
    
    pkg: grunt.file.readJSON('package.json'),
    
    /**
     * Transpile SASS to CSS
     */
    
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'src/app/assets/style',
          src: ['*.scss'],
          dest: 'src/app/assets/style/css',
          ext: '.css'
        }]
      }
    }
  });

  
  /**
   * Load Grunt tasks
   */
  
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-sass');

  /**
   * Register Grunt tasks
   */
  
  grunt.registerTask('build-sass', ['clean:sass', 'sass:dist']);
};