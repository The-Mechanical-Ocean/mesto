const popupOpenButtonEdit = document.querySelector('.profile__button-edit');
const formProfile = document.querySelector('.profile');
const popupOpenButtonAdd =  formProfile.querySelector('.profile__button-add');
const popupAdd = document.querySelector('.popup_type_add-card');
const popupCloseButtonEdit = document.querySelector('.popup__button-close_type_edit');
const popupCloseButtonAdd =  popupAdd.querySelector('.popup__button-close_type_add-card');
const popupEdit = document.querySelector('.popup_type_edit');

const popupFormEdit = document.querySelector('.popup__container_type_edit');
const popupFormAdd = document.querySelector('.popup__container_type_add-card');
const popupUserName = document.querySelector('.popup__input_type_name');
const popupUserDescription = document.querySelector('.popup__input_type_job');
const popupNameImg = document.querySelector('.popup__input_type_name-img'); //?
const popupNameLink = document.querySelector('.popup__input_type_link');  //?
const profileUserName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

console.log(popupOpenButtonAdd);

function openPopupEdit() {
  popupUserName.value = profileUserName.textContent;
  popupUserDescription.value = profileDescription.textContent;
  popupEdit.classList.add('popup_opened');
}

function closedPopupEdit() {
  popupEdit.classList.remove('popup_opened');
}

function togglePopup() {
  popupAdd.classList.toggle('popup_opened');
}


function formSubmitHandler (evt) {
  evt.preventDefault();

    profileUserName.textContent = popupUserName.value;
    profileDescription.textContent = popupUserDescription.value;

    closedPopupEdit();
}

popupOpenButtonEdit.addEventListener('click', openPopupEdit);
popupCloseButtonEdit.addEventListener('click', closedPopupEdit);
popupFormEdit.addEventListener('submit', formSubmitHandler);

popupOpenButtonAdd.addEventListener('click', togglePopup);
popupCloseButtonAdd.addEventListener('click', togglePopup);



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

  const list = document.querySelector('.cards__items')
  const cardTemplate = document.querySelector('.cards-template').content

initialCards.forEach(function(cardData){
  const cardElement = cardTemplate.cloneNode(true)
  const cardImg = cardElement.querySelector('.cards__img')
  const cardText = cardElement.querySelector('.cards__text')

  cardText.textContent = cardData.name
  cardImg.src = cardData.link
  list.prepend(cardElement)
})
