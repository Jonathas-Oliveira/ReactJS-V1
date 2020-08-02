import React from 'react'


export default props =>{
    return (
        <div>
            <span>{props.numero}</span>
            <p>{props.numero % 2 === 0 ? <span>Par</span>: <span>Ímpar</span> }</p>
        </div>
    )
}