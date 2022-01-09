const popupAdd = document.querySelector('.popup_type_add-card');
const popupEdit = document.querySelector('.popup_type_edit');
const popupImage = document.querySelector('.popup_type_image');

//popup form's
const popupFormEdit = popupEdit.querySelector('.popup__container_type_edit');
const popupFormAdd = document.querySelector('.popup__container_type_add-card');

//button
const popupOpenButtonEdit = document.querySelector('.profile__button-edit');
const popupOpenButtonAdd =  document.querySelector('.profile__button-add');
const popupCloseButtonEdit = popupEdit.querySelector('.popup__button-close_type_edit');
const popupCloseButtonAdd =  popupAdd.querySelector('.popup__button-close_type_add-card');
const popupCloseButtonImage = popupImage.querySelector('.popup__button-close_type_img-card');

//popup input's
const popupUserName = document.querySelector('.popup__input_type_name');
const popupUserDescription = document.querySelector('.popup__input_type_job');
const popupNameImg = document.querySelector('.popup__input_type_name-img'); //!
const popupNameLink = document.querySelector('.popup__input_type_link');  //!

//html fields
const profileUserName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

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
popupCloseButtonAdd.addEventListener('click', function(){closePopup(popupAdd)});

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

  const list = document.querySelector('.cards__items');
  const cardTemplate = document.querySelector('.cards-template').content;

// сделать создание, добавление, 3-я функция - совмещение.

initialCards.forEach(function(cardData){
  const cardElement = cardTemplate.cloneNode(true);
  const cardImg = cardElement.querySelector('.cards__img');
  const cardText = cardElement.querySelector('.cards__text');

  cardText.textContent = cardData.name;
  cardImg.src = cardData.link;
  list.prepend(cardElement);
})

function openPopupImg(evt) {
  evt.target.classList.toggle('popup_opened');
}

const cardImg = document.querySelector('.cards__img');
cardImg.addEventListener('click', openPopupImg);
popupCloseButtonImage.addEventListener('click', openPopupImg);


const buttonLike = list.querySelector('.cards__button-like');

function like(evt) {
  evt.target.classList.toggle('cards__button-like_active');
}

buttonLike.addEventListener('click', like);
console.log(cardImg)
