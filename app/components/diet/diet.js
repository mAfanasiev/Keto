'use strict';

$(function () {
  var $modals = $('.diet-modals');
  var $modalItems = $('.diet-modals__item');
  var $modalGuide = $modals.find('.modal-guide');
  var $modalShopping = $modals.find('.modal-shopping');
  var $modalClose = $modals.find('.diet-modals__close');
  var $calendarButtons = $('.calendar__button');

  var getScrollbarWidth = function () {
    return window.innerWidth - document.documentElement.clientWidth;
  };

  var setOverflowToDocument = function (boolean) {
    if (boolean) {
      $('html').css({
        'overflow': 'hidden',
        'margin-right': getScrollbarWidth()
      });
      return;
    } else {
      $('html').removeAttr('style');
    }
  };

  var closeModals = function () {
    setOverflowToDocument(false);
    $modalGuide.fadeOut();
    $modalShopping.fadeOut();
    $modals.fadeOut();
    $(document).off('click', onDocumentClick);
  };

  var onDocumentClick = function (evt) {
    var $target = $(evt.target);
    if (!$target.closest($modalItems).length) {
      closeModals();
    }
  };

  $calendarButtons.click(function (evt) {
    var $this = $(this);
    evt.stopPropagation();
    $modals.show();
    setOverflowToDocument(true);
    if ($this.hasClass('show-guide')) {
      $modalGuide.fadeIn();
    } else if ($this.hasClass('show-shopping')) {
      $modalShopping.fadeIn();
    }

    $(document).click(onDocumentClick);
  });

  $modalClose.click(function () {
    closeModals();
  });
});