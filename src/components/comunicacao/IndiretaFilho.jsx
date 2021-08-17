import React from 'react'

export default props => {
    let cb = props.quandoClicar
    return (
        <div>
            <div>
                Filho
            </div>
            <button onClick={_ => cb('Fernando', 51, true)}>
                Fornecer dados
            </button>
        </div>
    )
}