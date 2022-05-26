import Service from "../../services";

const service = new Service();

export const getAssets = () => service.getResource(`http://localhost/finorg/?data=assets&key=fL1XVQ5CeeyZ6sBcQlgthfoXeZDxqY`);
