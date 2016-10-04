var gulp = require('gulp');

module.exports = function() {
	gulp.src(['./src/notifycss.js'])
		.pipe(gulp.dest('./dist/'));
};