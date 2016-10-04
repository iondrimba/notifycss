var gulp = require('gulp');
var browserSync = require('browser-sync')
	.create();

module.exports = function() {
	browserSync.init({
		server: {
			baseDir: "./demo",
			index: "index.html"
		}
	});

	gulp.watch("./demo/*.css")
		.on('change', browserSync.reload);
	gulp.watch("./demo/demo.js")
		.on('change', browserSync.reload);
};