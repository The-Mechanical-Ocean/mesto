import {openPopup, popupImage, popupImgField, popupImgDescription} from './index.js'

export class Card {
  constructor(name, link, cardTemplateSelector) {
    this._name = name;
    this._link = link;
    this._template = document.querySelector(cardTemplateSelector).content;
  }

  _like = () => {
    this._buttonLike.classList.toggle('cards__button-like_active');
  }

  _delImage = () => {
    this._buttonDel.closest('.cards__item').remove();
  }

  _openImage = () => {
    popupImgField.src = this._link;
    popupImgDescription.textContent = this._name;
    popupImgField.alt = this._name;

    openPopup(popupImage);
  }

  createCard = () => {
    this._cardElement = this._template.cloneNode(true);
    this._cardImg = this._cardElement.querySelector('.cards__img');
    this._cardText = this._cardElement.querySelector('.cards__text');
    this._buttonLike = this._cardElement.querySelector('.cards__button-like');
    this._buttonDel = this._cardElement.querySelector('.cards__button-del');

    this._cardText.textContent = this._name;
    this._cardImg.src = this._link;
    this._cardImg.alt = this._name;

    this._setEventListeners();

    return this._cardElement;
  }

  _setEventListeners() {
    this._cardImg.addEventListener('click', this._openImage);
    this._buttonLike.addEventListener('click', this._like);
    this._buttonDel.addEventListener('click', this._delImage);
  }

}
