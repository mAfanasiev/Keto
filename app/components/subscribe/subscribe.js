'use strict';

$(function () {
  var Regex = {
    EMAIL: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/
  };

  var $form = $('.subscribe__form');
  var $input = $('.subscribe__input');
  var $label = $('.subscribe__label');
  var $checkbox = $('.subscribe__checkbox[type="checkbox"]');
  var $button = $('.subscribe__button');

  var checkValidityState = function () {
    var predicat = true;

    if ($input.hasClass('valid') && $checkbox.prop('checked')) {
      predicat = false;
    }

    $button.attr('disabled', predicat)
  };

  $form.submit(function(submitEvent) {
    submitEvent.preventDefault();
    window.location.href = "get.html";
  });

  $input.on('input', function (evt) {
    var regex = Regex.EMAIL;
    var $this = $(this);
    var value = $this.val();
    evt.preventDefault();

    checkValidityState();
    if (!regex.test(value)) {
      $this.removeClass('valid').addClass('invalid');
      return;
    }

    $this.removeClass('invalid').addClass('valid');
  });

  $label.change(function (evt) {
    evt.preventDefault();
    checkValidityState();
  });

  checkValidityState();
});