var gulp = require('gulp');

module.exports = function() {
	gulp.src(['./src/notify-me.js'])
		.pipe(gulp.dest('./dist/'));
};