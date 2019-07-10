$(document).ready(function () {
  if (window.localStorage.getItem('quiz') !== null) {
    quiz = JSON.parse(window.localStorage.getItem('quiz'));
  } else {}

  if (quiz.gender === 'female') {
    document.querySelector('body').classList.add('female');
  } else {
    document.querySelector('body').classList.add('male');
  }

  console.log(window.history);

  $('.button-back').click(function () {
    if (window.history.length) {
      window.history.back();
      return;
    }
    window.location.href = "index.html";
  });
});