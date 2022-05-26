import Service from "../../services";

const service = new Service();

export const getAssets = () => service.getResource(`http://localhost/finorg/?data=assets&key=fL1XVQ5CeeyZ6sBcQlgthfoXeZDxqY`);

export const getAsset = (id) => service.getResource(`http://localhost/finorg/?data=asset&id=${id}&key=fL1XVQ5CeeyZ6sBcQlgthfoXeZDxqY`);
