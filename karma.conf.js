// Karma configuration
// Generated on Tue Feb 02 2016 21:20:59 GMT-0200 (Horário brasileiro de verão)
var istanbul = require('browserify-istanbul');
var threshold = require('karma-threshold-reporter');

module.exports = function(config) {
    config.set({
        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine', 'fixture', 'browserify'],
        // list of files / patterns to load in the browser
        files: [
            'src/demo.js',
            'demo/demo.css',
            '*.html',
            'spec/*.js'
        ],
        included: false,
        browserify: {
            debug: true,
            transform: ['stringify', 'babelify', istanbul({
                defaultIgnore: true
            })],
            extensions: ['.js'],
            bundleDelay: 1000
        },
        babelPreprocessor: {
            options: {
                presets: ['es2015']
            },
            filename: function(file) {
                return file.originalPath;
            },
            sourceFileName: function(file) {
                return file.originalPath;
            }
        },
        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'spec/*.js': ['babel', 'browserify'],
            'src/demo.js': ['babel', 'browserify'],
            '*.html': ['html2js']
        },
        coverageReporter: {
            instrumenters: {
                isparta: require('isparta')
            },
            instrumenter: {
                'spec/*.js': 'isparta'
            },
            instrumenterOptions: {
                isparta: {
                    babel: {
                        presets: 'es2015'
                    }
                }
            },
            istanbul: {
                noCompact: true
            },
            dir: 'test/reports/coverage',
            reporters: [
                // reporters not supporting the `file` property
                {
                    type: 'lcovonly',
                    subdir: 'report-lcov'
                }
            ]
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['spec', 'coverage', 'threshold'],

        thresholdReporter: {
            statements: 80,
            branches: 50,
            functions: 70,
            lines: 80
        },
        // web server port
        port: 3000,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    })
}