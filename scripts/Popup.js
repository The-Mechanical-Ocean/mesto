export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }

  //открытие и закрытие попапов
  open() {
  this._popup.classList.add('popup_opened');
  this.setEventListeners();
  }

  close() {
    this._popup.classList.remove('popup_opened');
    this._removeEventListeners();
  }

  //закрытие попапа по нажатию на Esc, Overlay, buttonClose
  _handleEscClose = (evt) => {
    if (evt.keyCode === 27 || evt.key === 'Escape') {
      this.close();
    }
  }

  _closeOverlay = (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
        this.close();
    }
  }

  _closeButton = (evt) => {
    if (evt.target.classList.contains('popup__button-close')) {
        this.close();
    }
  }

  //слушатели и обработчики
  setEventListeners() {
    document.addEventListener('keydown', this._handleEscClose);
    document.addEventListener('click', this._closeOverlay);
    this._popup.addEventListener('click', this._closeButton);
  }

  _removeEventListeners() {
    document.removeEventListener('keydown', this._handleEscClose);
    document.removeEventListener('click', this._closeOverlay);
    this._popup.removeEventListener('click', this._closeButton);
  }

}
