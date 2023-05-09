class Api {
  constructor(options) {
    this._url = options.url;
  }

  _checkAnswerServer(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`У вас произошла ошибка ${res.staus}`);
  }

  getInitialPizza() {
    return fetch(`${this._url}/items`, {
      headers: {
        "Content-type": "application/json",
      },
    }).then((res) => this._checkAnswerServer(res));
  }
}

const api = new Api({
  url: "https://645a677f95624ceb2100f68c.mockapi.io",
});

export default api