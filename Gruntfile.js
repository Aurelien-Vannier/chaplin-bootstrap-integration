module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Configuration de Grunt
    grunt.initConfig({
        jshint: {
            // define the files to lint
            files: ['src/main/main-chaplin-bootstrap.js'],
            // configure JSHint (documented at http://www.jshint.com/docs/)
            options: {
                // more options here if you want to override JSHint defaults
                globals: {
                    jQuery: true,
                    console: true,
                    module: true
                }
            }
        },
        uglify: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['src/main/main-chaplin-bootstrap.js'],
                dest: 'dist/chaplin-bootstrap-integration.min.js'
            }
        },
        copy: {
            main: {
                src: 'src/main/main-chaplin-bootstrap.js',
                dest: 'dist/chaplin-bootstrap-integration.js'
            }
        },
        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint']
        }
    })

    // this would be run by typing "grunt test" on the command line
    grunt.registerTask('test', ['jshint']);

    // Définition des tâches Grunt
    grunt.registerTask('build', ['jshint','uglify','copy'])

}