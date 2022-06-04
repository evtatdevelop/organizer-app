import Service from "../../services";

const service = new Service();
const _apiBase = 'http://localhost/finorg';

export const getAssets = () => service.getResource(`${_apiBase}/?q=assets`);
export const getAsset = ( id ) => service.getResource(`${_apiBase}/?q=assets&id=${id}`);
export const setAsset = ( data ) => service.updateResource(`${_apiBase}/?q=assets`, data);
export const addAsset = ( data ) => service.postResource(`${_apiBase}/?q=assets`, data);
export const delAsset = ( id ) => service.deleteResource(`${_apiBase}/?q=assets&id=${id}`);