var gulp = require('gulp');
var uglify = require('gulp-uglify');

module.exports = function() {
	return gulp.src('./dist/notifycss.js')
		.pipe(uglify())
		.pipe(gulp.dest('./dist/'));
};