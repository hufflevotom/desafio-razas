import { httpClient } from "../Util/Config/api";

export const listarRazas = async () => {
    return await httpClient.get('breeds/list/all');
}

export const obtenerImagenes = async (breed) => {
    return await httpClient.get('breed/' + breed + '/images/random/4');
}
