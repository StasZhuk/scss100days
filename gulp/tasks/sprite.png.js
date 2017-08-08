'use strict';

module.exports = function () {
  $.gulp.task('sprite:png', function () {
    var spriteData = $.gulp.src(['./source/images/general/**/*.png', '!./source/images/general/**/_*.png'])
      .pipe($.gp.spritesmith({
        imgName: 'sprite.png',
        cssName: 'png.sprite.css'
      }));

    // Pipe image stream through image optimizer and onto disk 
    var imgStream = spriteData.img
      // DEV: We must buffer our stream into a Buffer for `imagemin` 
      .pipe($.buffer())
      .pipe($.gp.imagemin())
      .pipe($.gulp.dest($.config.root + '/assets/img/sprite/'));

    // Pipe CSS stream through CSS optimizer and onto disk 
    var cssStream = spriteData.css
      .pipe($.gp.csso())
      .pipe($.gulp.dest($.config.root + '/assets/css/sprite'));

    // Return a merged stream to handle both `end` events 
    return $.merge(imgStream, cssStream);
  });
};

// Generate our spritesheet