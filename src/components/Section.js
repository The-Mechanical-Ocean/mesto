export class Section {
  constructor({ renderer }, containerSelector){
    this._renderer = renderer;
    this._containerSelector = containerSelector;
  }

  appendItem(element) {
    this._containerSelector.append(element);
  }

  prependItem(element) {
    this._containerSelector.prepend(element);
  }

  renderItems(items) {

    items.forEach((item) => {
      console.log(item)
      this._renderer(item);
    });
  }

}
