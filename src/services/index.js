export default class Service {
  _apiBase;

  constructor() {
    this._apiBase = 'http://localhost:3000/';
  }

  getResource = async (url) => {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Could non fetch ${url}. Status: ${res.status}`);
    return await res.json();   
  }

  postResource = async (url, data) => {
    const res = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {'Content-Type': 'application/json;charset=utf-8'}
    });
    if (!res.ok) throw new Error(`Could non fetch ${url}. Status: ${res.status}`);
    return await res.json(); 
  }

  updateResource = async (url, data) => {
    const res = await fetch(url, {
      method: 'PATCH',
      body: JSON.stringify(data),
      headers: {'Content-Type': 'application/json;charset=utf-8'}
    });
    if (!res.ok) throw new Error(`Could non fetch ${url}. Status: ${res.status}`);
    return await res.json(); 
  }

  deleteResource = async (url) => {
    const res = await fetch(url, {
      method: 'DELETE',
    });
    if (!res.ok) throw new Error(`Could non fetch ${url}. Status: ${res.status}`);
    return await res.json(); 
  }

  // getContacts = () => this.getResource(`${this._apiBase}contacts`);
  // delete = (id) => this.deleteResource(`${this._apiBase}contacts/${id}`); 
  // update = (data) => this.updateResource(`${this._apiBase}contacts/${data.id}`, data);
  // add = (data) => this.postResource(`${this._apiBase}contacts`, data);
  
  auth = async (login, pass) => {
    const {email, expiresIn, idToken} = await this.getResource(`${this._apiBase}auth`)
    if (email === 'tester@test.tst') return { idToken, expiresIn };
    return null;
  }


  assets = [
    {
      id: 0,
      currensy: 'RUB',
      value: 1000,
      status: 'active',
      type: 'cash',
    },
    {
      id: 1,
      currensy: 'RUB',
      value: 100000,
      status: 'active',
      type: 'card',
    },
    {
      id: 2,
      currensy: 'THB',
      value: 26352,
      status: 'active',
      type: 'cash',
    },
    {
      id: 3,
      currensy: 'THB',
      value: 243,
      status: 'active',
      type: 'card',
    },
  ];

 yuan = {
    id: 3,
    currensy: 'CNY',
    value: 5000,
    status: 'active',
  }

  getAssets = async () => {
    return await new Promise(resolve => {
      setTimeout(() => resolve(this.assets), 5000)
    });
  }

}
