class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  }

  getClothingItems() {
    return fetch(`${this._baseUrl}/items`, {
      method: "GET",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  deleteClothingItem(id) {
    const token = localStorage.getItem("jwt");
    return fetch(`${this._baseUrl}/items/${id}`, {
      method: "DELETE",
      headers: { ...this._headers, Authorization: `Bearer ${token}` },
    }).then(this._checkResponse);
  }

  addClothingItem({ name, imageUrl, weather }) {
    const token = localStorage.getItem("jwt");
    return fetch(`${this._baseUrl}/items`, {
      method: "POST",
      headers: { ...this._headers, Authorization: `Bearer ${token}` },
      body: JSON.stringify({ name, imageUrl, weather }),
    }).then(this._checkResponse);
  }

  addLike(id) {
    const token = localStorage.getItem("jwt");
    return fetch(`${this._baseUrl}/items/${id}/likes`, {
      method: "PUT",
      headers: { ...this._headers, Authorization: `Bearer ${token}` },
    }).then(this._checkResponse);
  }

  removeLike(id) {
    const token = localStorage.getItem("jwt");
    return fetch(`${this._baseUrl}/items/${id}/likes`, {
      method: "DELETE",
      headers: { ...this._headers, Authorization: `Bearer ${token}` },
    }).then(this._checkResponse);
  }
}

export default Api;
