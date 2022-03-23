export class Card {
  constructor(name, link, likes, id, userId, ownerId, cardTemplateSelector, { cardClick , delClick, likeClick }) {
    this._name = name;
    this._link = link;
    this._likes = likes;
    this._id = id;
    this._userId = userId;
    this._ownerId = ownerId;
    this._template = document.querySelector(cardTemplateSelector).content;
    this._cardClick = cardClick;
    this._delClick = delClick;
    this._likeClick = likeClick;
  }

  isLiked() {
    const userHasLikedCard = this._likes.find(user => user._id === this._userId)

    return userHasLikedCard;
  }

  _addLike = () => {
    this._buttonLike.classList.add('cards__button-like_active');
  }

  _removeLike = () => {
    this._buttonLike.classList.remove('cards__button-like_active');
  }

  delImage  ()  {
    this._cardElement.remove();
  }

  setLike(newLikes) {
    this._likes = newLikes;
    const likeCountElememnt = this._cardElement.querySelector('.cards__like-count')
    likeCountElememnt.textContent = this._likes.length;

    if(this.isLiked()) {
      this._addLike();
    }
    else {
      this._removeLike();
    }
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

    this.setLike(this._likes);

    if (this._ownerId !== this._userId) {
      this._buttonDel.style.display = 'none';
    }


    // else {
    //   this._like();
    // }

    return this._cardElement;
  }

  _setEventListeners() {
    this._cardImg.addEventListener('click', () => { this._cardClick(this._name, this._link) });
    this._buttonLike.addEventListener('click', () => { this._likeClick(this._id) });
    this._buttonDel.addEventListener('click', () => { this._delClick(this._id) });
  }

}
