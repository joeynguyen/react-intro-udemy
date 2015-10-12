var gulp = require('gulp'),
    gutil = require('gulp-util'), // prints out to the command line for debugging
    source = require('vinyl-source-stream'), // throwing text files from one part of the process to the other
    browserify = require('browserify'), // manages load order of required components
    watchify = require('watchify'), // rerun gulpfile when code changes
    reactify = require('reactify'); // works in conjunction with Browserify to convert jsx files to js

gulp.task('default', function() {
    var bundler = watchify(browserify({
        entries: ['./src/app.jsx'],
        transform: [reactify],
        extensions: ['.jsx'],
        debug: true,
        cache: {},
        packageCache: {},
        fullPaths: true
    }));
    function build(file) {
        if (file) { gutil.log('Recompiling ' + file) }
        return bundler
            .bundle()
            .on('error', gutil.log.bind(gutil, 'Browserify Error'))
            .pipe(source('application.js'))
            .pipe(gulp.dest('./dist/'));
    }
    build();
    bundler.on('update', build);
});
