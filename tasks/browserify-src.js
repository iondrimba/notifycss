var gulp = require('gulp');
var source = require('vinyl-source-stream');
var streamify = require('gulp-streamify');
var stringify = require('stringify');
var browserify = require('browserify');
var babelify = require("babelify");


module.exports = function() {
	var bundleStream = browserify('./dist/notify-me.js')
		.transform(babelify, {
			'presets': ['es2015']
		})
		.bundle();

	bundleStream
		.pipe(source('notify-me-transpiled.js'))
		.pipe(gulp.dest('./dist'))
};