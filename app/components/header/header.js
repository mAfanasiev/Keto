$('.header__menu').click(function () {
    $('.header__menu-main').fadeIn();
    $('.header__menu-overlay').addClass('active');
    $(document.documentElement).addClass('overflow');
    $('.header__menu').css('opacity', 0);
});
$('.header__menu-close, .header__menu-overlay, .header__menu-link').click(function () {
    $('.header__menu-main').fadeOut();
    $('.header__menu-overlay').removeClass('active');
    $(document.documentElement).removeClass('overflow');
    $('.header__menu').css('opacity', 1);
});
$('.header__menu-link').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
});

var reg = /\/?(\w+)/;
var result;

if (reg.exec(window.location.pathname)) {
    result = reg.exec(window.location.pathname);
    $('#' + result[1]).addClass('active')
}
