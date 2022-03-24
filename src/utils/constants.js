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
export const popupAddCardSelector = '.popup_type_add-card';
export const popupEditProfileSelector = '.popup_type_edit';
export const popupImageSelector = '.popup_type_image';
export const popupConfirmSelector = '.popup_type_delete-confirm';
export const popupAvatarSelector = '.popup_type_avatar';

//popup form's
export const popupFormEdit = document.querySelector('.popup__form_type_edit-profile');
export const popupFormAdd = document.querySelector('.popup__form_type_add-img');
export const popupFormConfirm = document.querySelector('.popup__form_type_delete-confirm');
export const popupFormAvatar = document.querySelector('.popup__form_type_avatar');

//button
export const popupOpenButtonEdit = document.querySelector('.profile__button-edit');
export const popupOpenButtonAdd =  document.querySelector('.profile__button-add');
export const popupOpenButtonAvatar = document.querySelector('.profile__button-avatar');
// popup input's
export const popupName = document.querySelector('.popup__input_type_name');
export const popupDescription = document.querySelector('.popup__input_type_job');
export const popupNameImg = document.querySelector('.popup__input_type_name-img');
export const popupNameLink = document.querySelector('.popup__input_type_link');

// html field's element profile
export const profileName = '.profile__name';
export const profileDescription = '.profile__description';
export const profileAvatar = '.profile__avatar';

//field's gridBox
export const list = document.querySelector('.cards__items');
