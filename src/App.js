
import './App.css';
import Array from './components/Array';
import React,{useState} from 'react'
import CounterClass from './components/CounterClass';
import FunctionCunter from './components/CounterFunction';
import Child1 from './components/Child1';
import Form from './components/Form';


function App() {

  const [counter,setCounter]=useState(0);

  return (
    <div className="App">
      {/* <p>This is Functional Component</p>
        <FunctionCunter />
      <hr></hr>
      <p>This is Class Component</p>
      <CounterClass />
      <hr></hr>
      <Array />
      <hr></hr>
      <Child1 counter={counter} setCounter={setCounter} />
      <hr></hr> */}
      <Form />
    </div>
  );
}

export default App;
