var gulp = require('gulp');
var postcss = require('gulp-postcss');

module.exports = function() {
    return gulp.src('./src/*.css')
        .pipe(postcss([require('autoprefixer')]))
	.pipe(gulp.dest('./demo'));
};