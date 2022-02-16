export class Validate {
  constructor (form, config) {
    this._form = form;
    this._inputSelector = config.inputSelector;
    this._submitButton = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._errorActiveClass = config._errorActiveClass;
  }

  submitForm(evt) {
    evt.preventDefault();
  }

  //добавление ошибки
  _showError(input, errorContainer) {
    input.classList.add(this._inputErrorClass);
    errorContainer.classList.add(this._errorActiveClass);
    errorContainer.textContent = input.validationMessage;
  }

  //скрытие ошибки
  _hideError(input, errorContainer) {
    input.classList.remove(this._inputErrorClass);
    errorContainer.classList.remove(this._errorActiveClass);
    errorContainer.textContent = '';
  }

  //состояние кнопки
  toggleButton() {
    this._button = this._form.querySelector(this._submitButton);
    const isFormValid = this._form.checkValidity();

    if (isFormValid) {
      this._button.classList.remove(this._inactiveButtonClass);
      this._button.removeAttribute('disabled');
    } else {
      this._button.classList.add(this._inactiveButtonClass);
      this._button.setAttribute('disabled', true);
    }
  }

  //валидацияя инпутов с вызовом hide() или show()
  _validateInput(input) {
    const errorContainer = this._form.querySelector(`#${input.id}-error`);

    if (input.validity.valid) {
      this._hideError(input, errorContainer);

    } else {
      this._showError(input, errorContainer);
    }

    this.toggleButton();
  }

  //убираем ошибки валидации после закрытия попапа
  hideErrorForm() {
    this._inputs = this._form.querySelectorAll(this._inputSelector);
    this._errors = this._form.querySelectorAll(this._errorClass);

    this._inputs.forEach((input) => {
      this._errors.forEach((error) => this._hideError(input, error));
    });
  }


  enableValidation = () => {
    this._form.addEventListener('submit', this.submitForm);
    this._inputs = this._form.querySelectorAll(this._inputSelector);

    this._inputs.forEach(input => {
      input.addEventListener('input', () => {
        this._validateInput(input);
      });
    });

    this.toggleButton();

  }

}
