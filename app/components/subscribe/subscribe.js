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

// $(function () {
//   var $input = $('.popup__input[type="email"]');

//   $input.on('keyup input', function () {
//     console.log(true)
//   });
// });