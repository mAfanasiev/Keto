$('.header__menu').click(function () {
    $('.header__menu-main').fadeIn();
    $('.header__menu-overlay').addClass('active');
    $(document.documentElement).addClass('overflow');
});
$('.header__menu-close, .header__menu-overlay').click(function () {
    $('.header__menu-main').fadeOut();
    $('.header__menu-overlay').removeClass('active');
    $(document.documentElement).removeClass('overflow');

});
