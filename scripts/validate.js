//настройки при вызове функции enableValidation
enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button-save_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: '.popup__input-error',
  errorActiveClass: 'popup__input-error_active'
});

function submitForm(evt) {
  evt.preventDefault();
}

//добавление ошибки
function showError(input, errorContainer, { inputErrorClass, errorActiveClass }) {
  input.classList.add(inputErrorClass);
  errorContainer.classList.add(errorActiveClass);
  errorContainer.textContent = input.validationMessage;
}

//скрытие ошибки
function hideError(input, errorContainer, { inputErrorClass, errorActiveClass }) {
  input.classList.remove(inputErrorClass);
  errorContainer.classList.remove(errorActiveClass);
  errorContainer.textContent = '';
}

//состояние кнопки
function toggleButton(form, { submitButtonSelector, inactiveButtonClass }) {
  const button = form.querySelector(submitButtonSelector);
  const isFormValid = form.checkValidity();

  if (isFormValid) {
    button.classList.remove(inactiveButtonClass);
    button.removeAttribute('disabled');
  } else {
    button.classList.add(inactiveButtonClass);
    button.setAttribute('disabled', true);
  }
}

//валидацияя инпутов с вызовом hide() или show()
function validateInput(form, input, classes) {
  const errorContainer = form.querySelector(`#${input.id}-error`);

  if (input.validity.valid) {
    hideError(input, errorContainer, classes);

  } else {
    showError(input, errorContainer, classes);
  }

  toggleButton(form, classes);
}

//убираем ошибки валидации после закрытия попапа
function hideErrorForm(form) {
  const inputs = form.querySelectorAll('.popup__input');
  const errors = form.querySelectorAll('.popup__input-error');

  inputs.forEach((input) => {
    input.classList.remove('popup__input_type_error');
  });

  errors.forEach((errorContainer) =>{
    errorContainer.classList.remove('popup__input-error_active');
    errorContainer.textContent = '';
  })
};

//выбор форм и полей валидации с помощью forEach
function enableValidation ({ formSelector, inputSelector, ...rest }) {
  const forms = document.querySelectorAll(formSelector);

  forms.forEach(form => {
    form.addEventListener('submit', submitForm);

    const inputs = form.querySelectorAll(inputSelector);

    inputs.forEach(input => {
      input.addEventListener('input', () => {
        validateInput(form, input, rest);
      });
    });

    toggleButton(form, rest);
  });
}
