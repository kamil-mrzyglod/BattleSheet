module.exports = function (grunt) {

    // Main Grunt configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            lib: {
                src: [
                    'node_modules/react/umd/react.development.js',
                    'node_modules/react-dom/umd/react-dom.development.js',
                    'node_modules/react-router/umd/react-router.js',
                    'node_modules/react-router-dom/umd/react-router-dom.js',
                    'node_modules/axios/dist/axios.js',
                    'node_modules/prop-types/prop-types.js',
                    'node_modules/react-google-maps/index.js'
                ],
                dest: 'dist/lib.js',
            },
        },
        connect: {
            server: {
                options: {
                    port: 12334,
                    hostname: 'localhost',
                    open: true,
                    livereload: true,
                    middleware: function (connect, options, middlewares) {
                        var modRewrite = require('connect-modrewrite');

                        // enable Angular's HTML5 mode
                        middlewares.unshift(modRewrite(['!/api|\\.html|\\.js|\\.svg|\\.css|\\.png|/$ /index.html [L]',]));

                        return middlewares;
                    }
                }
            }
        },
        babel: {
            options: {
                plugins: ['transform-react-jsx'],
                presets: ['es2015', 'react']
            },
            jsx: {
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: ['*.jsx', '**/*.jsx'],
                    dest: 'build',
                    ext: '.js'
                }]
            }
        },
        browserify: {
            dist: {
                files: {
                    'dist/app.js': ['build/*.js']
                }
            }
        },
        watch: {
            scripts: {
                files: ['src/**/*.jsx', 'src/**/*.js'],
                tasks: ['reload'],
                options: {
                    spawn: false,
                    livereload: true
                },
            }
        },
        copy: {
            main: {
              files: [
                {
                    expand: true, 
                    cwd: 'src',
                    src: ['**/*.js'], 
                    dest: 'build/'
                },       
              ],
            },
            css: {
                files: [
                    {
                        expand: true, 
                        cwd: 'node_modules',
                        src: ['spectre.css/dist/spectre.min.css', 'spectre.css/dist/spectre-exp.min.css', 'spectre.css/dist/spectre-icons.min.css'], 
                        dest: 'dist/'
                    }
                ]
            }
          }
    });

    // NPM tasks
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Tak registration
    grunt.registerTask('default', ['concat', 'babel', 'copy', 'browserify', 'connect', 'watch']);
    grunt.registerTask('reload', ['concat', 'babel', 'copy', 'browserify']);
    grunt.registerTask('build', ['concat', 'babel', 'copy']);
    
};