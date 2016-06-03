var gulp = require('gulp');
var gls = require('gulp-live-server');
var webpack = require('webpack-stream');
var config = require('./webpack.config.js');

gulp.task('server', function () {
    var server = gls.new('app.js');
    var promise = server.start();

    promise.then(function (result) {
        console.log(result);
    });
});

gulp.task('html', function () {
    gulp.src('./Views/index.html').pipe(gulp.dest('./dist'));
});

gulp.task('js', function () {
    gulp.src('')
        .pipe(webpack(config))
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['html', 'js', 'server']);
