import Service from "../../services";

const service = new Service();

export const getAssets = () => service.getResource(`http://localhost/finorg/?data=assets&key=fL1XVQ5CeeyZ6sBcQlgthfoXeZDxqY`);

// export const getAssets = async () => {
//   return await new Promise(resolve => {
//     setTimeout(() => resolve(assets), 3000)
//   });
// }