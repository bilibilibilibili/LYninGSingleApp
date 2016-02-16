/**
 * Created by lyning on 16/1/28.
 */

var gulp = require('gulp');
var gls = require('gulp-live-server');
var browserify = require('browserify');
var vueify = require('vueify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

gulp.task('server', function(){
	var server = gls.new('app.js');
	var promise = server.start();

	promise.then(function(result){
		console.log(result);
	});
});

var browerifyConfig = {
	entries: './Views/index.js',
	debug: true
};

gulp.task('html', function() {
	gulp.src('./Views/homePage.html').pipe(gulp.dest('./dist'));
});

gulp.task('img',function(){
	gulp.src('../ViewsPrototype/img/*')
		.pipe(
			imagemin({
				progressive: true,
				svgoPlugins: [{removeViewBox: false}],
				use: [pngquant()]
			})
		)
		.pipe(gulp.dest('./dist/img'));
});

gulp.task('css', function(){
	gulp.src('../ViewsPrototype/css/*.css')
		.pipe(minifyCss())
		.pipe(gulp.dest('./dist/css'));
});

gulp.task('js', function(){
	browserify(browerifyConfig)
		.transform(vueify)
		.bundle()
		.on('error',console.error.bind(console))
		.pipe(source('bundle.js'))
		.pipe(buffer())
		.pipe(uglify())
		.pipe(gulp.dest('./dist/js'));
});

gulp.task('default', ['html', 'css', 'js', 'server']);