import React, {useState} from 'react';

export default props => {
    let [nome, setNome] = useState('Pedro');
    return (
        <div>
            <h3>{nome}</h3>
            <input type="text" onChange={e => {
                setNome(e.target.value)
            }} value={nome}></input>
        </div>
    )
}