var gulp = require('gulp');

module.exports = function () {
	gulp.src(['./src/*.js'])
		.pipe(gulp.dest('./dist'));
};