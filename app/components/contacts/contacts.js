'use strict';

$(function () {
  var Regex = {
    EMAIL: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/
  };

  var $input = $('.contacts__input');
  var $button = $('.contacts__button');
  var $back = $('.button-back');

  var checkValidityState = function () {
    var predicat = true;

    if ($input.hasClass('valid')) {
      predicat = false;
    }

    $button.attr('disabled', predicat)
  };

  $input.on('input', function (evt) {
    var regex = Regex.EMAIL;
    var $this = $(this);
    var value = $this.val();
    evt.preventDefault();

    if (!regex.test(value)) {
      $this.removeClass('valid').addClass('invalid');
      checkValidityState();
      return;
    }

    $this.removeClass('invalid').addClass('valid');
    checkValidityState();
  });

  checkValidityState();

  $back.click(function () {
    // if (window.history.length) {
    //   window.history.back();
    //   return;
    // }
    // window.location.href = "index.html";
  });
});