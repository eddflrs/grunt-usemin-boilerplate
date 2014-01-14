module.exports = function( grunt ) {

  'use strict';

  require( 'load-grunt-tasks' )( grunt );

  grunt.initConfig( {

    useminPrepare: {
      html: 'index.html',
      options: {
        dest: 'dist'
      }
    },

    usemin: {
      html: [ 'dist/{,*/}*.html' ],
      css: [ 'dist/styles/{,*/}*.css' ]
    },

    htmlmin: {
      dist: {
        files: [ {
          expand: true,
          cwd: '',
          src: '*.html',
          dest: 'dist'
        } ]
      }
    },

    clean: {
      dist: [ '.tmp', 'dist/*' ],
      server: '.tmp'
    }
  } );

  grunt.registerTask( 'default', [
    'clean:dist',
    'useminPrepare',
    'htmlmin',
    'concat',
    'cssmin',
    'uglify',
    'usemin'
  ] );

};
