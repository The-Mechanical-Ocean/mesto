import {initialCards} from './initial-cards.js';
import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';

const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button-save_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: '.popup__input-error',
  errorActiveClass: 'popup__input-error_active'
}

//popup menu
const popupAddCard = document.querySelector('.popup_type_add-card');
const popupEditProfile = document.querySelector('.popup_type_edit');
export const popupImage = document.querySelector('.popup_type_image');

//popup form's
const popupFormEdit = popupEditProfile.querySelector('.popup__form');
const popupFormAdd = popupAddCard.querySelector('.popup__form');

//button
const popupOpenButtonEdit = document.querySelector('.profile__button-edit');
const popupOpenButtonAdd =  document.querySelector('.profile__button-add');
const popupCloseButtonEdit = popupEditProfile.querySelector('.popup__button-close_type_edit');
const popupCloseButtonAdd =  popupAddCard.querySelector('.popup__button-close_type_add-card');
const popupCloseButtonImage = popupImage.querySelector('.popup__button-close_type_img-card');

//popup input's
const popupUserName = document.querySelector('.popup__input_type_name');
const popupUserDescription = document.querySelector('.popup__input_type_job');
const popupNameImg = document.querySelector('.popup__input_type_name-img');
const popupNameLink = document.querySelector('.popup__input_type_link');

//html fields
const profileUserName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

//new fields
export const popupImgField = document.querySelector('.popup__img');
export const popupImgDescription = document.querySelector('.popup__caption');

//fields gridBox
const list = document.querySelector('.cards__items');

// On validation
const formEditValidation = new FormValidator(popupFormEdit, config)
formEditValidation.enableValidation();

const formAddValidation = new FormValidator(popupFormAdd, config)
formAddValidation.enableValidation();

//открытие попап профиля пользователя
function openPopupEdit() {
  popupUserName.value = profileUserName.textContent;
  popupUserDescription.value = profileDescription.textContent;

  openPopup(popupEditProfile);
  formEditValidation.hideErrorForm();
}

//открытие и закрытие попапов
export function openPopup(modal) {
  modal.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
}

function closePopup(modal) {
  modal.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc);
}

//закрытие попапа по нажатию на Esc
function closePopupEsc(evt) {
  if (evt.keyCode === 27 || evt.key === 'Escape') {
    const openPopup = document.querySelector('.popup_opened');

    closePopup(openPopup);
  };
};

//обработчики событий
function submitEditProfileForm (evt) {
  evt.preventDefault();

  profileUserName.textContent = popupUserName.value;
  profileDescription.textContent = popupUserDescription.value;

  closePopup(popupEditProfile);
}

popupOpenButtonEdit.addEventListener('click', openPopupEdit);
popupCloseButtonEdit.addEventListener('click', () => closePopup(popupEditProfile));
//закрытие popupEdit overlay
popupEditProfile.addEventListener('click', (evt) => {
  if (evt.target === evt.currentTarget) {
    closePopup(popupEditProfile);
  };
});
popupFormEdit.addEventListener('submit', submitEditProfileForm);

popupOpenButtonAdd.addEventListener('click', () => {
  openPopup(popupAddCard);
  popupFormAdd.reset();
  formAddValidation.hideErrorForm();
  formAddValidation.toggleButton();
});

popupCloseButtonAdd.addEventListener('click', () => closePopup(popupAddCard));
//закрытие popupAdd overlay
popupAddCard.addEventListener('click', (evt) => {
  if (evt.target === evt.currentTarget) {
    closePopup(popupAddCard);
  };
});

//выбор карточек из массива
initialCards.forEach(cardElement => {
  makeCard(cardElement);
});

//добавление готовой карточки в dom
function addCard(cardItem){
  list.prepend(cardItem);
};

//создание карточек
function makeCard (cardElement){
  const card = new Card (cardElement.name, cardElement.link, '.cards-template');
  const cardItem = card.createCard();
  addCard(cardItem);
}

//добавление карточек по url
function addImage(evt) {
  evt.preventDefault();

  makeCard(({name:popupNameImg.value, link:popupNameLink.value}));

  closePopup(popupAddCard);
  popupFormAdd.reset();
}

popupCloseButtonImage.addEventListener('click', () => closePopup(popupImage));
//закрытие popupImage overlay
popupImage.addEventListener('click', (evt) => {
  if (evt.target === evt.currentTarget) {
    closePopup(popupImage);
  };
});
popupFormAdd.addEventListener('submit', addImage);
