const popupOpenButton = document.querySelector('.profile__button-edit');
const popupCloseButton = document.querySelector('.popup__button-close');
const popup = document.querySelector('.popup');
const popupButtonSave = document.querySelector('.popup__button-save');
const popupForm = document.querySelector('.popup__container');
const popupUserName = document.querySelector('.popup__user-name');
const popupUserDescription = document.querySelector('.popup__user-description');
const profileUserName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

function openPopup() {
  popupUserName.value = profileUserName.textContent;
  popupUserDescription.value = profileDescription.textContent;
  popup.classList.add('popup_opened');
}
console.log(profileUserName);
function closedPopup() {
  popup.classList.remove('popup_opened');
}

popupOpenButton.addEventListener('click', openPopup);

function formSubmitHandler (evt) {
  evt.preventDefault();

    profileUserName.textContent = popupUserName.value;
    profileDescription.textContent = popupUserDescription.value;

    closedPopup();

}
popupCloseButton.addEventListener('click', closedPopup);
popupButtonSave.addEventListener('click', formSubmitHandler);
popupForm.addEventListener('submit', formSubmitHandler);
