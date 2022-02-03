//popup menu
const popupAddCard = document.querySelector('.popup_type_add-card');
const popupEditProfile = document.querySelector('.popup_type_edit');
const popupImage = document.querySelector('.popup_type_image');

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
const popupImgField = document.querySelector('.popup__img');
const popupImgDescription = document.querySelector('.popup__caption');

//открытие попап профиля пользователя
function openPopupEdit() {
  popupUserName.value = profileUserName.textContent;
  popupUserDescription.value = profileDescription.textContent;

  openPopup(popupEditProfile);
  hideErrorForm(popupFormEdit, config);
}

//открытие и закрытие попапов
function openPopup(modal) {
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
  hideErrorForm(popupFormAdd, config);
  toggleButton(popupFormAdd, config);
});

popupCloseButtonAdd.addEventListener('click', () => closePopup(popupAddCard));
//закрытие popupAdd overlay
popupAddCard.addEventListener('click', (evt) => {
  if (evt.target === evt.currentTarget) {
    closePopup(popupAddCard);
  };
});

//fields gridBox
const list = document.querySelector('.cards__items');
const cardTemplate = document.querySelector('.cards-template').content;

//создание карточек
function createCard(name, link){
  const cardElement = cardTemplate.cloneNode(true);
  const cardImg = cardElement.querySelector('.cards__img');
  const cardText = cardElement.querySelector('.cards__text');
  const buttonLike = cardElement.querySelector('.cards__button-like');
  const buttonDel = cardElement.querySelector('.cards__button-del');

  cardText.textContent = name;
  cardImg.src = link;
  cardImg.alt = name;

  cardImg.addEventListener('click', openImage);
  buttonLike.addEventListener('click', like);
  buttonDel.addEventListener('click', delImage);

  return cardElement;
};

function addCard(cardElement){
  list.prepend(cardElement);
};

initialCards.forEach(cardElement => {
  const card = createCard(cardElement.name, cardElement.link);
  addCard(card);
});

function openImage(evt) {
  popupImgField.src = evt.target.src;
  popupImgDescription.textContent = evt.target.alt;
  popupImgField.alt = evt.target.alt;

  openPopup(popupImage);
}

function like(evt) {
  evt.target.classList.toggle('cards__button-like_active');
}

function delImage(evt) {
  evt.target.closest('.cards__item').remove();
};

function addImage(evt) {
  evt.preventDefault();

  const card = createCard(popupNameImg.value, popupNameLink.value);

  addCard(card);
  closePopup(popupAddCard);
  popupFormAdd.reset();

};

popupCloseButtonImage.addEventListener('click', () => closePopup(popupImage));
//закрытие popupImage overlay
popupImage.addEventListener('click', (evt) => {
  if (evt.target === evt.currentTarget) {
    closePopup(popupImage);
  };
});
popupFormAdd.addEventListener('submit', addImage);
