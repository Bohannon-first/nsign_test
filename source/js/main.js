const buttonsForm = document.querySelectorAll('.button');

// Отмена отправки формы по клику на кнопку
buttonsForm.forEach((btn) => {
  btn.addEventListener('click', (evt) => {
    evt.preventDefault();
  });
});
