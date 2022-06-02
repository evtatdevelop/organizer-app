import Service from "../../services";

const service = new Service();

export const getAssets = () => service.getResource(`http://localhost/finorg/?data=assets`);

export const getAsset = (id) => service.getResource(`http://localhost/finorg/?data=asset&id=${id}`);

export const setAsset = (data) => service.updateResource(`http://localhost/finorg/?data=saveAsset`, data);