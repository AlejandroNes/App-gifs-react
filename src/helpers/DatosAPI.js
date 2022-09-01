

export const funcionAPI = async (item) => {

    const key = 'hXkfck4ATF8wECoNw5E5Dp59CYcBg02Y&'
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}q=${item}&limit=6`;

    const respuesta = await fetch(url);
    const { data } = await respuesta.json();
    return data
}