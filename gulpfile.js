const { src, dest} = require('gulp');
const series = require('gulp').series;
const parallel = require('gulp').parallel;
const del = require('del');
const path = require('path');
const slash = require('slash');
const ts = require('gulp-typescript');
const concat = require('gulp-concat');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const shell = require('gulp-shell');


const TYPEDOC_THEME = {
    SRC: slash(path.join(__dirname, 'typedoc', 'src')),
    DIST: slash(path.join(__dirname, 'typedoc','bin')),
    STYLES: {
        ENTRY: slash(path.join('assets', 'css', 'main.sass')),
        OUT: slash(path.join('assets','css')),
        MAPS: slash(__dirname),
        CONFIG: {
            outputStyle: 'compressed'
        }
    }
};

function typedocCopyImages() {
  return src(slash(path.join(TYPEDOC_THEME.SRC, 'assets', 'images/**/*.{png,gif,jpg,svg}')))
    .pipe(dest(slash(path.join(TYPEDOC_THEME.DIST, 'assets', 'images'))));
}
typedocCleanImages.displayName = 'typedoc:copy-images';

async function typedocCleanImages() {
  return await del(slash(path.join(TYPEDOC_THEME.DIST, 'assets', 'images')), { force: true });
}
typedocCopyImages.displayName = 'typedoc:clean-images';

function typedocCopyHbs() {
  return src([
    slash(path.join(TYPEDOC_THEME.SRC, 'layouts/**/*')),
    slash(path.join(TYPEDOC_THEME.SRC, 'partials/**/*')),
    slash(path.join(TYPEDOC_THEME.SRC, 'templates/**/*')),
  ], {
    base: TYPEDOC_THEME.SRC
  })
  .pipe(dest(TYPEDOC_THEME.DIST));
}
typedocCopyHbs.displayName = 'typedoc:copy-hbs';

async function typedocCleanHbs() {
  return await del([
    slash(path.join(TYPEDOC_THEME.DIST, 'layouts')),
    slash(path.join(TYPEDOC_THEME.DIST, 'partials')),
    slash(path.join(TYPEDOC_THEME.DIST, 'templates')),
  ], { force: true });
}
typedocCleanHbs.displayName = 'typedoc:clean-hbs';

function typedocCopyStyles() {
  const prefixer = postcss([autoprefixer({
    overrideBrowserslist: ['last 5 versions', '> 3%'],
    cascade: false,
    grid: false
  })]);

  return src(slash(path.join(TYPEDOC_THEME.SRC, TYPEDOC_THEME.STYLES.ENTRY)))
    .pipe(sourcemaps.init())
    .pipe(sass.sync(TYPEDOC_THEME.STYLES.CONFIG).on('error', sass.logError))
    .pipe(prefixer)
    .pipe(sourcemaps.write(TYPEDOC_THEME.STYLES.MAPS))
    .pipe(dest(slash(path.join(TYPEDOC_THEME.DIST, TYPEDOC_THEME.STYLES.OUT))));
}
typedocCopyStyles.displayName = 'typedoc:copy-styles';

async function typedocCleanStyles() {
  return await del(slash(path.join(TYPEDOC_THEME.DIST, 'assets', 'css')), { force: true });
}
typedocCleanStyles.displayName = 'typedoc:clean-styles';

function typedocMinifyJS() {
  return src([
    slash(path.join(TYPEDOC_THEME.SRC, 'assets','js', 'lib', 'query-2.1.1.min.js')),
    slash(path.join(TYPEDOC_THEME.SRC, 'assets','js', 'lib', 'nderscore-1.6.0.min.js')),
    slash(path.join(TYPEDOC_THEME.SRC, 'assets','js', 'lib', 'ackbone-1.1.2.min.js')),
    slash(path.join(TYPEDOC_THEME.SRC, 'assets','js', 'lib', 'unr.min.js')),
    slash(path.join(TYPEDOC_THEME.SRC, 'assets','js', 'src', 'avigation/igviewer.common.js')),
    slash(path.join(TYPEDOC_THEME.SRC, 'assets','js', 'src', 'avigation/igviewer.renderingService.js')),
    slash(path.join(TYPEDOC_THEME.SRC, 'assets','js', 'src', 'avigation/nav-initializer.js')),
    slash(path.join(TYPEDOC_THEME.SRC, 'assets','js', 'src', 'ersioning/tag-versions.req.js')),
    slash(path.join(TYPEDOC_THEME.SRC, 'assets','js', 'main.js'))
  ], { allowEmpty: true })
  .pipe(concat('main.js'))
  .pipe(dest(slash(path.join(TYPEDOC_THEME.DIST, 'assets', 'js'))));
}
typedocMinifyJS.displayName = 'typedoc:minify-js';

async function typedocCleanThemeJS() {
  return await del(slash(path.join(TYPEDOC_THEME.DIST, 'theme.js')), { force: true });
}
typedocCleanThemeJS.displayName = 'typedoc:clean-theme-js';

async function typedocCleanJS() {
  return await del(slash(path.join(TYPEDOC_THEME.DIST, 'assets', 'js')), { force: true });
}
typedocCleanJS.displayName = 'typedoc:clean-js';

async function typedocBuildTS() {
  return await shell.task('tsc --project ./typedoc/tsconfig.json');
}
typedocBuildTS.displayName = 'typedoc:build-ts';

function typedocBuildThemeTS() {
  return src(
    slash(path.join(TYPEDOC_THEME.SRC, 'assets', 'js', 'src', 'theme.ts'))
  )
  .pipe(ts({
    target: 'es2017',
    moduleResolution: 'node',
    module: 'commonjs'
  }))
  .pipe(dest(TYPEDOC_THEME.DIST));
}
typedocBuildThemeTS.displayName = 'typedoc:build-theme-ts';

function typedocCopyConfig() {
  const themePath = slash(path.join(__dirname, 'config.json'));
  return src(themePath)
    .pipe(dest(TYPEDOC_THEME.DIST));
}
typedocCopyConfig.displayName = 'typedoc:copy-config';

async function typedocCleanConfig() {
  return await del(slash(`${TYPEDOC_THEME.DIST}\\config.json`), {force: true});
} 
typedocCleanConfig.dispalyName = 'typedoc:clean-config';

module.exports.typedocBuild = parallel(
  series(typedocCleanImages, typedocCopyImages),
  series(typedocCleanStyles, typedocCopyStyles),
  
  series(
    series(typedocCleanJS, typedocCleanThemeJS),
    typedocBuildThemeTS,
    typedocBuildTS, 
    typedocMinifyJS),
    
  series(typedocCleanHbs, typedocCopyHbs),
  series(typedocCleanConfig, typedocCopyConfig),
  // typedocBuildThemeTS
  // typedocCleanImages,
  // typedocCleanConfig,
  // typedocCleanHbs,
  // series(typedocCleanThemeJS, typedocCleanJS),
  // typedocCleanStyles,
  // typedocCleanThemeJS
);