var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static Server
gulp.task('serve', function() {

    browserSync.init({
        server: "./app"
    });

    gulp.watch("app/**/*.html").on('change', browserSync.reload);
    gulp.watch("app/**/*.css").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);
