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


    $('.close-menu').click(function () {
        $('.mobile-header-nav').fadeToggle()
        $('.overlay').fadeToggle()
    })
    $('.mobile-header__close').click(function () {
        $('.mobile-header-nav').fadeToggle()
        $('.overlay').fadeToggle()
    })

    $('.mobile-categories-title').click(function () {
        $(this).addClass('active')
        $('.mobile-pages-title').removeClass('active')
        $('.menu-list').css('display', 'none')
        $('.menu-category').css('display', 'block')

    })
    $('.mobile-pages-title').click(function () {
        $(this).addClass('active')
        $('.mobile-categories-title').removeClass('active')
        $('.menu-list').css('display', 'block')
        $('.menu-category').css('display', 'none')


    })

    $('.menu-title').click(function () {
        // $(this).parent().addClass('active')
        $(this).parent().find('ul.menu-dropdown').toggle()
        $(this).find('.menu-upicon').toggle()
        $(this).find('.menu-downicon').toggle()

    })

    $('.cart-wrapper').click(function (e) {
        e.stopPropagation()
        $('.box-cart').fadeToggle()
        $('.overlay').fadeToggle()
    })
    $('.close-cart').click(function () {
        $('.box-cart').fadeToggle()
        $('.overlay').fadeToggle()
    })
})