module.exports = function (grunt) {
	// body...
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		connect: {
			server: {
				options: {
					hostname: 'localhost',
					port:9001,
					livereload: true,
				},
			},
		},

		watch: {
			files: ['./*', './*/*'],
    		options: {
      			livereload: 1337,
    		},
  },
	})
	// plugin loading area
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');

	// default task area
	grunt.registerTask('default', ['connect', 'watch']);
};
