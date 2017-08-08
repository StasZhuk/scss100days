$(document).ready(function () {

    // CHALLENGE 2
    $('.burger__wrap').on('click', function () {
        $(this).toggleClass('active');
        $(this).removeClass('no-animation');
    });
    // CHALLENGE 3
    $('.challenge__3 .btn').on('click', function () {
        console.log('click');
        $('.btn').removeClass('active');
        $('.circle').removeClass('no-animation');
    });
    // CHALLENGE 4
    $('.challenge__4 .frame').hover(
        function () {
            $(this).removeClass("no-animation");
        },
        function () {
            $(this).addClass("no-animation");
        }
    );
});
