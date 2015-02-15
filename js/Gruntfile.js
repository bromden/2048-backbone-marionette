module.exports = function(grunt) {

    // Задачи
    grunt.initConfig({
        // Склеиваем
        concat: {
            all: {
                src: [
                	'./vendor/jquery/dist/jquery.js',
                	'./vendor/underscore/underscore.js',
                    './vendor/backbone/backbone.js',
                    './vendor/backbone.babysitter/lib/backbone.babysitter.js',
                    './vendor/backbone.wreqr/lib/backbone.wreqr.js',
                    './vendor/marionette/lib/backbone.marionette.js',
                    './app/components/*.js',
                    './app/models/*.js',
                    './app/views/*.js',
                    './app/app.js'
                ],
                dest: 'scripts.js'
            }
        },

        bower_concat: {
            all: {
                dest: './scripts.js',
               
                dependencies: {
                  'underscore': 'jquery',
                  'backbone': 'underscore',
                  'marionette': 'backbone',
                  './app/**/*.js' : 'marionette'
                },
                bowerOptions: {
                  relative: false
                }
            }
        },

        watch: {
            concat: {
                files: '<%= concat.all.src %>',
                tasks: ['concat']  // Можно несколько: ['lint', 'concat']
            }
        },
        // Сжимаем
        uglify: {
            main: {
                files: {
                    // Результат задачи concat
                    'scripts.min.js': '<%= concat.main.dest %>'
                }
            }
        }
    });

    // Загрузка плагинов, установленных с помощью npm install
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-bower-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Задача по умолчанию
    grunt.registerTask('default', ['concat', 'watch']);
};