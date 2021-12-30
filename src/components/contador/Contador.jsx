import React from 'react';
import Botoes from './Botoes';
import Display from './Display';
import PassoForm from './PassoForm';

export default class Contador extends React.Component {
    constructor(props){
        super(props);
        this.state = {number: 0, passo: 1};
    }

    aumentarNumero() {
        let newNumber = this.state.number + this.state.passo;
        this.setState({
            number: newNumber
        })
    }
    diminuirNumero() {
        let newNumber = this.state.number - this.state.passo;
        this.setState({
            number: newNumber
        })  
    }

    mudarPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso
        })
    }

    render() {
        return (
           <div>
               <h2>Contador</h2>
               <Display valor={this.state.number}/>
               <PassoForm passo={this.state.passo} onPassoChange={this.mudarPasso}/>
               <Botoes onInc={() => this.aumentarNumero()} onDec={() => this.diminuirNumero()}/>
            </div>
        )
    }
}