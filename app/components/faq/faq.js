$('.faq__item').click(function () {
   $(this).toggleClass('active').children('.faq__item-text').slideToggle("slow");
});

$('.faq__back').click(function () {
    window.history.back();
});