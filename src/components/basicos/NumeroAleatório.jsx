import React from 'react'

export default props => {

    const { min, max } = props 
    const randomNumber = parseInt(Math.floor(Math.random()*(max - min +1)) + min)
    return (
    <>
        <h3>Valor Minimo: {min} </h3>
        <h3>Valor Máximo: {max} </h3>
        Número Aleatório {randomNumber}
    </>
    )
}