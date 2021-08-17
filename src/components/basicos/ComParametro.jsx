import React from 'react'

export default function ComParametro(props) {
    return (
        <div>
            <h2>{props.titulo}</h2>
            <p>Nome: { props.nome }</p>
            <p>Nota: { props.nota }</p>
        </div>
    )
}