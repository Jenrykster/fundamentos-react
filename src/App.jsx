import React from 'react';
import './App.css';
import ComFilhos from './components/basicos/ComFilhos';
import ComParametro from './components/basicos/ComParametro';
import Condicional from './components/basicos/Condicional';
import CondicionalComIf from './components/basicos/CondicionalComIf';
import Card from './components/layout/Card';
import Primeiro from './components/basicos/Primeiro';
import Repeticao from './components/basicos/Repeticao';
import Pai from './components/comunicacao/direta/Pai';
import Super from './components/comunicacao/indireta/Super';
import Input from './components/form/Input';
import Contador from './components/contador/Contador';
import Mega from './components/mega/Mega';



export default props => 
    <div className="App">  
        <Card titulo="Exercício 1" color="#4c3b4d">
            <Primeiro/>
        </Card>
        <Card titulo="Exercício 2" color="#8ff991">
            <ComParametro titulo="TItle" 
            subtitulo="OPA"/>
        </Card>
        <Card titulo="Exercício 3" color="#2A363B">
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Bia</li>
                    <li>Carlos</li>
                    <li>Daniel</li>
                </ul>
            </ComFilhos>
        </Card>
        <Card titulo="Exercício 4" color="#E8175D">
            <Repeticao/>
        </Card>
        <Card titulo="Exercício 5" color="#F7DB4F">
            <Condicional num={10} />
        </Card>
        <Card titulo="Exercício 6" color="#83AF9B">
            <CondicionalComIf num={3}/>
        </Card>
        <Card titulo="Exercício 7" color="#CC527A">
            <Pai sobrenome="Henrique"/>
        </Card>
        <Card titulo="Exercício 8" color="#2F9599">
            <Super/>
        </Card>
        <Card titulo="Exercício 9" color="#ffd103">
            <Input/>
        </Card>
        <Card titulo="Exercício 10" color="#ff0070">
            <Contador/>
        </Card>
        <Card titulo="Exercício 11" color="#4f80bb">
            <Mega qtdNumeros={8}/>
        </Card>
    </div>