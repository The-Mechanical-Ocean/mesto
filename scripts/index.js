import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';
import {Section} from './Section.js';
import {UserInfo} from './UserInfo.js';
import {PopupWithForm} from './PopupWithForm.js';
import {PopupWithImage} from './PopupWithImage.js';
import { initialCards, config, popupFormEdit, profileName, profileDescription, popupFormAdd, popupOpenButtonEdit, popupOpenButtonAdd, list} from './utils.js';

const profileInfo = new UserInfo(profileName, profileDescription);
const imgPopup = new PopupWithImage('.popup_type_image');
// On validation
const formEditValidation = new FormValidator(popupFormEdit, config);
formEditValidation.enableValidation();
const formAddValidation = new FormValidator(popupFormAdd, config);
formAddValidation.enableValidation();

//popup profile
const popupEdit = new PopupWithForm('.popup_type_edit', {
  submitForm: (data) => {
    profileInfo.setUserInfo(data.firstname, data.description);

    popupEdit.close();
  }
});

popupOpenButtonEdit.addEventListener("click", function() {
  popupEdit.open();

    const profileDescription = profileInfo.getUserInfo();

    firstname.value = profileDescription.name;
    description.value = profileDescription.description;

    formEditValidation.hideErrorForm();
});

//popup addCard
popupOpenButtonAdd.addEventListener("click", () => {
  addCard.open();
  formAddValidation.hideErrorForm();
  formAddValidation.toggleButton();
});

const addCard = new PopupWithForm('.popup_type_add-card', {
  submitForm: (data) => {
    const newCardInfo = {
      link: data['link-img'],
      name: data['name-img']
    }

    makeCard(newCardInfo);
    addCard.close();
  }

});

//создание карточек
function makeCard (cardElement){
  const card = new Card (cardElement.name, cardElement.link, '.cards-template', {
    cardClick: (name, link) => {
      imgPopup.open(name, link);
    }
  });
  const cardItem = card.createCard();
  defaultCardsList.prependItem(cardItem);
}

//Вставка карточек
const defaultCardsList = new Section({
  items: initialCards,
  renderer: (item) => {
    makeCard (item)
  }
  },
  list
  );
defaultCardsList.renderedItems();
