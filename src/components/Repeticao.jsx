import React from 'react'

import produtos from './data/produtos'


export default props => {
    function PegandoProduto(){
       return produtos.map(prod =>{
            return <li key={prod.id}>
                {prod.id} - {prod.nome} R$ {prod.preco}
                </li>
       })
    }
    
    return (
    <div>
        <h1>Lista</h1>
        <ul>
            {PegandoProduto()}
        </ul>
    </div>
    )
}