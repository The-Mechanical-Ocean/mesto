import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';
import {Section} from '../components/Section.js';
import {UserInfo} from '../components/UserInfo.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import { initialCards, config, popupFormEdit, popupFormAdd, popupEditProfile, popupAddCard,  popupImage, profileName,
profileDescription, popupOpenButtonEdit, popupOpenButtonAdd, list} from '../utils/constants.js';

const profileInfo = new UserInfo(profileName, profileDescription);
const imgPopup = new PopupWithImage(popupImage);
const formEditValidation = new FormValidator(popupFormEdit, config);
const formAddValidation = new FormValidator(popupFormAdd, config);

// On validation
formEditValidation.enableValidation();
formAddValidation.enableValidation();

//popup profile
const popupEdit = new PopupWithForm(popupEditProfile, {
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
  console.log(formAddValidation.toggleButton());
});

const addCard = new PopupWithForm(popupAddCard, {
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
  renderer: (item) => { makeCard (item) }
  },
  list
);
defaultCardsList.renderedItems();
