const popupOpenButton = document.querySelector('.profile__button-edit');
const popupCloseButton = document.querySelector('.popup__button-close');

function openPopup() {
  popup.classList.add('popup_opened');
}

function closedPopup() {
  popup.classList.remove('popup_opened');
}

popupOpenButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closedPopup);

let popup = document.querySelector('.popup');
let popupButtonSave = document.querySelector('.popup__button-save');
let popupUserName = document.querySelector('.popup__user-name');
let popupUserDescription = document.querySelector('.popup__user-description');
console.log('popupUserName');
function formSubmitHandler (evt) {
  evt.preventDefault();

    let popupUserName = popupForm.querySelector('.popup__user-name');
    let popupUserDescription = popupForm.querySelector('.popup__user-description');

    popupUserName.textContent = popupUserName.value;
    popupUserDescription.textContent = popupUserDescription.value;
}
popupButtonSave.addEventListener('click', formSubmitHandler);
popupButtonSave.addEventListener('submit', formSubmitHandler);
