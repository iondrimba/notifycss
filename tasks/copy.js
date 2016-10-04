var gulp = require('gulp');

module.exports = function() {
	gulp.src(['./src/*.css'])
		.pipe(gulp.dest('./demo'));
};