import React from 'react';
import If from './If';

export default props => {

    return (
        <div>
            <h2> O número {props.num} é</h2>
            <If test={props.num % 2 === 0 }>
                <span>Par</span> 
            </If>
            <If test={props.num % 2 === 1}>
                <span>Ímpar</span>
            </If>
        </div>
    )
}