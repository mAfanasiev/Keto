'use strict';

$(document).ready(function () {
  if (window.localStorage.getItem('quiz') !== null) {
    quiz = JSON.parse(window.localStorage.getItem('quiz'));
  } else {}

  if (quiz.gender === 'female') {
    document.querySelector('body').classList.add('female');
  } else {
    document.querySelector('body').classList.add('male');
  }
});

$(function () {
  var CARD_TOGGLE = 'result-card--about';
  var $resultScroll = $('.result__scroll');

  $('.result-card__about-show').click(function (evt) {
    var $cards = $('.result-card');
    var $button = $(evt.target);
    var $parent = $button.parent();
    evt.preventDefault();

    $parent.toggleClass(CARD_TOGGLE);
    $parent.siblings().removeClass(CARD_TOGGLE);

    var onDocumentClick = function (evt) {
      var $this = $(evt.target);
      if (!$this.closest($cards).length) {
        $cards.removeClass(CARD_TOGGLE);
        $(document).unbind('click', onDocumentClick);
      }
    };

    $(document).click(onDocumentClick);
  });

  $resultScroll.click(function (evt) {
    evt.preventDefault();
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 500);
  });
});