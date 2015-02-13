module.exports = function(grunt) {

    // Задачи
    grunt.initConfig({
        // Склеиваем
        concat: {
            main: {
                src: [
                	'./vendor/jquery/dist/jquery.js',
                	'./vendor/underscore/underscore.js',
                    './vendor/backbone/backbone.js',
                    './vendor/marionette/lib/backbone.marionette.js',
                    './app/**/*.js'  // Все JS-файлы в папке
                ],
                dest: 'scripts.js'
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

    // Задача по умолчанию
    grunt.registerTask('default', ['concat', 'uglify']);
};