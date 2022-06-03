import Service from "../../services";

const service = new Service();
const _apiBase = 'http://localhost/finorg/?q=assets';

export const getAssets = () => service.getResource(_apiBase);
export const getAsset = ( id ) => service.getResource(`${_apiBase}&id=${id}`);
export const setAsset = ( data ) => service.updateResource(_apiBase, data);
export const addAsset = ( data ) => service.postResource(_apiBase, data);