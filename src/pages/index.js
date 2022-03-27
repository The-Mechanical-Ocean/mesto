import './index.css';
import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';
import {Section} from '../components/Section.js';
import {UserInfo} from '../components/UserInfo.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import {api} from '../components/Api.js'
import { config, popupFormEdit, popupFormAdd, popupFormAvatar, popupConfirmSelector,
popupEditProfileSelector, popupAvatarSelector, popupAddCardSelector,  popupImageSelector, profileName,
profileDescription, profileAvatar, popupOpenButtonEdit, popupOpenButtonAdd, popupOpenButtonAvatar, list} from '../utils/constants.js';
let userId
const profileInfo = new UserInfo(profileName, profileDescription, profileAvatar);
const confirmPopup = new PopupWithForm(popupConfirmSelector, {submitForm: () => {}});
const imgPopup = new PopupWithImage(popupImageSelector);
const formEditValidation = new FormValidator(popupFormEdit, config);
const formAddValidation = new FormValidator(popupFormAdd, config);
const formAvatarValidation = new FormValidator(popupFormAvatar, config);


Promise.all([api.getInitialCards(), api.getProfile()])
  .then(([cards, userInfo]) => {
    profileInfo.setUserInfo(userInfo.name, userInfo.about);
    profileInfo.setUserAvatar(userInfo.avatar);
    userId = userInfo._id;
  cards.reverse();
  defaultCardsList.renderItems(cards);
  })
  .catch((err) =>{console.log(`Ошибка: ${err}`)})

// On validation
formEditValidation.enableValidation();
formAddValidation.enableValidation();
formAvatarValidation.enableValidation();

//Popup's
const popupEdit = new PopupWithForm(popupEditProfileSelector, {
  submitForm: (data) => {
    popupEdit.renderingLoad(true);
    api.editProfile(data.firstname, data.description)
    .then(() => {
      profileInfo.setUserInfo(data.firstname, data.description);
      popupEdit.close();
    })
    .catch((err) =>{console.log(`Ошибка: ${err}`)})
    .finally(() =>{popupEdit.renderingLoad(false)})
  }
});

const popupAvatar = new PopupWithForm(popupAvatarSelector, {
  submitForm: (data) => {
    popupAvatar.renderingLoad(true);
    api.setAvatar(data['link-avatar'])
    .then(() => {
      profileInfo.setUserAvatar(data['link-avatar']);
      popupAvatar.close();
    })
    .catch((err) =>{console.log(`Ошибка: ${err}`)})
    .finally(() =>{popupAvatar.renderingLoad(false)})
  }
});

const addCard = new PopupWithForm(popupAddCardSelector, {
  submitForm: (data) => {
    addCard.renderingLoad(true);

    api.addCard(data['name-img'], data['link-img'])
    .then(res => {
      const newCardInfo = {
        link: res.link,
        name: res.name,
        likes: res.likes,
        _id: res._id,
        userId: res._id,
        ownerId: res.owner._id
      }

    makeCard(newCardInfo);
    addCard.close();
    })
    .catch((err) =>{console.log(`Ошибка: ${err}`)})
    .finally(() =>{addCard.renderingLoad(false)});
  }
});

popupOpenButtonEdit.addEventListener("click", function() {
  popupEdit.open();

  const profileDescription = profileInfo.getUserInfo();

  firstname.value = profileDescription.name;
  description.value = profileDescription.description;

  formEditValidation.hideErrorForm();
});

popupOpenButtonAvatar.addEventListener("click", () => {
  popupAvatar.open();
  formAvatarValidation.hideErrorForm();
  formAvatarValidation.toggleButton();
});

popupOpenButtonAdd.addEventListener("click", () => {
  addCard.open();
  formAddValidation.hideErrorForm();
  formAddValidation.toggleButton();
});

//создание карточек
function makeCard (cardElement){
  const card = new Card (cardElement.name, cardElement.link, cardElement.likes, cardElement._id, userId, cardElement.ownerId,  '.cards-template',
    {
    cardClick: (name, link) => {
      imgPopup.open(name, link)
    },
    delClick: (id) => {

      confirmPopup.changeSubmitHandler(() => {
        api.deleteCard(id)
          .then(res => {
            card.delImage()
            confirmPopup.close()
          })
          .catch((err) =>{console.log(`Ошибка: ${err}`)})
      });
      confirmPopup.open()

    },
    likeClick: (id) => {
      if(card.isLiked()){
        api.deleteLike(id)
        .then(res => {
          card.setLike(res.likes)
        })
        .catch((err) =>{console.log(`Ошибка: ${err}`)})
      }
      else {
        api.addLike(id)
        .then(res => {
          card.setLike(res.likes)
        })
        .catch((err) =>{console.log(`Ошибка: ${err}`)})
      }
    }
  })
  const cardItem = card.createCard();

  defaultCardsList.prependItem(cardItem);
}

//Вставка карточек
const defaultCardsList = new Section({
  renderer: (item) => { makeCard ({name: item.name, link: item.link, likes: item.likes, _id: item._id,
    userId: userId, ownerId: item.owner._id}) }
  },
  list
);
