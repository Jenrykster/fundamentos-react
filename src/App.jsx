import React from 'react';
import './App.css';
import ComFilhos from './components/basicos/ComFilhos';
import ComParametro from './components/basicos/ComParametro';
import Condicional from './components/basicos/Condicional';
import CondicionalComIf from './components/basicos/CondicionalComIf';
import Card from './components/layout/Card';
import Primeiro from './components/basicos/Primeiro';
import Repeticao from './components/basicos/Repeticao';



export default props => 
    <div className="App">  
        <Card titulo="Exercício 1">
            <Primeiro/>
        </Card>
        <Card titulo="Exercício 2">
            <ComParametro titulo="TItle" 
            subtitulo="OPA"/>
        </Card>
        <Card titulo="Exercício 3">
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Bia</li>
                    <li>Carlos</li>
                    <li>Daniel</li>
                </ul>
            </ComFilhos>
        </Card>
        <Card titulo="Exercício 4">
            <Repeticao/>
        </Card>
        <Card titulo="Exercício 5">
            <Condicional num={10} />
        </Card>
        <Card titulo="Exercício 6">
            <CondicionalComIf num={3}/>
        </Card>
    </div>