var gulp = require('gulp');
var sass = require('gulp-sass');
// var concat = require('gulp-concat');

var browserSync = require('browser-sync').create();


// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: "./"
    });
	gulp.watch('assets/sass/**/*.scss', ['sass']);
   	gulp.watch("*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("assets/sass/**/*.scss")
        .pipe(sass().on('error', sass.logError))
     	// .pipe(concat('main.css'))
        .pipe(gulp.dest("./assets/css/"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);







