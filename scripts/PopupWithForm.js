import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
    constructor(popupSelector, { submitForm }) {
        super(popupSelector);
        this._popupForm = this._popup.querySelector('.popup__form');
        this._inputsList = this._popup.querySelectorAll('.popup__input');
        this._submitForm = submitForm;
        this._submitHandler = this._submitHandler.bind(this);
        // this.setEventListenersSubmit();
    }

    _getInputValues() {
        this._inputValue = {};
        this._inputsList.forEach((input) => {
            this._inputValue[input.name] = input.value;
        });
        return this._inputValue;
    }

    _submitHandler(evt) {
        evt.preventDefault();
        this._submitForm(this._getInputValues());
    }

    _setEventListenersSubmit() {
      this._popupForm.addEventListener('submit', this._submitHandler);
  }

    _removeEventListenersSubmit() {
    this._popupForm.removeEventListener('submit', this._submitHandler);
}

    open() {
      super.open();
      this._setEventListenersSubmit();
    }

    close() {
      super.close();
        this._removeEventListenersSubmit();
        this._popupForm.reset();
    }
}
