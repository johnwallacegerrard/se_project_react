import Api from "./api";

export default class Auth extends Api {
  signUp({ email, password, name, avatar }) {
    const userData = { email, password, name };
    if (avatar && avatar.trim() !== "") {
      userData.avatar = avatar;
    }
    return fetch(`${this._baseUrl}/signup`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ email, password, name, avatar }),
    })
      .then(this._checkResponse)
      .then((data) => {
        console.log(data);
        return this.signIn({ email: data.email, password: password });
      })
      .catch((err) => {
        console.error(err);
      });
  }
  signIn({ email, password }) {
    return fetch(`${this._baseUrl}/signin`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ email, password }),
    })
      .then(this._checkResponse)
      .then((data) => {
        this._saveToken(data.token);
        return this.getCurrentUser(data.token);
      })
      .then((user) => {
        return user;
      })
      .catch((err) => console.error(err));
  }

  getCurrentUser() {
    const token = localStorage.getItem("jwt");

    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: {
        ...this._headers,
        Authorization: `Bearer ${token}`,
      },
    })
      .then(this._checkResponse)
      .then((user) => {
        return user;
      })
      .catch((err) => console.error(err));
  }

  updateCurrentUser({ name, avatar }) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        ...this._headers,
        Authorization: `Bearer ${this._token}`,
      },
      body: JSON.stringify({ name, avatar }),
    })
      .then(this._checkResponse)
      .then((user) => {
        return user;
      })
      .catch((err) => console.error(err));
  }

  _saveToken(token) {
    if (token) {
      localStorage.setItem("jwt", token);
    }
  }
  getToken() {
    return localStorage.getItem("jwt");
  }
  clearToken() {
    return localStorage.removeItem("jwt");
  }
}
