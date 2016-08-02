var gulp = require('gulp');
var sass = require('gulp-sass');
var minifycss = require('gulp-minify-css');
var rev = require('gulp-rev');
var revCollector = require('gulp-rev-collector');
var cmdPack = require('gulp-cmd-pack');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');

var paths = {
  sass:'./app/sass/*.scss',
  javascript: './app/javascripts/*.js'
}

gulp.task('sassimagemin', function() {
  return gulp.src('./app/sass/images/*.{png,jpg,gif,ico}')
    .pipe(imagemin())
    .pipe(rev())
    .pipe(gulp.dest('./dist/stylesheets/images'))
    .pipe(rev.manifest('sassimages.json'))
    .pipe(gulp.dest('./sassrev'));
});


gulp.task('sass', function(){
  return gulp.src('./app/sass/*.scss')
    .pipe(sass())
    .pipe(minifycss())
    .pipe(rev())
    .pipe(gulp.dest('./dist/stylesheets'))
    .pipe(rev.manifest('css.json'))
    .pipe(gulp.dest('./rev'));
})

gulp.task('sassrev', function(){
  return gulp.src(['./sassrev/*.json', './dist/stylesheets/*.css'])
    .pipe(revCollector())
    .pipe(gulp.dest('./dist/stylesheets'));
})

gulp.task('javascript', function(){
  return gulp.src(['./app/javascripts/sea.js', './app/javascripts/main.js'])
    .pipe(uglify())
    .pipe(rev())
    .pipe(gulp.dest('./dist/javascripts'))
    .pipe(rev.manifest('javascript.json'))
    .pipe(gulp.dest('./rev'));
})

gulp.task('imagemin', function(){
  return gulp.src('./app/images/*.{png, jpg, gif,ico}')
    .pipe(imagemin())
    .pipe(rev())
    .pipe(gulp.dest('./dist/images'))
    .pipe(rev.manifest('images.json'))
    .pipe(gulp.dest('./rev'));
})

gulp.task('rev', function(){
  return gulp.src(['./rev/*.json', './app/*.html'])
    .pipe(revCollector())
    .pipe(gulp.dest('./dist'));
})

gulp.task('watch', function(){
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.javascript, ['javascript']);
})

gulp.task('default', ['sassimagemin', 'sass', 'sassrev', 'javascript','imagemin', 'rev', 'watch']);