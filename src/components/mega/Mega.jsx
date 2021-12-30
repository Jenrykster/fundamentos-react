import React, { useState } from 'react';

export default props => {
    const [numeros, setNumeros] = useState(Array(props.qtdNumeros).fill(0));
    
    function gerarNumeroNaoContid(array){
        const novoNumero = parseInt(Math.random() * (60 - 1)) + 1;
        return array.includes(novoNumero) ? gerarNumeroNaoContid(array) : novoNumero;
    }

    function gerarNumeros() {
        const novoArray = Array(props.qtdNumeros)
        .fill(0)
        .reduce(a => [...a, gerarNumeroNaoContid(a)], [])
        .sort((a , b) => a-b)
        setNumeros(novoArray);
    }
    
    return (
        <>
            <h3>Mega</h3>
            <h4>{numeros.join(' ')}</h4>
            <button onClick={gerarNumeros}>Gerar Números</button>
        </>
    )
}