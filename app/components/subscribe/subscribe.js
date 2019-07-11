'use strict';

$(function () {
  $('.subscribe__form').submit(function(submitEvent) {
    submitEvent.preventDefault();
    window.location.href = "get.html";
  });
});