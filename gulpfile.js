var gulp = require('gulp'), 
    sass = require('gulp-sass'),
    livereload = require('gulp-livereload');

function errorLog(error) {
    console.error.bind(error);
    this.emit('end');
}


// Watch Task
// Watches JS
gulp.task('watch', function() {
    var server = livereload();
    
    gulp.watch('./sass/*.scss', ['sass']);
});


// Style Task
// Compiles SASS
gulp.task('sass', function () {
	return gulp.src('./sass/style.scss')
        .pipe(sass())
        .on('error', errorLog)
        .pipe(gulp.dest('./css'))
        .pipe(livereload());
});

gulp.task('default', ['sass', 'watch']);