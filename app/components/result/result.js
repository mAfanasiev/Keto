'use strict';

(function () {
  var CARD_TOGGLE_CLASS_NAME = 'resume-card--about';
  var ABOUT_BTN_CLASS_NAME = 'resume-card__about-show';

  var onCardShowBtnClick = function (clickEvt) {
    // clickEvt.preventDefault();
    var target = clickEvt.target;

    if (target.classList.contains(ABOUT_BTN_CLASS_NAME)) {
      var card = target.parentNode;
      card.classList.toggle(CARD_TOGGLE_CLASS_NAME);
    }
  };
  
  document.addEventListener('click', onCardShowBtnClick);
})();