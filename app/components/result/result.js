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

(function () {
  var CARD_TOGGLE_CLASS_NAME = 'result-card--about';
  var ABOUT_BTN_CLASS_NAME = 'result-card__about-show';

  var onCardShowBtnClick = function (clickEvt) {
    var target = clickEvt.target;

    if (target.classList.contains(ABOUT_BTN_CLASS_NAME)) {
      var card = target.parentNode;
      card.classList.toggle(CARD_TOGGLE_CLASS_NAME);
    }
  };
  
  document.addEventListener('click', onCardShowBtnClick);
})();