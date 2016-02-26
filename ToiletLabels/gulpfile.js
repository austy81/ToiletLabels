var gulp = require('gulp');
var ts = require('gulp-typescript');
var inject = require('gulp-inject');
 
gulp.task('index', function () {
  var target = gulp.src('./wwwroot/index.html');
  // It's not necessary to read the files (will speed up things), we're only after their paths: 
  var sources = gulp.src(['./wwwroot/libs/*.js', './wwwroot/libs/css/*.css'], {read: false});
 
  return target.pipe(inject(sources))
    .pipe(gulp.dest('./wwwroot'));
});

//Refer's TypeScript Configuration file
var tsProject = ts.createProject('scripts/tsconfig.json');

//"setup" - Task to move Angular 2 & related files, bootstrap, Jquery 
//from node_modules to ASP.NET Core 1.0's wwwroot folder 
// All the files will part of libs folder
gulp.task('libs', function (done) {
    gulp.src([
      'node_modules/angular2/bundles/js',
      'node_modules/angular2/bundles/angular2.*.js*',
      'node_modules/angular2/bundles/angular2-polyfills.js',
      'node_modules/angular2/bundles/http.*.js*',
      'node_modules/angular2/bundles/router.*.js*',
      'node_modules/es6-shim/es6-shim.*',
      'node_modules/systemjs/dist/*.*',
      'node_modules/jquery/dist/jquery.*js',
      'node_modules/bootstrap/dist/js/bootstrap*.js',
      'node_modules/rxjs/bundles/Rx.js',
      'node_modules/angular2-google-maps/bundles/angular2-google-maps.*'
    ]).pipe(gulp.dest('./wwwroot/libs/'));

    gulp.src([
      'node_modules/bootstrap/dist/css/bootstrap.css'
    ]).pipe(gulp.dest('./wwwroot/libs/css'));
});

gulp.task('setup', ['libs']);

//ts - task to transpile TypeScript files to JavaScript using Gulp-TypeScript 
gulp.task('ts', function (done) {    
    var tsResult = gulp.src([
        "scripts/**/*.ts"
    ])
      .pipe(ts(tsProject), undefined, ts.reporter.fullReporter());
    return tsResult.js.pipe(gulp.dest('./wwwroot/appScripts'));
});

gulp.task('assets', function (done) {    
    return gulp.src([
        "scripts/**/*.css",
        "scripts/**/*.html"])
      .pipe(gulp.dest('./wwwroot/appScripts'));
});

//watch -- Task to watch for any changes under 'setup' and 'ts' tasks
gulp.task('watch', ['watch.ts']);

gulp.task('watch.ts', ['ts', 'assets'], function () {
    return gulp.watch('scripts/**/*.*', ['ts', 'assets']);
});

gulp.task('default', ['setup', 'watch']);