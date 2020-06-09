import React from 'react';
import './App.css';
import Hello from "./Hello";




function App({name, age}) {
  return <div>
    <strong> Hello {name} & Age = {35-10} </strong>
    <h1>This is H1 heading</h1> 
    <h2>This is h2 heading</h2>
    <ul type="disc">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>

<ol type="1">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>
    <br/>
    <Hello fName={name}></Hello>
    </div>
}

export default App;
