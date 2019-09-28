'use strict';

(function () {
  var formScreens = document.querySelectorAll('.form > div');
  var buttonsNext = document.querySelectorAll('.button-next');
  var buttonsPrev = document.querySelectorAll('.button-prev');
  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
  }

  buttonsNext.forEach(function (element, index) {
    element.addEventListener('click', function (evt) {
      var activeScreen = document.querySelector('.form-activeScreen');
      evt.preventDefault();

      activeScreen.classList.add('visually-hidden');
      activeScreen.classList.remove('form-activeScreen');
      formScreens[index + 1].classList.add('form-activeScreen');
      formScreens[index + 1].classList.remove('visually-hidden');
    });
  });

   buttonsPrev.forEach(function (element, index) {
    element.addEventListener('click', function (evt) {
      var activeScreen = document.querySelector('.form-activeScreen');
      evt.preventDefault();

      activeScreen.classList.add('visually-hidden');
      activeScreen.classList.remove('form-activeScreen');
      formScreens[index].classList.add('form-activeScreen');
      formScreens[index].classList.remove('visually-hidden');
    });
  });

})();
