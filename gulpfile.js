/**
 * NOTE :
 * 
 * 1- default task (no minify but bundle sfx)
 * $ gulp
 * 
 * 2- dist task (bundle sfx and minify)
 * $ gulp dist 
 * 
 */

var gulp          = require('gulp');
var concat        = require('gulp-concat');
var sass          = require('gulp-sass');
var jshint        = require('gulp-jshint');
var sourcemaps    = require('gulp-sourcemaps');
var connect			  = require('gulp-connect');
var notify        = require('gulp-notify');
var exec         	= require('child_process').exec;
var config 				= require('./src/gulp/config');



gulp.task('app:build:concat:sass', function () {
  return gulp.src(config.sassSourcesFiles)
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", notify.onError(function (error) {
              return "Erreur SASS : " + error.message;
          })))
    .pipe(concat(config.cssFileDest))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.baseDir + config.cssDirDest));
});




gulp.task('app:jshint:ES6', function(){ 
   return gulp.src(config.appJSAllJS) 
     .pipe(jshint({esnext : true})) 
     .pipe(jshint.reporter('default')) 
 }); 

gulp.task('app:bundle:sfx', function (cb) { 
  exec([
    'jspm bundle-sfx ',
    config.mainAppJsSOURCE,
    ' ',
    config.mainAppJsDEST
  ].join(' '), 
  function (err, stdout, stderr) {       
      cb(err); 
      console.log(stdout); 
  }); 
}); 




gulp.task('app:bundle:sfx:min', function (cb) { 
  exec([
    'jspm bundle-sfx ',
    config.mainAppJsSOURCE,
    ' ',
    config.mainAppJsDEST,
    ' ',
    '-minify'
  ].join(' '), 
  function (err, stdout, stderr) {       
      cb(err); 
      console.log(stdout); 
  }); 
}); 



gulp.task('connect', ['app:bundle:sfx'],  function() {
  connect.server({
    port: 8080,
		root: 'public'
  });
});



 gulp.task('default', [
  'app:build:concat:sass',
	'app:jshint:ES6',
  'app:bundle:sfx'
 ]);
 

 gulp.task('dist', [
  'app:build:concat:sass',
	'app:jshint:ES6',
  'app:bundle:sfx:min'
 ]);
 
 
 