

import { useEffect, useState } from 'react'
import { funcionAPI } from '../helpers/DatosAPI';

export const useFetchGif = (item) => {

    const [gifs, setGifs] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const mostrarGifs = async () => {
        const datos = await funcionAPI(item);
        setIsLoading(false)
        setGifs(datos)
    }

    useEffect(() => {

        mostrarGifs();

    }, [])

    return { gifs, isLoading }
}
