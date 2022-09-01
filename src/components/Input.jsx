import React from 'react'
import { useState } from 'react'

export const Input = ({ agregarCategoria }) => {

    const [valor, setValor] = useState('');

    const handleInput = (e) => {
        setValor(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        agregarCategoria(valor.toLowerCase())
        setValor("");

    }

    return (
        <div className='container'>
            <form className='formulario' onSubmit={handleSubmit}>
                <input
                    className='entrada'
                    type="text"
                    placeholder='ingrese algun texto'
                    value={valor}
                    onChange={handleInput}
                />
                <input
                    className='boton'
                    type="submit"
                    value="ACEPTAR"
                />
            </form>
        </div>
    )
}
