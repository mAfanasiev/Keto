$('.faq__item-open').click(function () {
   $(this).closest('.faq__item').toggleClass('active').children('.faq__item-text').slideToggle("slow");
});

$('.faq__back').click(function () {
    window.history.back();
});