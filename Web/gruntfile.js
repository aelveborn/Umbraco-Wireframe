/// <vs AfterBuild='build' Clean='clean-build' />
module.exports = function (grunt) {

    // Place scripts in the right order in concat
    
    grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

        // Build
		concat: {
			build: {
				files: {
				    'Source/Build/Styles/build.site.css': [
                        'Source/Build/Styles/build.bower.css',
                        'Source/Styles/**/*.css',
                        'Source/Build/Styles/build.less.css'],

				    'Source/Build/Scripts/build.scripts.js': [
                        'Source/Build/Scripts/build.bower.js',
                        'Source/Scripts/**/*.js']
				}
			}
		},

		less: {
			build: {
				files: {
					'Source/Build/Styles/build.less.css': ['Source/Less/sources.less']
				}
			}
		},

		bower_concat: {
		    build: {
		        dest: 'Source/Build/Scripts/build.bower.js',
		        cssDest: 'Source/Build/Styles/build.bower.css',
		        bowerOptions: {
		            relative: false
		        }
		    }
		},

        // Moves and minifies files to destination
	    uglify: {
			build: {
			    src: ['Source/Build/Scripts/build.scripts.js'],
			    dest: 'Static/Scripts/scripts.min.js'
			}
		},

		cssmin: {
			build: {
				files: {
				    'Static/Styles/site.min.css': ['Source/Build/Styles/build.site.css']
				}
			}
		},

		imagemin: {
			build: {
				files: [{
					expand: true,
					cwd: 'Source/Images/',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'Static/Images/'
				}]
			}
		},

		copy: {
			build: {
				files: [{
					expand: true,
					cwd: 'Source/',
                    src: ['**', '!**/Less/**', '!**/Images/**', '!**/Scripts/**', '!**/Styles/**', '!**/Build/**'],
                    dest: 'Static/'
				}, {
				    expand: true,
				    cwd: 'Source/Build/',
				    src: ['Fonts/**'],
				    dest: 'Static/'
				}],
			},
			bower: {
			    files: [{
			        expand: true,
			        cwd: 'bower_components/bootstrap/dist/fonts/',
			        src: ['**'],
			        dest: 'Source/Build/Fonts/'
			    }, {
			        expand: true,
			        cwd: 'bower_components/fontawesome/fonts/',
			        src: ['**'],
			        dest: 'Source/Build/Fonts/'
			    }]
			}
		},

		/* Removes build and static folder */
		clean: {
			build: {
			    src: ['Source/Build', 'Static/']
			},
		},

		watch: {
			js: {
				files: ['Source/Scripts/**/*.js'],
				tasks: ['concat', 'uglify']
			},
			css: {
				files: ['Source/Styles/**/*.css'],
				tasks: ['concat', 'cssmin']
			},
			less: {
				files: ['Source/Less/**/*.less'],
				tasks: ['less', 'concat', 'cssmin'] 
			},
			image: {
				files: ['Source/Images/**/*.{png,jpg,gif}'],
				tasks: ['imagemin']
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-bower-concat');

	grunt.registerTask('build', ['less', 'bower_concat', 'concat', 'uglify', 'cssmin', 'imagemin', 'copy:bower', 'copy:build']);
	grunt.registerTask('clean-build', ['clean', 'less', 'bower_concat', 'concat', 'uglify', 'cssmin', 'imagemin', 'copy:bower', 'copy:build']);

};