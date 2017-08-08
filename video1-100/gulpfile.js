var gulp = require('gulp'),
    sass = require('gulp-sass'),
    bs = require('browser-sync'),
    gcmq = require('gulp-group-css-media-queries'),
    smartgrid = require('smart-grid'),
    notify = require("gulp-notify");
 
/* It's principal settings in smart grid project */
var settings = {
    outputStyle: 'scss', /* less || scss || sass || styl */
    columns: 12, /* number of grid columns */
    offset: "30px", /* gutter width px || % */
    container: {
        maxWidth: '1300px', /* max-width оn very large screen */
        fields: '30px' /* side fields */
    },
    breakPoints: {
        lg: {
            'width': '1170px', /* -> @media (max-width: 1100px) */
            'fields': '30px' /* side fields */
        },
        md: {
            'width': '960px',
            'fields': '15px'
        },
        sm: {
            'width': '780px',
            'fields': '15px'
        },
        xs: {
            'width': '480px',
            'fields': '15px'
        }
        /* 
        We can create any quantity of break points.
 
        some_name: {
            some_width: 'Npx',
            some_offset: 'N(px|%)'
        }
        */
    }
};

//TASKS

// SMARTGRID
gulp.task('smartgrid', function () {
    return smartgrid('./src/sass/layout', settings);

});

//SCSS
gulp.task('sass', function () {
    return gulp.src("src/sass/main.scss")
    .pipe(sass())
    .on('error', notify.onError(function(err) {
        return {
            title: "Styles",
            message: err.message
        };
    }))
    .pipe(gcmq())
    .pipe(gulp.dest("src/css/"))
    .pipe(bs.reload({
        stream: true
    }))
});

gulp.task('bs', function () {
    return bs({
        server: {
            baseDir: './src'
        }
    });
});

gulp.task('watch', ['bs', 'sass'], function () {
    gulp.watch('src/sass/**/*.scss', ['sass']);
    gulp.watch('src/**/*.html', bs.reload);
    gulp.watch('src/js/**/*.js', bs.reload);
});

gulp.task('default', ['sass', 'watch']);