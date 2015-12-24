var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    jade = require('gulp-jade'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    nib = require('nib');


gulp.task('stylus', function(){
  gulp.src('./src/styles/app.styl')
  .pipe(stylus({
    compress: true,
    use:nib(),
    'include css':true
  }))
  .pipe(gulp.dest('./build/css'))
  .pipe(reload({stream:true}));
});

gulp.task('jade', function(){
  gulp.src('./src/index.jade')
  .pipe(jade({
    pretty: true
  }))
  .pipe(gulp.dest('./build'))
  .pipe(reload({stream:true}));
});

gulp.task('watch', function(){
  gulp.watch('src/styles/app.styl',['stylus']);
  gulp.watch('src/index.jade',['jade']);
});

gulp.task('browserSync', function(){
  browserSync({
    server: {
      baseDir: './build'
    }
  });
});


gulp.task('default',['stylus','jade', 'browserSync' ,'watch']);

gulp.task('hello',function(){
  console.log('hello world');
});
