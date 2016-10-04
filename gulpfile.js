'use strict';
var Promise = require('es6-promise')
	.Promise;
var gulp = require('gulp');
var gulpsync = require('gulp-sync')(gulp);
var bump = require('gulp-bump');
var semver = require('semver');
var renameMe = require('rename-me');
var pckg = require('./package.json');

var patch = semver.inc(pckg.version, 'patch');
var minor = semver.inc(pckg.version, 'minor');
var major = semver.inc(pckg.version, 'major');

// bump versions on package
gulp.task('minor', function() {
	return bumpPackageJson(minor);
});
gulp.task('patch', function() {
	return bumpPackageJson(patch);
});
gulp.task('major', function() {
	return bumpPackageJson(major);
});

function bumpPackageJson(type) {
	return gulp.src(['./package.json'])
		.pipe(bump({
			version: type
		}))
		.pipe(gulp.dest('./'));
}

function bumpAppFiles(version) {
	var options = {};
	options.version = version;

	options.filePath = ['./src/notifycss.js', './dist/notifycss-transpiled.js'];
	options.outputfolder = ['./dist/', './dist/'];
	renameMe(options);
}

//copy css demo
gulp.task('copy-css', require('./tasks/copy.js'));

//copy notify-me to dist folder
gulp.task('copy-notify', require('./tasks/copy-notify.js'));

gulp.task('browserify', require('./tasks/browserify.js'));
gulp
gulp.task('browserify-src', require('./tasks/browserify-src.js'));

//eslint task
gulp.task('eslint', require('./tasks/eslint.js'));

//uglify task
gulp.task('uglify', require('./tasks/uglify.js'));

gulp.task('watch', require('./tasks/watch.js'));

//post css
gulp.task('post-css', require('./tasks/post-css.js'));

//coveralls
gulp.task('coveralls', require('./tasks/coveralls.js'));

//local server
gulp.task('browser-sync', require('./tasks/browser-sync.js'));

// bump package versions
gulp.task('bump-patch', gulpsync.sync(['patch']), function renamePatch() {
	bumpAppFiles(patch);
});

gulp.task('bump-minor', gulpsync.sync(['minor']), function renameMinor() {
	bumpAppFiles(minor);
});

gulp.task('bump-major', gulpsync.sync(['major']), function renameMajor() {
	bumpAppFiles(major);
});


// Default Task
gulp.task('default', gulpsync.sync(['copy-css', 'eslint', 'browserify', 'browser-sync', 'watch']));

//publish Task
gulp.task('deploy', gulpsync.sync(['post-css', 'eslint', 'copy-notify']));

//publish Task
gulp.task('transpiled', gulpsync.sync(['post-css', 'eslint', 'copy-notify', 'browserify-src']));