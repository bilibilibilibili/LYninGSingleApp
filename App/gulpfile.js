/**
 * Created by lyning on 16/1/28.
 */

var gulp = require('gulp');
var server = require('gulp-express');

var config = [
	port
];

gulp.task('server', function(){
    server.run(['app.js']);
});

gulp.task('javascript', function(){
	gulp.src('./Views/**/*.js')
		.pipe();
});

gulp.task('default', ['server']);