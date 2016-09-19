var gulp = require('gulp');
var browserSync = require('browser-sync')
	.create();

module.exports = function () {
	browserSync.init({
		server: "./demo"
	});

	gulp.watch("./demo/demo.css")
		.on('change', browserSync.reload);
	gulp.watch("./demo/demo.js")
		.on('change', browserSync.reload);
};