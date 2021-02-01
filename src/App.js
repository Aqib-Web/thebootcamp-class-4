import React, {useState} from 'react';
import {Second} from './Second.js';
import "./App.css"

function App(){
  let [number, setNumber] = useState(0);
  let [isMorning, setMorning] = useState(false)
  return(
    <div className={`box ${isMorning ? "dayLight" : "nightLight"}`}>
      <hr/>
      <h1>Good {isMorning ? "Morning" : "Night"}!</h1>
      <hr/>
      <br/>
      <Second numberCount={number} />

      <button onClick={()=>
        setNumber(++number)
      }>Counter</button>
      
      <button onClick={()=>setMorning(!isMorning)}>Switch Time</button>
    </div>

  );

}


export default App;
