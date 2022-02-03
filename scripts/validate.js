//настройки при вызове функции enableValidation
const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button-save_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: '.popup__input-error',
  errorActiveClass: 'popup__input-error_active'
}

function submitForm(evt) {
  evt.preventDefault();
}

//добавление ошибки
function showError(input, errorContainer, config) {
  input.classList.add(config.inputErrorClass);
  errorContainer.classList.add(config.errorActiveClass);
  errorContainer.textContent = input.validationMessage;
}

//скрытие ошибки
function hideError(input, errorContainer, config) {
  input.classList.remove(config.inputErrorClass);
  errorContainer.classList.remove(config.errorActiveClass);
  errorContainer.textContent = '';
}

//состояние кнопки
function toggleButton(form, config) {
  const button = form.querySelector(config.submitButtonSelector);
  const isFormValid = form.checkValidity();

  if (isFormValid) {
    button.classList.remove(config.inactiveButtonClass);
    button.removeAttribute('disabled');
  } else {
    button.classList.add(config.inactiveButtonClass);
    button.setAttribute('disabled', true);
  }
}

//валидацияя инпутов с вызовом hide() или show()
function validateInput(form, input, config) {
  const errorContainer = form.querySelector(`#${input.id}-error`);

  if (input.validity.valid) {
    hideError(input, errorContainer, config);

  } else {
    showError(input, errorContainer, config);
  }

  toggleButton(form, config);
}

//убираем ошибки валидации после закрытия попапа
function hideErrorForm(form, config) {
  const inputs = form.querySelectorAll(config.inputSelector);
  const errors = form.querySelectorAll(config.errorClass);

  inputs.forEach((input) => {
    errors.forEach((error) => hideError(input, error, config));
  });
}

//выбираем формы и поля для валидации
function enableValidation({ formSelector, inputSelector, ...rest }) {
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

enableValidation(config);
