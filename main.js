(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var n=function(){function n(e,r,o,i,a,u,c,s){var l=this,p=s.cardClick,f=s.delClick,d=s.likeClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),t(this,"_addLike",(function(){l._buttonLike.classList.add("cards__button-like_active")})),t(this,"_removeLike",(function(){l._buttonLike.classList.remove("cards__button-like_active")})),t(this,"createCard",(function(){return l._cardElement=l._template.querySelector(".cards__item").cloneNode(!0),l._cardImg=l._cardElement.querySelector(".cards__img"),l._cardText=l._cardElement.querySelector(".cards__text"),l._buttonLike=l._cardElement.querySelector(".cards__button-like"),l._buttonDel=l._cardElement.querySelector(".cards__button-del"),l._cardText.textContent=l._name,l._cardImg.src=l._link,l._cardImg.alt=l._name,l._setEventListeners(),l.setLike(l._likes),l._ownerId!==l._userId&&(l._buttonDel.style.display="none"),l._cardElement})),this._name=e,this._link=r,this._likes=o,this._id=i,this._userId=a,this._ownerId=u,this._template=document.querySelector(c).content,this._cardClick=p,this._delClick=f,this._likeClick=d}var r,o;return r=n,(o=[{key:"isLiked",value:function(){var e=this;return this._likes.find((function(t){return t._id===e._userId}))}},{key:"delImage",value:function(){this._cardElement.remove()}},{key:"setLike",value:function(e){this._likes=e,this._cardElement.querySelector(".cards__like-count").textContent=this._likes.length,this.isLiked()?this._addLike():this._removeLike()}},{key:"_setEventListeners",value:function(){var e=this;this._cardImg.addEventListener("click",(function(){e._cardClick(e._name,e._link)})),this._buttonLike.addEventListener("click",(function(){e._likeClick(e._id)})),this._buttonDel.addEventListener("click",(function(){e._delClick(e._id)}))}}])&&e(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),n}();function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(t,n){var r,o,i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o=function(){i._form.addEventListener("submit",i._submitForm),i._inputs.forEach((function(e){e.addEventListener("input",(function(){i._validateInput(e)}))})),i.toggleButton()},(r="enableValidation")in this?Object.defineProperty(this,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):this[r]=o,this._form=t,this._inputSelector=n.inputSelector,this._inputs=this._form.querySelectorAll(this._inputSelector),this._submitButton=n.submitButtonSelector,this._inactiveButtonClass=n.inactiveButtonClass,this._inputErrorClass=n.inputErrorClass,this._errorClass=n.errorClass,this._errorActiveClass=n._errorActiveClass,this._button=this._form.querySelector(this._submitButton)}var t,n;return t=e,(n=[{key:"_submitForm",value:function(e){e.preventDefault()}},{key:"_showError",value:function(e,t){e.classList.add(this._inputErrorClass),t.classList.add(this._errorActiveClass),t.textContent=e.validationMessage}},{key:"_hideError",value:function(e,t){e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorActiveClass),t.textContent=""}},{key:"toggleButton",value:function(){this._form.checkValidity()?(this._button.classList.remove(this._inactiveButtonClass),this._button.removeAttribute("disabled")):(this._button.classList.add(this._inactiveButtonClass),this._button.setAttribute("disabled",!0))}},{key:"_validateInput",value:function(e){var t=this._form.querySelector("#".concat(e.id,"-error"));e.validity.valid?this._hideError(e,t):this._showError(e,t),this.toggleButton()}},{key:"hideErrorForm",value:function(){var e=this;this._inputs.forEach((function(t){var n=e._form.querySelector("#".concat(t.id,"-error"));e._hideError(t,n)}))}}])&&r(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._containerSelector=n}var t,n;return t=e,(n=[{key:"appendItem",value:function(e){this._containerSelector.append(e)}},{key:"prependItem",value:function(e){this._containerSelector.prepend(e)}},{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){console.log(e),t._renderer(e)}))}}])&&i(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(t),this._description=document.querySelector(n),this._avatar=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,description:this._description.textContent}}},{key:"setUserInfo",value:function(e,t){this._name.textContent=e,this._description.textContent=t}},{key:"setUserAvatar",value:function(e){this._avatar.src=e}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),l(this,"_handleEscClose",(function(e){"Escape"===e.key&&n.close()})),l(this,"_closeOverlay",(function(e){e.target.classList.contains("popup_opened")&&n.close()})),l(this,"_closeButton",(function(e){e.target.classList.contains("popup__button-close")&&n.close()})),this._popup=document.querySelector(t)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),this.setEventListeners()}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),this._removeEventListeners()}},{key:"setEventListeners",value:function(){document.addEventListener("keydown",this._handleEscClose),document.addEventListener("click",this._closeOverlay),this._popup.addEventListener("click",this._closeButton)}},{key:"_removeEventListeners",value:function(){document.removeEventListener("keydown",this._handleEscClose),document.removeEventListener("click",this._closeOverlay),this._popup.removeEventListener("click",this._closeButton)}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(){return _="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=h(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},_.apply(this,arguments)}function h(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=b(e)););return e}function y(e,t){return y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},y(e,t)}function m(e,t){if(t&&("object"===f(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return v(e)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=b(r);if(o){var n=b(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return m(this,e)});function a(e,t){var n,r=t.submitForm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._popupForm=n._popup.querySelector(".popup__form"),n._inputsList=n._popup.querySelectorAll(".popup__input"),n._savingButton=n._popup.querySelector(".popup__button-save"),n._buttonText=n._savingButton.textContent,n._submitForm=r,n._submitHandler=n._submitHandler.bind(v(n)),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputValue={},this._inputsList.forEach((function(t){e._inputValue[t.name]=t.value})),this._inputValue}},{key:"changeSubmitHandler",value:function(e){this._submitHandler=e,this._removeEventListenersSubmit(),this._setEventListenersSubmit()}},{key:"renderingLoad",value:function(e){this._savingButton.textContent=e?"Сохранение...":this._buttonText}},{key:"_submitHandler",value:function(e){e.preventDefault(),this._submitForm(this._getInputValues())}},{key:"_setEventListenersSubmit",value:function(){this._popupForm.addEventListener("submit",this._submitHandler)}},{key:"_removeEventListenersSubmit",value:function(){this._popupForm.removeEventListener("submit",this._submitHandler)}},{key:"open",value:function(){_(b(a.prototype),"open",this).call(this),this._setEventListenersSubmit()}},{key:"close",value:function(){_(b(a.prototype),"close",this).call(this),this._removeEventListenersSubmit(),this._popupForm.reset()}}])&&d(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(p);function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(){return E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=S(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},E.apply(this,arguments)}function S(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=j(e)););return e}function L(e,t){return L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},L(e,t)}function C(e,t){if(t&&("object"===g(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&L(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=j(r);if(o){var n=j(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return C(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e)).popupImg=document.querySelector(".popup__img"),t._popupDescription=document.querySelector(".popup__caption"),t}return t=a,(n=[{key:"open",value:function(e,t){this._popupDescription.textContent=e,this.popupImg.src=t,this.popupImg.alt=e,E(j(a.prototype),"open",this).call(this)}}])&&w(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(p);function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var I,q=new(function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._headers=r,this._baseUrl=n}var t,n;return t=e,(n=[{key:"getProfile",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch(console.log)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch(console.log)}},{key:"editProfile",value:function(e,t){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch(console.log)}},{key:"addCard",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch(console.log)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch(console.log)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch(console.log)}},{key:"addLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch(console.log)}},{key:"setAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch(console.log)}}])&&P(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-37",headers:{authorization:"7f7db428-bf23-4100-97fa-70a8e1b5dfd3","Content-Type":"application/json"}}),B={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button-save",inactiveButtonClass:"popup__button-save_inactive",inputErrorClass:"popup__input_type_error",errorClass:".popup__input-error",errorActiveClass:"popup__input-error_active"},T=document.querySelector(".popup__form_type_edit-profile"),A=document.querySelector(".popup__form_type_add-img"),x=(document.querySelector(".popup__form_type_delete-confirm"),document.querySelector(".popup__form_type_avatar")),U=document.querySelector(".profile__button-edit"),R=document.querySelector(".profile__button-add"),F=document.querySelector(".profile__button-avatar"),D=(document.querySelector(".popup__input_type_name"),document.querySelector(".popup__input_type_job"),document.querySelector(".popup__input_type_name-img"),document.querySelector(".popup__input_type_link"),document.querySelector(".cards__items"));function H(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var V=new c(".profile__name",".profile__description",".profile__avatar"),N=new k(".popup_type_delete-confirm",{submitForm:function(){}}),J=new O(".popup_type_image"),M=new o(T,B),z=new o(A,B),$=new o(x,B);Promise.all([q.getInitialCards(),q.getProfile()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return H(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?H(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];V.setUserInfo(i.name,i.about),V.setUserAvatar(i.avatar),I=i._id,o.reverse(),X.renderItems(o)})).catch((function(e){console.log("Ошибка: ".concat(e))})),M.enableValidation(),z.enableValidation(),$.enableValidation();var G=new k(".popup_type_edit",{submitForm:function(e){G.renderingLoad(!0),q.editProfile(e.firstname,e.description).then((function(){V.setUserInfo(e.firstname,e.description),G.close()})).finally((function(){G.renderingLoad(!1)}))}}),K=new k(".popup_type_avatar",{submitForm:function(e){K.renderingLoad(!0),q.setAvatar(e["link-avatar"]).then((function(){V.setUserAvatar(e["link-avatar"]),K.close()})).finally((function(){K.renderingLoad(!1)}))}}),Q=new k(".popup_type_add-card",{submitForm:function(e){Q.renderingLoad(!0),q.addCard(e["name-img"],e["link-img"]).then((function(e){W({link:e.link,name:e.name,likes:e.likes,id:e._id,userId:I,ownerId:e.owner._id}),Q.close()})).finally((function(){Q.renderingLoad(!1)}))}});function W(e){var t=new n(e.name,e.link,e.likes,e._id,I,e.ownerId,".cards-template",{cardClick:function(e,t){J.open(e,t)},delClick:function(e){N.open(),N.changeSubmitHandler((function(){q.deleteCard(e).then((function(e){t.delImage(),N.close()}))}))},likeClick:function(e){t.isLiked()?q.deleteLike(e).then((function(e){t.setLike(e.likes)})):q.addLike(e).then((function(e){t.setLike(e.likes)}))}}),r=t.createCard();X.prependItem(r)}U.addEventListener("click",(function(){G.open();var e=V.getUserInfo();firstname.value=e.name,description.value=e.description,M.hideErrorForm()})),F.addEventListener("click",(function(){K.open(),$.hideErrorForm(),$.toggleButton()})),R.addEventListener("click",(function(){Q.open(),z.hideErrorForm(),z.toggleButton()}));var X=new a({renderer:function(e){W({name:e.name,link:e.link,likes:e.likes,_id:e._id,userId:I,ownerId:e.owner._id})}},D)})();