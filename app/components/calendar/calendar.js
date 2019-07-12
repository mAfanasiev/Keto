'use strict';

$(function () {
  var $weeks = $('.week');
  var $activeWeek = null;
  var $nextWeekButton = $('.calendar__weeks-control.next');
  var $prevWeekButton = $('.calendar__weeks-control.prev');
  var $dayButtons = $('.calendar__day-button');

  var setWeekControlsState = function () {
    var $nextWeek = $activeWeek.next();
    var $prevWeek = $activeWeek.prev();

    $nextWeekButton.attr('disabled', !$nextWeek.length);
    $prevWeekButton.attr('disabled', !$prevWeek.length);
  };
  
  var setInitState = function () {
    $activeWeek =  $weeks.first().fadeIn().addClass('active');
    $activeWeek.siblings().hide();
    $weeks.each(function () {
      $(this).find('.week__day').first().addClass('active').siblings().hide();
    });
    setWeekControlsState();
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

  $nextWeekButton.click(function () {
    var $nextWeek = $activeWeek.next();
    if ($nextWeek.length) {
      $nextWeek.fadeIn().addClass('active');
      $nextWeek.siblings().hide().removeClass('active');
      $activeWeek = $nextWeek;
      setDayButton();
      setWeekCounter();
    }
    setWeekControlsState();
  });

  $prevWeekButton.click(function () {
    var $prevWeek = $activeWeek.prev();
    if ($prevWeek.length) {
      $prevWeek.fadeIn().addClass('active');
      $prevWeek.siblings().hide().removeClass('active');
      $activeWeek = $prevWeek;
      setDayButton();
      setWeekCounter();
    }
    setWeekControlsState();
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