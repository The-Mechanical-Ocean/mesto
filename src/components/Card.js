export class Card {
  constructor(name, link, cardTemplateSelector, { cardClick }) {
    this._name = name;
    this._link = link;
    this._template = document.querySelector(cardTemplateSelector).content;
    this._cardClick = cardClick;
  }

  _like = () => {
    this._buttonLike.classList.toggle('cards__button-like_active');
  }

  _delImage = () => {
    this._cardElement.remove();
  }

  createCard = () => {
    this._cardElement = this._template.querySelector('.cards__item').cloneNode(true);
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
    this._cardImg.addEventListener('click', () => { this._cardClick(this._name, this._link) });
    this._buttonLike.addEventListener('click', this._like);
    this._buttonDel.addEventListener('click', this._delImage);
  }

}
