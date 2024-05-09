import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

function AddThings(){

  const [things,setThings]=React.useState(["thing1","thing2"]);
  function Add(){
    setThings((prevThings)=>{
        return [...prevThings,`thing${prevThings.length+1}`]
    })
  }
  const newThings = things.map((thing)=>{
    return <h1>{thing}</h1>
  })
   
  return(
      <div className='box'>
        <button onClick={Add}>Add Thing</button>
        {newThings}
      </div>
  );
}
ReactDOM.render(
  <AddThings/>,
  document.getElementById("root")
  );