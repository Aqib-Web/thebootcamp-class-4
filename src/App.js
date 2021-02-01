import React, {useState} from 'react';
import {Message} from './Message.js'
import './App.css';

function App() {
  let [number, setNumber] = useState(0);
  let [isMorning, setMorning] = useState(false);
  return (
    <div className={`box ${isMorning ? "dayTime" : "nightTime"}`}>
      <h1>It is {isMorning ? "Morning" : "Night"}!</h1>
      <Message counter={number}/>
      <br/>
      <button onClick={ 
        ()=> setNumber(number + 2)
      }>
      Click me
      </button>
        <hr/>
      <button onClick={()=>setMorning(!isMorning)}>Change Time
      </button>
    </div>

  );
}

export default App;
