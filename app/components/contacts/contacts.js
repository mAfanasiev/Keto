'use strict';

$(function () {
  $('.button-back').click(function () {
    if (window.history.length) {
      window.history.back();
      return;
    }
    window.location.href = "index.html";
  });
});