var gulp = require('gulp'),
browserify = require('gulp-browserify'),
webserver = require('gulp-webserver'),
connect = require('gulp-connect');

var src = './process',
app = './builds/app';

gulp.task('js', function(){
  return gulp.src(src + '/js/app.js')
  .pipe(browserify({
    transform: 'reactify',
    debug: true
  }))
  .on('error', function(err){
    console.error('Error!', err.message);
  })
  .pipe(gulp.dest(app +'/js'))
  .pipe(connect.reload());
});

gulp.task('html', function(){
  return gulp.src(app + '/**/*.html')
  .pipe(connect.reload());
});

gulp.task('css', function(){
  return gulp.src(app + '/*.css')
  .pipe(connect.reload());
});

gulp.task('watch', function(){
  gulp.watch(src + '/js/**/*.js', gulp.series('js'));
  gulp.watch(app + '/css/**/*.css', gulp.series('css'));
  gulp.watch([app + '/**/*.html'], gulp.series('html'));
});

gulp.task('connect', function() {
  connect.server({
    root: ['builds/app'],
    open: {browser: 'Google Chrome'},
    livereload: true,
    port: 8000
  });
});


gulp.task('default', gulp.parallel('watch', 'html', 'js', 'css', 'connect'));
