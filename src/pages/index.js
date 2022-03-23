import './index.css';
import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';
import {Section} from '../components/Section.js';
import {UserInfo} from '../components/UserInfo.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import {api} from '../components/Api.js'
import { initialCards, config, popupFormEdit, popupFormAdd, popupConfirmSelector, popupEditProfileSelector, popupAddCardSelector,  popupImageSelector, profileName,
profileDescription, popupOpenButtonEdit, popupOpenButtonAdd, list} from '../utils/constants.js';

let userId

api.getProfile()
  .then(res => {
    console.log('ответ', res)
    profileInfo.setUserInfo(res.name, res.about);
    userId = res._id
  })

  api.getInitialCards()
  .then(cardList => {
    console.log('ответCard', cardList)
    cardList.forEach(data => {
      const card = {
        link: data.link,
        name: data.name,
        likes: data.likes,
        id: data._id,
        userId: userId,
        ownerId: data.owner._id
      }
      makeCard(card);
    })
    // console.log('ответcards', res)
    // profileInfo.setUserInfo(res.name, res.description);
  })

const profileInfo = new UserInfo(profileName, profileDescription);
const imgPopup = new PopupWithImage(popupImageSelector);
const formEditValidation = new FormValidator(popupFormEdit, config);
const formAddValidation = new FormValidator(popupFormAdd, config);

// On validation
formEditValidation.enableValidation();
formAddValidation.enableValidation();

//popup profile
const popupEdit = new PopupWithForm(popupEditProfileSelector, {
  submitForm: (data) => {
    api.editProfile(data.firstname, data.description)
    .then(() => {
      profileInfo.setUserInfo(data.firstname, data.description);
      popupEdit.close();
    })
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

const addCard = new PopupWithForm(popupAddCardSelector, {
  submitForm: (data) => {

    api.addCard(data['name-img'], data['link-img'])
    .then(res => {
      const newCardInfo = {
        link: res.link,
        name: res.name,
        likes: res.likes,
        id: res._id,
        userId: userId,
        ownerId: res.owner._id
      }
      console.log('card', res)
      makeCard(newCardInfo);
      addCard.close();
    })

    // console.log(newCardInfo)

    // makeCard(newCardInfo);
    // addCard.close();
  }
});

const confirmPopup = new PopupWithForm(popupConfirmSelector, {submitForm: () => {}});
// popup_type_delete-confirm

//создание карточек
function makeCard (cardElement){
  const card = new Card (cardElement.name, cardElement.link, cardElement.likes, cardElement.id, cardElement.userId, cardElement.ownerId,  '.cards-template',
    {
    cardClick: (name, link) => {
      imgPopup.open(name, link)
    },
    delClick: (id) => {
      confirmPopup.open();
      confirmPopup.changeSubmitHandler(() => {
        api.deleteCard(id)
          .then(res => {
            card.delImage()
            confirmPopup.close()
          })
      });
    },
    likeClick: (id) => {
      if(card.isLiked()){
        api.deleteLike(id)
      .then(res => {
        card.setLike(res.likes)
      })
      }
      else {
        api.addLike(id)
        .then(res => {
          card.setLike(res.likes)
        })
      }



    }

    }

  )
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
