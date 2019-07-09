$(function () {
  var currentStep = 0;
  var ACTIVE_CLASS = 'active';
  var $weeks = $('.week');
  var $weeksControl = $('.calendar__weeks-controls').find('.calendar__weeks-control');
  var $days = $weeks.find('.week__day');
  var $daysControl = $('.calendar__days-controls').find('.calendar__day-button');

  // init state
  $weeks.hide().removeClass(ACTIVE_CLASS);
  $weeks.first().show().addClass(ACTIVE_CLASS);
  $days.hide().removeClass(ACTIVE_CLASS);
  $days.filter(':first-of-type').show().addClass(ACTIVE_CLASS);

  var Calendar = function () {
    this._weeks = $('.week');
    this._currentWeek = $('.week.active');

    this._hideCurrentWeek = function () {
      this._currentWeek.hide().removeClass(ACTIVE_CLASS);
    };

    this._setInitialWeek = function () {
      this._weeks.first().show().addClass(ACTIVE_CLASS);
    };

    this.setNextWeek = function () {
      var $next = this._currentWeek.next();

      this._hideCurrentWeek();

      if ($next.length) {
        $next.show().addClass(ACTIVE_CLASS);
      } else {
        this._setInitialWeek();
      }
      this._currentWeek = $('.week.active');
    };

    this.setPrevWeek = function () {
      var $prev = this._currentWeek.prev();

      this._hideCurrentWeek();

      if ($prev.length) {
        $prev.show().addClass(ACTIVE_CLASS);
      } else {
        this._setInitialWeek();
      }

      this._currentWeek = $('.week.active');
    };
  };

  var calendar = new Calendar();
  // console.log(calendar);

  $weeksControl.click(function (evt) {
    var $this = $(this);
    evt.preventDefault();

    if ($this.hasClass('next')) {
      calendar.setNextWeek();
      return;
    }
    calendar.setPrevWeek();
  });

  // var setWeeksInitState = function () {
  //   $weeks.hide().removeClass(ACTIVE_CLASS);
  //   $weeks.first().show().addClass(ACTIVE_CLASS);
  // };

  // var setDaysInitState = function () {
  //   $days.hide().removeClass(ACTIVE_CLASS);
  //   $days.first().show().addClass(ACTIVE_CLASS);
  // };

  // var setActiveDay = function (index) {
  //   var $activeWeek = $weeks.filter('.' + ACTIVE_CLASS);
  //   $activeWeek.find($days).hide().removeClass(ACTIVE_CLASS);
  //   $activeWeek.find($days).eq(index).show().addClass(ACTIVE_CLASS);
  // };

  // var setInitState = function () {
  //   $daysControl.removeClass(ACTIVE_CLASS);
  //   $daysControl.first().addClass(ACTIVE_CLASS);

  //   setWeeksInitState();
  //   setDaysInitState();
  // };

  // setInitState();

  // $weeksControl.click(function (evt) {
  //   var $activeWeek = $weeks.filter('.' + ACTIVE_CLASS);
  //   var $nextWeek = $activeWeek.next();
  //   evt.preventDefault();

  //   $activeWeek.hide().removeClass(ACTIVE_CLASS);

  //   if ($nextWeek.length) {
  //     $nextWeek.show().addClass(ACTIVE_CLASS);
  //     setActiveDay(0);
  //   } else {
  //     $weeks.first().show().addClass(ACTIVE_CLASS);
  //     setActiveDay(0);
  //   }
  // });

  // $daysControl.click(function (evt) {
  //   var $this = $(this);
  //   var $thisIndex = $daysControl.index($this);
  //   evt.preventDefault();

  //   $daysControl.removeClass(ACTIVE_CLASS);
  //   $this.addClass(ACTIVE_CLASS);
  //   setActiveDay($thisIndex);
  // });
});