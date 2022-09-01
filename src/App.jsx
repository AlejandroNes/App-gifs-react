import React from 'react'
import { useState } from 'react'
import { Categoria, Input } from './components'

export const App = () => {

    const [categoria, setCategoria] = useState([])

    //mandar categoria
    const agregarCategoria = (valor) => {
        if (categoria.includes(valor)) return
        setCategoria([valor, ...categoria])
    }

    return (
        <div className='app'>
            <h1 className='titulo'>APP GIFS - REACT</h1>
            <Input agregarCategoria={agregarCategoria} />

            {categoria.length > 0 ? categoria.map(item => (
                <Categoria key={item} item={item} />
            )) : <h3 className='alerta'>SIN GIFS - BUSCA ALGUNO</h3>}


        </div>
    )
}
