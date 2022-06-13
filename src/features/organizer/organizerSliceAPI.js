import Service from "../../services";

const service = new Service();
const _apiBase = 'http://localhost/finorg';

export const getDays = (from, to) => {
  console.log(from, to);
  return service.getResource(`${_apiBase}/?q=events&from=${from}&to=${to}`);
}
// export const getAsset = ( id ) => service.getResource(`${_apiBase}/?q=assets&id=${id}`);
// export const setAsset = ( data ) => service.updateResource(`${_apiBase}/?q=assets`, data);
// export const addAsset = ( data ) => service.postResource(`${_apiBase}/?q=assets`, data);
// export const delAsset = ( id ) => service.deleteResource(`${_apiBase}/?q=assets&id=${id}`);