var gulp = require('gulp');
var postcss = require('gulp-postcss');

module.exports = function() {
    return gulp.src('./demo/*.css')
        .pipe(postcss([require('autoprefixer')]))
        .pipe(gulp.dest('./demo'));
};