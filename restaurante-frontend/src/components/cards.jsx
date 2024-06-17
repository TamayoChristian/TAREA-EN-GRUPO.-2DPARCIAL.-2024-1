import React, { useState } from 'react'

export const Cards = ({ nombre, descripcion, precio, handleAgregar, handleQuitar}) => {

    const [agregado, setAgregado] = useState(false)
    
    const ClickAgregar  = () => {
        handleAgregar()
        setAgregado(true)
    }

    const ClickRetirar  = () => {
        handleQuitar()
        setAgregado(false)
    }
    return (
        <div>
            <div>
                <h3>{nombre}</h3>
                <p>{descripcion}</p>
                <p>{precio}</p>
            </div>
            <div>
                {agregado
                    ? <button onClick={ClickRetirar}>Retirar de la bolsita</button>
                    : <button onClick={ClickAgregar}>Agregar a la bolsita</button>
                }
            </div>
        </div>
    )
}
