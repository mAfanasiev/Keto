$( document ).ready(function() {
    // если нужно что бы все елементы были выбраны нужно в обьекте tests все масивы заполнить цыфрами от 0 до количества елементов в тесте минус 1
    var quiz = {
        hash:'test1',
        animation: false,
        tests: {
            test2: '',
            test3: [],
            test4: [],
            test5: [],
            test6: '',
            test7: []
        }
    };
    if (window.localStorage.getItem('quiz') !== null) {
        quiz = JSON.parse(window.localStorage.getItem('quiz'));
    } else {}
    if (quiz.gender === "female") {
        document.querySelector('body').classList.add('female');
    }
    if(quiz.hash) {
        $('.test').attr('id', quiz.hash);
        $('.test--content').removeClass('active');
        $('section #' + quiz.hash).addClass('active');
    }
    if(quiz.animation) {
        startAnim();
    }

    for (var key in quiz.tests) {
        if (typeof quiz.tests[key] === 'number' && quiz.tests[key].length !== 0) {
            $('section #' + key + ' .test__content').children().eq(quiz.tests[key]).addClass('active');
        }
        if (typeof quiz.tests[key] === 'object' && quiz.tests[key].length !== 0) {
            for (var i = 0; i < quiz.tests[key].length; i++) {
                $('section #' + key + ' .test__content').children().eq(quiz.tests[key][i]).addClass('active');
            }
        }
    }

    function nextScreen(that, id) {
        $(that).closest('.test').attr('id', id);
        $('.test--content').removeClass('active');
        $('section' + ' #' + id).addClass('active');
    }

    function prevScreen(that, id) {
        $(that).closest('.test').attr('id', id);
        $('.test--content').removeClass('active');
        $('section' + ' #' + id).addClass('active');
        quiz.hash = id;
        window.localStorage.setItem('quiz', JSON.stringify(quiz));
    }

    function validate(id, name, next, that) {
        var counter = 0;
        var item = $('section #' + id + ' .' + name);
        console.log(item);
        quiz.tests[id] = [];
        for (var i = 0; i < item.length; i++) {
            if($(item[i]).hasClass('active')) {
                quiz.tests[id].push($(item[i]).index());
            } else {
                counter += 1;
            }
        }
        if (counter === item.length) {
            alert('Нужно что-то выбрать');
        } else {
            nextScreen(that, next);
            quiz.hash = next;
            window.localStorage.setItem('quiz', JSON.stringify(quiz));
        }
    }

    function oneSelect(that, id, thisId) {
        $(that).addClass('active').siblings().removeClass('active');
        quiz.hash = id;
        quiz.tests[thisId] = $(that).index();
        window.localStorage.setItem('quiz', JSON.stringify(quiz));
        nextScreen(that, id);
    }

    $('.test__checkbox, section #test7 .test__content-item').click(function () {
        $(this).toggleClass('active');
    });

    $('.test__nav-help').click(function (e) {
        $(this).data('popup');
        console.log($(this).data('popup'))

        if($(this).data('popup')) {
            $('#'+$(this).data('popup')).fadeIn();
        } else {
            $('#help1').fadeIn();
        }
        $('.help__overlay').addClass('active');
    });

    $('.help__overlay, .help__close').click(function () {
        $('.help').fadeOut();
        $('.help__overlay').removeClass('active');
    });

    $('.test__nav-back').click(function () {
        prevScreen(this, $(this).data('prev'));
    });

    $('.progressBar__circle').click(function () {
        prevScreen(this, $(this).data('prev'));
    });

    $('.test__item--js').click( function (e) {
        quiz.gender = e.target.parentNode.id;
        quiz.hash = 'test2';
        window.localStorage.setItem('quiz', JSON.stringify(quiz));
        $('body').removeClass().addClass(e.target.parentNode.id);
        nextScreen(this, 'test2');
    });

    $('section #test2 .test__content-item').click(function () {
        oneSelect(this, 'test3', 'test2');
    });

    $('section #test3 .test__next').click(function () {
        validate('test3', 'test__checkbox', 'test4', this);
    });

    $('section #test4 .test__next').click(function () {
        validate('test4', 'test__checkbox', 'test5', this);
    });

    $('section #test5 .test__next').click(function () {
        validate('test5', 'test__checkbox', 'test6', this);
    });

    $('section #test6 .test__content-item').click(function () {
        oneSelect(this, 'test7', 'test6');
    });

    $('section #test7 .test__next').click(function () {
        validate('test7', 'test__content-item', 'test8', this);
    });

    $('.test__content-item--js').click(function () {
        $('.test__content-item--last').removeClass('active');
    });

    $('.test__content-item--last').click(function () {
       $(this).siblings().removeClass('active');
    });

    $('.test__tabs-item').click(function () {
       $(this).addClass('active').siblings().removeClass('active');
       $('.test__tabs-system').removeClass('active');
       $('#' + $(this).data('id')).addClass('active')
    });

    $('.test__tabs-input').on('input', function () {
        if ($(this).val().length > $(this).attr('maxLength')) {
            $(this).val($(this).val().slice(0, $(this).attr('maxLength')));
        }
        if($(this).val() && $.trim($(this).val() + '')) {
            $(this).parent().removeClass('error').addClass('active');
        } else {
            $(this).parent().removeClass('active');
        }
    });

    $('.test__tabs-input').keydown(function (e) {
        var charCode = e.which || e.keyCode;

        if(charCode > 47 && charCode < 58 || charCode > 95 && charCode < 106 || charCode === 8 || charCode === 9) {
        } else {
            return false;
        }

    });

    $('.test__tabs-input').blur(function () {
        $(this).val($.trim($(this).val() + ''));
    });

    $('.test__tabs-next').click(function () {
        var counter = 0;
        var parrent = $(this).parent().children('.test__tabs-field');

        for (var i = 0; i < parrent.length; i++) {
            if(!$(parrent.children('.test__tabs-input')[i]).val() || $(parrent.children('.test__tabs-input')[i]).val().length < $(parrent.children('.test__tabs-input')[i]).attr('minLength') ) {
                $(parrent[i]).addClass('error');
                counter += 1;
            } else {
                $(parrent[i]).removeClass('error');
            }
        }

        if(!counter) {
            quiz.hash = 'finish';
            quiz.animation = true;
            window.localStorage.setItem('quiz', JSON.stringify(quiz));
            nextScreen(this, 'finish');
            startAnim();
        }
    });

    function anim1() {

        $($('.finish__text-item')[1]).addClass('active').siblings().removeClass('active');
        $($('.finish__text-item')[2]).removeClass('small');
        if ($(window).width() < 640) {
            $('.finish__text-item').fadeOut();
            $($('.finish__text-item')[4]).fadeIn();
        }
    }

    function anim2() {

        $($('.finish__text-item')[2]).removeClass('small').addClass('active').siblings().removeClass('active');
        $($('.finish__text-item')[0]).addClass('small');

        if ($(window).width() < 640) {
            $('.finish__text-item').fadeOut();
            $($('.finish__text-item')[5]).fadeIn();
        }


    }
    function retarget() {
        quiz.hash = 'test1';
        quiz.animation = false;
        window.localStorage.setItem('quiz', JSON.stringify(quiz));
        window.location.href += 'result.html';
    }

    function startAnim () {
        function updateHandler() {
            if (scoreDisplay !== null) { scoreDisplay.innerHTML = plan.score; }
        }

        var plan = {score: 0},
            scoreDisplay = document.querySelector(".calc-plan");
        var animationP11time = 10;
        var tl_eleven = new TimelineMax();
        tl_eleven
            .fromTo('.finish__circle-path',animationP11time ,{"stroke-dashoffset":730},{"stroke-dashoffset":0, ease:Linear.easeNone})
            .to(plan, animationP11time, {score: 100, roundProps: "score", onUpdate:updateHandler, ease:Linear.easeNone}, 0)
            .fromTo('.tl_slider',animationP11time / 3,{x:"35%"},{x: "-15%", ease: SlowMo.ease.config(0.7, 0.7, false)}, 1)
            .to('.tl_slider',animationP11time / 3,{x: "-30%", onStart:anim1, ease: SlowMo.ease.config(0.7, 0.7, false)}, animationP11time / 3)
            .to('.tl_slider',animationP11time / 3,{x: "-54%", onStart:anim2, ease: SlowMo.ease.config(0.7, 0.7, false)}, 2 * animationP11time / 3)
            .to('.q', 0, {onStart:retarget}, animationP11time + .5);
    }
});

