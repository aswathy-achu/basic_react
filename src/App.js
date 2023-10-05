import Header from './header';
import logo from './logo.svg';
import React,{useState} from 'react';
import './style.css'
import Counter from './Counter';

function App() {
  return (
    <div style={{display:"flex",justifyContent:'center',flexDirection:"column",alignItems:'center'}}>
     <h1>Counter App</h1>
    <Counter/>
    </div>
  )
}

export default App;
