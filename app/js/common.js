$(document).ready(function() {
    $('.questions-box__title').click(function () {
       $(this).toggleClass('open').siblings('.questions-box__body').slideToggle();
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 10) {
            $('header').addClass('fixed');
        } else {
            $('header').removeClass('fixed');
        }
    });
});
