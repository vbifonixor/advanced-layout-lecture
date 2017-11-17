const gulp = require('gulp')
const imagemin = require('gulp-imagemin')
const postcss = require('gulp-postcss')
const browsersync = require('browser-sync')

let images = () => {
  return gulp.src('src/img/**/*')
    .pipe(imagemin({ verbose: true }))
    .pipe(gulp.dest('dist/img'))
}

let css = () => {
  return gulp.src('src/css/*.css')
    .pipe(postcss())
    .pipe(gulp.dest('dist/css'))
}

let serve = () => {
  return browsersync({
    files: './**/*',
    server: {
      baseDir: './'
    }
  })
}

gulp.task('img', images)
gulp.task('css', css)
gulp.task('serve', serve)

gulp.task('watch', ['serve'], () => {
  gulp.watch(['src/css/**/*.css', 'postcss.config.js'], css)
  gulp.watch(['src/img/**/*'], images)
})
