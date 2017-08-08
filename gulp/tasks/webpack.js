'use strict';

module.exports = function() {
  $.gulp.task('webpack', function() {
    return $.gulp.src($.path.source + '/js/pages/index.js')
        .pipe($.gp.webpack({
            entry: {
                index: $.path.source + '/js/pages/index.js',
            },
            output: {
                filename: '[name].js'
            }
        }))
        .pipe($.gulp.dest($.config.root + '/assets/js'))
  })
};