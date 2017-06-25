const gulp = require('gulp');
const style = require('gulp-sass');
const pug = require('gulp-pug');
const imagemin = require('gulp-imagemin');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();

// Pug
gulp.task('pug', function buildHTML() {
	gulp.src('src/*.pug')
		.pipe(pug({pretty: true}))
		.on('error', console.log)
		.pipe(gulp.dest('build/'))
		.on('end', browserSync.reload);
});

// Images
gulp.task('imagemin', () => 
	gulp.src('src/img/*')
		.pipe(imagemin())
		.pipe(gulp.dest('build/img/'))
);

// Autoprefixer
gulp.task('autoprefixer', () =>
  gulp.src('build/css/sportbunny.css')
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
	  .pipe(gulp.dest('dist/'))
);

// Style
gulp.task('style', function () {
	gulp.src('src/scss/*.scss')
		.pipe(sourcemaps.init())
		.pipe(style({outputStyle: 'expanded'}).on('error', style.logError))
		.pipe(sourcemaps.write('maps/'))
		.pipe(gulp.dest('build/css/'))
		.on('end', browserSync.reload);
});


// Webserver
gulp.task('webserver', function () {
	browserSync.init({
		server: {
			baseDir: './build/',
			tunnel: true
		}
	});
});

// Watch
gulp.task('watch', ['webserver'],function(){
	gulp.watch('src/scss/*.scss',['style']);
	gulp.watch('src/*.pug',['pug']);
});


