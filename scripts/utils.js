export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button-save_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: '.popup__input-error',
  errorActiveClass: 'popup__input-error_active'
}

//popup menu
export const popupAddCard = document.querySelector('.popup_type_add-card');
export const popupEditProfile = document.querySelector('.popup_type_edit');
// const popupImage = document.querySelector('.popup_type_image');

//popup form's
export const popupFormEdit = popupEditProfile.querySelector('.popup__form');
export const popupFormAdd = popupAddCard.querySelector('.popup__form');

//button
export const popupOpenButtonEdit = document.querySelector('.profile__button-edit');
export const popupOpenButtonAdd =  document.querySelector('.profile__button-add');
// const popupCloseButtonEdit = popupEditProfile.querySelector('.popup__button-close_type_edit');
// const popupCloseButtonAdd =  popupAddCard.querySelector('.popup__button-close_type_add-card');
// const popupCloseButtonImage = popupImage.querySelector('.popup__button-close_type_img-card');

// popup input's
export const popupName = document.querySelector('.popup__input_type_name');
export const popupDescription = document.querySelector('.popup__input_type_job');
console.log(popupName, popupDescription);
export const popupNameImg = document.querySelector('.popup__input_type_name-img');
export const popupNameLink = document.querySelector('.popup__input_type_link');

// html fields

export const profileName = '.profile__name';
export const profileDescription = '.profile__description';

//new fields
// export const popupImgField = document.querySelector('.popup__img');
// export const popupImgDescription = document.querySelector('.popup__caption');

//fields gridBox
export const list = document.querySelector('.cards__items');
