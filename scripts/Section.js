export default class Section {
  constructor({items, renderer}, containerSelector){
    this._renderer = renderer;
    this._renderedItems = items;
    this._containerSelector = containerSelector;
  }

  addItem(element) {
    this._containerSelector.append(element);
  }

  prependItem(element) {
    this._containerSelector.prepend(element);
  }

  renderedItems() {
    this._renderedItems.forEach((item) => {
      this._renderer(item);
    });
  }
}
