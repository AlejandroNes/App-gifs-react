import React from 'react'
import { useFetchGif } from '../hooks/useFetchGif';
import { GifItem } from './GifItem';

export const Categoria = ({ item }) => {

    const { gifs, isLoading } = useFetchGif(item)




    return (
        <>
            <h3 className='titulo-categoria'>{item.toUpperCase()}</h3>
            {isLoading && <p className='alerta'>Cargando...</p>}
            <div className='grid-gifs'>
                {gifs.map(item => (
                    <GifItem key={item.id} item={item} />
                ))}
            </div>
        </>
    )
}

