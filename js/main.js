window.addEventListener('DOMContentLoaded', () => {

    const trigger = document.querySelector('.header__button'),
          close = document.querySelector('.modal__close'),
          modal = document.querySelector('.modal');

    trigger.addEventListener('click', () => {
        modal.classList.toggle('modal--visible');
    });

    close.addEventListener('click', () => {
        modal.classList.toggle('modal--visible');
    });

    modal.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            modal.classList.toggle('modal--visible');
        }
    });

      //Маска и валидация телефона в модалке
  $('.modal__form').validate({
    errorClass: "invalid",
    rules: {
      modalTel: "required",
      modalName: "required"
    },
    messages: {
      modalTel: "Телефон обязателен",
      modalName: "Имя обязательно"
    }
  });

  //Маска
  $('input[name="modalTel"]').mask('+7 (000) 000-00-00');
});