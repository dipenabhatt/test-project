module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat:{
            dev: {
                src: [
                    'src/app.js',
                    'src/services/*.js',
                    'src/directives/*.js',
                    'src/controllers/*.js'
                ],
                dest: 'dest/myProject.js',
                nonull: true
            },
            vendor:{
                src: [
                    'bower_components/angular/angular.js',
                    'bower_components/angular-animate/angular-animate.js',
                    'bower_components/angular-cookies/angular-cookies.js',
                    'bower_components/angular-route/angular-route.js',
                    'bower_components/jquery/dist/jquery.js',
                    'bower_components/bootstrap/dist/js/bootstrap.js'
                ],
                dest: 'dest/vendor.js',
                nonull: true
            }
        },
        uglify:{
            my_target: {
                files: {
                    'dest/myProject.min.js': ['dest/myProject.js'],
                    'dest/vendor.min.js':['dest/vendor.js']
                }
            }
        },
        clean:{
            all: ['dest/*.js']
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', ['clean:all','concat:dev','concat:vendor','uglify:my_target']);
    // grunt.registerTask('clean', ['clean:all']);
};