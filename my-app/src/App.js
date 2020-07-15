import React from 'react';
import './App.css';

import PrimeiroJSX from "./components/Primeiro"
import Element from "./components/Elemento"
import Button from "./components/Button"
import Clique from "./components/Clique"
import Mostra from "./components/MostraComp"

function App() {
  return (
    <div className="App">
      <PrimeiroJSX />
      <Element />
      <Button onClick={() => Clique(5,5)} name="Clicar" />
      
    </div>
  );
}

export default App;
