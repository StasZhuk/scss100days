'use strict';

module.exports = function () {
    $.gulp.task('change:url', function () {
        var urlAdjuster = require('gulp-css-url-adjuster');
        return $.gulp.src('./node_modules/font-awesome/css/font-awesome.css').
        pipe(urlAdjuster({
                replace: ['../fonts', '../fonts/fontAwesome/'],
            }))
            .pipe($.gulp.dest('./node_modules/font-awesome/css/font-awesome-modify'));
    });
};