import React from 'react';
import {Third} from './Third.js'

export function Second(props){
    let number = parseInt(props.numberCount)
    return(
        <div>
            <h2>First Child</h2>
            <h3>The square of {number} is = {number*number}</h3>
            <hr/>
            <Third squaredNumber={number*number}/>

        </div>
    )
}