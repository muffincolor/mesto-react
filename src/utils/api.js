class Api {
  constructor({baseUrl, headers}) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  getInitialCards() {
    return fetch(`${this.baseUrl}/cards`, {
      headers: this.headers
    })
      .then(res => {
        return this._getResponseData(res);
      })
  }

  getProfileInfo() {
    return fetch(`${this.baseUrl}/users/me`, {
      headers: this.headers
    })
      .then(res => {
        return this._getResponseData(res);
      })
  }

  updateUserPhoto(userPhotoLink) {
    return fetch(`${this.baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify(userPhotoLink)
    })
      .then(res => {
        return this._getResponseData(res);
      })
  }

  updateUserProfileInfo(userInfo) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        name: userInfo.name,
        about: userInfo.about
      })
    })
      .then(res => {
        return this._getResponseData(res);
      })
  }

  addNewCard(cardData) {
    return fetch(`${this.baseUrl}/cards`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        name: cardData.name,
        link: cardData.link
      })
    })
      .then(res => {
        return this._getResponseData(res);
      })
  }

  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(new Error(`Ошибка: ${res.status}`));
  }

  deleteCard(cardID) {
    return fetch(`${this.baseUrl}/cards/${cardID}`, {
      method: 'DELETE',
      headers: this.headers
    }).then(res => {
      return this._getResponseData(res);
    })
  }

  changeLikeCardStatus(cardId, status) {
    if(status) {
      return fetch(`${this.baseUrl}/cards/likes/${cardId}`, {
        method: 'PUT',
        headers: this.headers
      })
        .then(res => {
          return this._getResponseData(res);
        })
    } else {
      return fetch(`${this.baseUrl}/cards/likes/${cardId}`, {
        method: 'DELETE',
        headers: this.headers
      })
        .then(res => {
          return this._getResponseData(res);
        })
    }
  }
}

export default new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-15',
  headers: {
    authorization: '34b321e7-b4e4-4ac9-9db1-e3a7134426f4',
    'Content-Type': 'application/json'
  }
});
