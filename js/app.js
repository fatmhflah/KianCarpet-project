$(document).ready(function() {
    $(window).scroll(function () {
        var showAfter = 800;
        if ($(this).scrollTop() > showAfter) {
            $('.back-to-top').addClass('show');
        } else {
            $('.back-to-top').removeClass('show');
        }
    })


    $('.back-to-top').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
})