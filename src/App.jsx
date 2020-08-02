import React from 'react'
import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro'
import ComFilhos from './components/ComFilhos'
import Card from './components/layout/Cards'
import './App.css'
import Repeticao from './components/Repeticao.jsx'
import Condicional from './components/Codicional'
export default props => 
<div className='App'>
        <Card titulo='Primeiro componente'>
             <ComParametro titulo='este é o titulo' subtitulo='este é o subtitulo'/>
        </Card>
        <Card titulo='Condicional'>
            <Condicional numero={11}/>
        </Card>
        <Card titulo='Repetição'>
            <Repeticao></Repeticao>
        </Card>
        <Card titulo='Exercício X'> <Primeiro/> </Card>
        <Card titulo='Props Children '>  
        <ComFilhos>
        <ul>
            <li>Ana</li>
            <li>Daniel</li>
            <li>ANYbody</li>
        </ul>
    </ComFilhos>
        </Card>
        
    </div>