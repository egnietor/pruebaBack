const gulp = require('gulp');
const less = require('gulp-less');
const browserSync = require('browser-sync').create();

gulp.task('less', function() {
    return gulp.src('src/styles/*.less')
        .pipe(less())
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.stream());
});

gulp.task('serve', function() {
    browserSync.init({
        server: './src'
    });

    gulp.watch('src/styles/*.less', gulp.series('less'));
    gulp.watch('src/*.html').on('change', browserSync.reload);
    gulp.watch('src/js/*.js').on('change', browserSync.reload);
});

gulp.task('default', gulp.series('less', 'serve'));