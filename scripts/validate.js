// включение валидации вызовом enableValidation
// все настройки передаются при вызове
enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: '.popup__button-save_inactive',
  inputErrorClass: '.popup__input_type_error',
  errorClass: '.popup__input-error',
  errorActiveClass: '.popup__input-error_active'
});
console.log(submitButtonSelector)
function submitForm(evt) {
  evt.preventDefault();
}

function showError(input, errorContainer, {inputErrorClass, errorActiveClass}) {
  input.classList.add(inputErrorClass);
  errorContainer.classList.add(errorActiveClass);
  errorContainer.textContent = input.validationMessage;
}

function hideError(input, errorContainer, { inputErrorClass, errorActiveClass }) {
  input.classList.remove(inputErrorClass);
  errorContainer.classList.remove(errorActiveClass);
  errorContainer.textContent = '';
}

function toggleButton(form, { submitButtonSelector, inactiveButtonClass }) {
  const button = form.querySelector(submitButtonSelector);
  const isFormValid = form.checkValidity();
  console.log(isFormValid)
  if (isFormValid) {
    button.classList.remove(inactiveButtonClass);
    button.setAttribute('disabled', '')
  } else {
    button.classList.add(inactiveButtonClass);
    button.setAttribute('disabled', 'true')
  }

}

function validateInput(form, input, classes) {
  
  const errorContainer = form.querySelector(`#${input.id}-error`);
  
  if (input.validity.valid) {
    hideError(input, errorContainer, classes);

  } else {
    showError(input, errorContainer, classes);  
  }

  toggleButton(form, classes);
} 



function enableValidation ({ formSelector, inputSelector, ...rest }) {
  const forms = document.querySelectorAll(formSelector);
  
  forms.forEach(form => {
    form.addEventListener('submit', submitForm);

    const inputs = form.querySelectorAll(inputSelector);
   
    inputs.forEach(input => {
      input.addEventListener('input', () => {
        validateInput(form, input, rest)
      });
    });
  });

}
