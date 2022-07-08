import Service from "../../services";

const service = new Service();
const _apiBase = 'http://localhost/finorg';

export const getDays = (from, to) => service.getResource(`${_apiBase}/?q=events&from=${from}&to=${to}`);
export const addEvent = ( data ) => service.postResource(`${_apiBase}/?q=events`, data);
export const setEvent = ( data ) => service.updateResource(`${_apiBase}/?q=events`, data);
export const delEvent = ( id ) => service.deleteResource(`${_apiBase}/?q=events&id=${id}`);

// export const getAsset = ( id ) => service.getResource(`${_apiBase}/?q=assets&id=${id}`);
