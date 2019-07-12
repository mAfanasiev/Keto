$('.faq__item').click(function () {
   $(this).toggleClass('active').children('.faq__item-text').slideToggle("slow");
});

var hash;

var exception = {
    'faq': 1,
    'general': 1,
    'contacts': 1
};

if (reg.exec(window.location.pathname)) {
    if(!exception[result[1]]) {
        hash = result[1];
        window.localStorage.setItem('hash', hash);
    }
} else {
    window.localStorage.setItem('hash', 'index');
}

$('.faq__back--js').click(function (e) {
    e.preventDefault();
    if(window.localStorage.getItem('hash')) {
        var val = window.localStorage.getItem('hash');
        window.location.href = val +'.html';
    } else {
        window.location.href = 'index.html';
    }
});
