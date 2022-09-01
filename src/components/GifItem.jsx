import React from 'react'

export const GifItem = ({ item }) => {
    return (
        <div className='gif-item'>
            <img src={item.images.downsized_medium.url} alt={item.title} />
            <p>{item.title}</p>
        </div>
    )
}
