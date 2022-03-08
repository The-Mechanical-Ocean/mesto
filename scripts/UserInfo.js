export default class UserInfo {
  constructor({ profileUserName, profileDescription }) {
      this._name = document.querySelector(profileUserName);
      this._description = document.querySelector(profileDescription);
  }

  getUserInfo() {
      this._userData = {
          name: this._name.textContent,
          job: this._description.textContent
      };

      return this._userData;
  }

  setUserInfo({ name, job }) {
      this._name.textContent = name;
      this._description.textContent = job;
  }
}
