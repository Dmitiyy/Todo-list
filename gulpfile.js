let gulp = require('gulp');
let sass = require('gulp-sass');
let watch = require('gulp-watch');
let browserSync = require('browser-sync').create();
let autoPrefix = require('gulp-autoprefixer');
let srcMaps = require('gulp-sourcemaps');
let fileInclude = require('gulp-file-include');
let webpackStream = require('webpack-stream');
let webpack = require('webpack');

gulp.task('scss', function(){
    return gulp.src('./src/scss/main.scss')
    .pipe(srcMaps.init())
    .pipe(sass({outputStyle:'expanded'}))
    .pipe(autoPrefix({
        overrideBrowserslist: ['last 4 versions']
    }))
    .pipe(srcMaps.write())
    .pipe(gulp.dest('./dist/css/'));
});

gulp.task('html', function(){ 
    return gulp.src('./src/html/index.html')
    .pipe(fileInclude({
        prefix: '@@'
    }))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('img', function(){
    return gulp.src('src/img/**/*.*')
    .pipe(gulp.dest('./dist/img/'));
});

gulp.task('js', function(){
    return gulp.src('./src/js/index.js')
    .pipe(webpackStream(require('./webpack.config'), webpack, function(){}))
    .pipe(gulp.dest('./dist/js/'));
});

gulp.task('watch', function(){
    watch(['./dist/css/**/*.css', './dist/index.html', './dist/js/index.js', './dist/img/**/*.*'], browserSync.reload);
    gulp.watch('./src/scss/**/*.scss', gulp.parallel('scss'));
    gulp.watch('./src/html/**/*.html', gulp.parallel('html'));
    gulp.watch('./src/js/**/*.js', gulp.parallel('js'));
    gulp.watch('./src/img/**/*.*', gulp.parallel('img'));
});

gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "dist/"
        }
    });
});

gulp.task('default', gulp.parallel(['server', 'watch', 'scss', 'html', 'js', 'img']));