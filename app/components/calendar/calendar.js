'use strict';

$(function () {
  var $weeks = $('.week');
  var $activeWeek = null;
  var $dayButtons = $('.calendar__day-button');

  var setInitState = function () {
    $activeWeek =  $weeks.first().fadeIn().addClass('active');
    $activeWeek.siblings().hide();
    $weeks.each(function () {
      $(this).find('.week__day').first().addClass('active').siblings().hide();
    });
  }
  setInitState();

  var setWeekCounter = function () {
    var activeWeekIndex = $activeWeek.index();
    $('.calendar__weeks-counter .value').text(activeWeekIndex + 1);
  };

  var setDayButton = function () {
    var activeDayIndex = $activeWeek.find('.week__day.active').index();
    $dayButtons.eq(activeDayIndex).addClass('active').siblings().removeClass('active');
  };

  $('.calendar__weeks-control.next').click(function () {
    var $nextWeek = $activeWeek.next();
    if ($nextWeek.length) {
      $nextWeek.fadeIn().addClass('active');
      $nextWeek.siblings().hide().removeClass('active');
      $activeWeek = $nextWeek;
      setDayButton();
      setWeekCounter();
    }
  });

  $('.calendar__weeks-control.prev').click(function () {
    var $prevWeek = $activeWeek.prev();
    if ($prevWeek.length) {
      $prevWeek.fadeIn().addClass('active');
      $prevWeek.siblings().hide().removeClass('active');
      $activeWeek = $prevWeek;
      setDayButton();
      setWeekCounter();
    }
  });

  $dayButtons.click(function () {
    var $this = $(this);
    var index = $this.index();
    var $day = $activeWeek.find('.week__day').eq(index);
    if ($day.length) {
      $day.fadeIn().addClass('active');
      $day.siblings().hide().removeClass('active');
      $this.addClass('active').siblings().removeClass('active');
    }
  });
});