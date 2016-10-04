var gulp = require('gulp');
var watch = require('gulp-watch');
var gulpsync = require('gulp-sync')(gulp);

module.exports = function() {
	gulp.watch('./src/*.js', gulpsync.sync(['eslint', 'browserify']));
	gulp.watch('./src/*.css', gulpsync.sync(['post-css']));
};