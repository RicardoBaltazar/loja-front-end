import React from 'react';
import './App.css';

function primeiroJSX(){
  return (
    <div className="teste">
      Olá Mundo
    </div> 
  )
}


function App() {
  return (
    <div className="App">
      {primeiroJSX()}
    </div>
  );
}

export default App;
