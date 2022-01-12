//popup menu
const popupAdd = document.querySelector('.popup_type_add-card');
const popupEdit = document.querySelector('.popup_type_edit');
const popupImage = document.querySelector('.popup_type_image');

//popup form's
const popupFormEdit = popupEdit.querySelector('.popup__container_type_edit');
const popupFormAdd = popupAdd.querySelector('.popup__container_type_add-card');

//button
const popupOpenButtonEdit = document.querySelector('.profile__button-edit');
const popupOpenButtonAdd =  document.querySelector('.profile__button-add');
const popupCloseButtonEdit = popupEdit.querySelector('.popup__button-close_type_edit');
const popupCloseButtonAdd =  popupAdd.querySelector('.popup__button-close_type_add-card');
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

function openPopupEdit() {
  popupUserName.value = profileUserName.textContent;
  popupUserDescription.value = profileDescription.textContent;

  openPopup(popupEdit);
}

function openPopup(modal) {
  modal.classList.add('popup_opened');
}

function closePopup(modal) {
  modal.classList.remove('popup_opened');
}
function formSubmitHandler (evt) {
  evt.preventDefault();

  profileUserName.textContent = popupUserName.value;
  profileDescription.textContent = popupUserDescription.value;

  closePopup(popupEdit);
}

popupOpenButtonEdit.addEventListener('click', openPopupEdit);
popupCloseButtonEdit.addEventListener('click', () => closePopup(popupEdit));
popupFormEdit.addEventListener('submit', formSubmitHandler);

popupOpenButtonAdd.addEventListener('click', () => openPopup(popupAdd));
popupCloseButtonAdd.addEventListener('click', () => closePopup(popupAdd));

const initialCards = [
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

//fields gridBox
const list = document.querySelector('.cards__items');
const cardTemplate = document.querySelector('.cards-template').content;

function newCard(name, link){
  const cardElement = cardTemplate.cloneNode(true);
  const cardImg = cardElement.querySelector('.cards__img');
  const cardText = cardElement.querySelector('.cards__text');
  const buttonLike = cardElement.querySelector('.cards__button-like');
  const buttonDel = cardElement.querySelector('.cards__button-del');
  
  cardText.textContent = name;
  cardImg.src = link;
  cardImg.alt = name;
  
  cardImg.addEventListener('click', PopupImg);
  buttonLike.addEventListener('click', like);
  buttonDel.addEventListener('click', delImageHandler);
  
  return cardElement;
};

function addCards(cardElement){
  list.prepend(cardElement);
};

initialCards.forEach(cardElement => {
  const card = newCard(cardElement.name, cardElement.link);
  addCards(card);
});

function PopupImg(evt) {
  popupImgField.src = evt.target.src;
  popupImgDescription.textContent = evt.target.alt;
  popupImgField.alt = evt.target.alt;
  openPopup(popupImage);
}

function like(evt) {
  evt.target.classList.toggle('cards__button-like_active');
}

function delImageHandler(evt) {
  evt.target.closest('.cards__item').remove();
};

function addImageHandler(evt) {
  evt.preventDefault();
  const card = newCard(popupNameImg.value, popupNameLink.value);
  addCards(card);
  closePopup(popupAdd);
  popupFormAdd.reset();
};

popupCloseButtonImage.addEventListener('click', () => closePopup(popupImage));
popupFormAdd.addEventListener('submit', addImageHandler);
