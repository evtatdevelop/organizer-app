import Service from "../../services";

const service = new Service();

export const getAssets = () => service.getResource(`http://localhost/finorg/?data=assets&key=fL1XVQ5CeeyZ6sBcQlgthfoXeZDxqY`);

export const getAsset = (id) => service.getResource(`http://localhost/finorg/?data=asset&id=${id}&key=fL1XVQ5CeeyZ6sBcQlgthfoXeZDxqY`);

export const setAsset = (data) => service.postResource(`http://localhost/finorg/?data=saveAsset&key=fL1XVQ5CeeyZ6sBcQlgthfoXeZDxqY`, data);