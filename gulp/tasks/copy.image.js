'use strict';

module.exports = function () {
  $.gulp.task('copy:image', function () {

    var images = $.gulp.src('./source/images/general/**/*.*', {
        since: $.gulp.lastRun('copy:image')
      })
      .pipe($.gp.imagemin())
      .pipe($.gulp.dest($.config.root + '/assets/img'));

    var favicon = $.gulp.src('./source/favicon.ico', {
        since: $.gulp.lastRun('copy:image')
      })
      .pipe($.gp.imagemin())
      .pipe($.gulp.dest($.config.root));

    return $.merge(images, favicon);
  });
};