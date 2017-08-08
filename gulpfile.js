'use strict';

global.$ = {
  package: require('./package.json'),
  config: require('./gulp/config'),
  path: {
    source: './source',
    task: require('./gulp/paths/tasks.js'),
    cssFoundation: require('./gulp/paths/css.foundation.js'),
  },
  gulp: require('gulp'),
  del: require('del'),
  buffer: require('vinyl-buffer'),
  merge: require('merge-stream'),
  browserSync: require('browser-sync').create(),
  smartgrid: require('smart-grid'),
  gcmq: require('gulp-group-css-media-queries'),
  fs: require('fs'),
  gp: require('gulp-load-plugins')()
};

$.path.task.forEach(function(taskPath) {
  require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
  'clean',
  $.gulp.parallel(
    'sass',
    'pug',
    'webpack',
    'copy:image',
    'copy:font',
    'copy:js',
    'css:foundation',
    'sprite:svg',
    'sprite:png'
   
  ),
  $.gulp.parallel(
    'watch',
    'serve'
  )
));
