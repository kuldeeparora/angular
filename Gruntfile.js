'use strict';

module.exports = function (grunt) {
    require('time-grunt')(grunt);

    // Project configuration.
    grunt.initConfig({

        jshint: {
            all: [
                'Gruntfile.js'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        traceur: {
            options: {
                includeRuntime: false,
                experimental:true,  // Turn on all experimental features
                blockBinding: true // Turn on support for let and const
            },
            custom: {
                files:{
                    'Javascript-Assignments/js/application/ecma6_new.js': ['Javascript-Assignments/js/application/ecma6.js']
//                    'build/': ['js/**/*.js']
                }
            },
        }

    });

//    grunt.log.debug('watch');

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-traceur');

    grunt.registerTask('mkdir', grunt.file.mkdir);

    grunt.registerTask('dev', [
        'jshint',
        'traceur'
    ]);

    // By default, lint and run all tests.
    grunt.registerTask('default', ['dev']);
//    grunt.registerTask('watch', ['watch_dev']); //, 'to watch'
};