const {src, dest, watch, series, parallel} = require('gulp');
const browserSync = require('browser-sync').create();
const fileInclude = require('gulp-include');
const gcmq = require('gulp-group-css-media-queries');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');

// var LessPluginAutoPrefix = require('less-plugin-autoprefix');
// var autoprefixPlugin = new LessPluginAutoPrefix({ browsers: ["last 5 versions"] });

const path = {
	src: {
		html: './src/*.html',
		js: './src/js/*.js',
		sass: './src/sass/*.scss',
	},
	build: {
		html: './build/',
		js: './build/js/',
		css: './build/css/',
	},
	watch: {
		html: './src/*.html',
		js: './src/js/*.js',
		sass: './src/sass/project/**/*.scss'
	}
}

function html() {
	return src(path.src.html)
		.pipe(fileInclude())
		.pipe(dest(path.build.html))
		.pipe(browserSync.stream())
}

function styles() {
	return src(path.src.sass)
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 2 versions']
		}))
		.pipe(gcmq())
		.pipe(dest(path.build.css))
		.pipe(browserSync.stream())
}

function scripts() {
	return src(path.src.js)
		.pipe(fileInclude())
		.pipe(dest(path.build.js))
		.pipe(browserSync.stream())
}

function watching() {
	browserSync.init({
		server: {
			baseDir: path.build.html
		}
	});
	watch(path.watch.html, html).on('change', browserSync.reload);
	watch(path.watch.sass, styles);
	watch(path.watch.js, scripts).on('change', browserSync.reload);
}


exports.watching = watching;
exports.default = series(parallel(html, styles, scripts), watching);
