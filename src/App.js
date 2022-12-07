import { useState } from 'react';
import './App.css';

function App() {
  
  const [counter,setCounter]=useState(0);
  function incrementCounter(){
    setCounter(counter+1);
  }
  function decrementCounter(){
    if(counter!=0){
    setCounter(counter-1);
    }
  }
  function resetCounter(){
    setCounter(0);
  }
  return(
    <div 
    className="App">
      <header className="App-header">
        <div className="counter">
      <h3 style={{
        color:'#57655E',
        fontSize:25,
      }}>Counter App</h3>
      <h2 style={{
        color:'#5B4285',
        fontSize:35,
        marginTop:'1px'
      }}>{counter}</h2> 
      <div className="align">
      <button className="Button" style={{
            margin:'15px',
            padding:'1.5em',
            borderRadius:'50%',
            shadowRadius:3,
            border:'1px solid #ededed',
            fontWeight:'bold',
            color:'#76A4DA',
            
            
      }}
              onClick={incrementCounter}>Add</button>
      <button className="Button" style={{
            margin:'15px',
            padding:'1.5em',
            borderRadius:'50%',
            shadowRadius:3,
            border:'1px solid #ededed',
            fontWeight:'bold',
            color:'#76A4DA'
      }}
        onClick={decrementCounter}>Minus</button>
      <button className="Button" style={{
            margin:'15px',
            padding:'1.5em',
            borderRadius:'50%',
            shadowRadius:3,
            border:'1px solid #ededed',
            fontWeight:'bold',
            color:'#98CBCC'
      }}
        onClick={resetCounter}>Reset</button></div>
        </div>
      </header>
    </div>
  );
}

export default App;
