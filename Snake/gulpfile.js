var gulp         = require('gulp'),
    browserSync  = require('browser-sync').create(),
    sass         = require('gulp-sass'),
    concatCss    = require('gulp-concat-css'),
    postcss      = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    concat       = require('gulp-concat'),
    uglify       = require('gulp-uglify'),
    cleanCSS     = require('gulp-clean-css');


// Запускаем сервер + отслеживаем sass/html файлы
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./src"
    });

    gulp.watch("src/sass/**/*.sass", ['sass']);
    gulp.watch("src/*.html").on('change', browserSync.reload);
});

// Компилируем sass в CSS, ставим префиксы и сжимаем, вставляем изменения в браузер
gulp.task('sass', function() {
    return gulp.src("src/sass/**/*.sass")
        .pipe(sass())
        .pipe(postcss([ autoprefixer() ]))
        .pipe(concatCss("style.css"))
        .pipe(cleanCSS())
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});

gulp.task('compileCss', function() {
    return gulp.src('src/css/*.css')
      .pipe(concat('style.css'))
      .pipe(gulp.dest('src/css/'));
});
gulp.task('compileJs', function() {
    return gulp.src('src/js/*.js')
      .pipe(concat('script.js'))
      .pipe(uglify())
      .pipe(gulp.dest('src/js/'));
});

gulp.task('default', ['serve']);