const popupOpenButton = document.querySelector('.profile__button-edit');
const popupCloseButton = document.querySelector('.popup__button-close');
const popup = document.querySelector('.popup');
const popupForm = document.querySelector('.popup__container');
const popupUserName = document.querySelector('.popup__input_type_name');
const popupUserDescription = document.querySelector('.popup__input_type_job');
const profileUserName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

function openPopup() {
  popupUserName.value = profileUserName.textContent;
  popupUserDescription.value = profileDescription.textContent;
  popup.classList.add('popup_opened');
}

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
popupForm.addEventListener('submit', formSubmitHandler);
