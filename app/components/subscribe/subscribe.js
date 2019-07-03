$(document).ready(function () {
  if (window.localStorage.getItem('quiz') !== null) {
    var quiz = JSON.parse(window.localStorage.getItem('quiz'));
  }

  if (quiz.gender === 'female') {
    document.querySelector('body').classList.add('female');
  }
});