import React from 'react';
import './App.css';

import PrimeiroJSX from "./components/Primeiro"
import Element from "./components/Elemento"
import Button from "./components/Button"
import Clique from "./components/Clique"
import ComponenteA from "./components/ComponenteA"
import ComponenteB from "./components/ComponenteB"

function App() {
  return (
    <div className="App">
      <PrimeiroJSX />
      <Element />
      <Button onClick={() => Clique(5,5)} name="Clicar" />
      <ComponenteA>
        <ComponenteB>
          <Button onClick={() => Clique(10,10)} name="Clicar2"/>
        </ComponenteB>
      </ComponenteA>
    </div>
  );
}

export default App;
