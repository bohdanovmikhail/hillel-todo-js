import axios from 'axios';

export class BaseAPI {
  get api() {
    if (!this._api) {
      throw new Error('API is not initialized');
    }

    return this._api;
  };

  get itemKey() {
    if (!this._itemKey) {
      throw new Error('itemKey is not defined in API')
    }

    return this._itemKey;
  };
  
  set itemKey(key) {
    this._itemKey = key;
  }

  init(options) {
    this._api = axios.create({
      baseURL: `https://${options.tokenID}.mockapi.io/`,
    });
  }

  async getAll() {
    const response = await this.api.get(this.itemKey);
    return response.data;
  }

  async create(item) {
    const response = await this.api.post(this.itemKey, item);
    return response.data;
  }

  async update(item) {
    const response = await this.api.put(`${this.itemKey}/${item.id}`, item);
    return response.data;
  }

  async delete(item) {
    const response = await this.api.delete(`${this.itemKey}/${item.id}`);
    return response.data;
  }
}
