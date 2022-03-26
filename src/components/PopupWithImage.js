import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
      super(popupSelector);
      this.popupImg = this._popup.querySelector('.popup__img');
      this._popupDescription = document.querySelector('.popup__caption');
  }

  open(name, link) {
      this._popupDescription.textContent = name;
      this.popupImg.src = link;
      this.popupImg.alt = name;
      super.open();
  }
}
