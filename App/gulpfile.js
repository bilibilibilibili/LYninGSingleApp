/**
 * Created by lyning on 16/1/28.
 */

var gulp = require('gulp');
var server = require('gulp-express');

gulp.task('server', function(){
    server.run(['app.js']);
});

gulp.task('default', ['server']);