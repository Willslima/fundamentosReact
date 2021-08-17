import React from 'react'
import produtos from '../../data/produtos'

export default _ => {
    let corA = {backgroundColor: '#B0C4DE'}
    let corB = {backgroundColor: '#708090'}

    let produtosLi = produtos.map(produto => {
        return (
            <tr style={produto.id % 2 == 0 ? corA : corB}>
                <td> {produto.id} </td>
                <td> {produto.produto} </td>
                <td> {produto.valor} </td>
            </tr>

        )
    })
    return (
        <div>
            <table>
                <tr>
                    <td> ID </td>
                    
                    <td> PRODUTO </td>
                    
                    <td> VALOR </td>
                </tr>
                {produtosLi}
            </table>
        </div>
    )
}