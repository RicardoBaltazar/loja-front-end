import React from 'react';
import './App.css';

//fundamentos
import PrimeiroJSX from "./components/modulo1/Primeiro"
import Element from "./components/modulo1/Elemento"
import Button from "./components/modulo1/Button"
import Clique from "./components/modulo1/Clique"
import ComponenteA from "./components/modulo1/ComponenteA"
import ComponenteB from "./components/modulo1/ComponenteB"
import Ciclo from "./components/modulo1/Ciclo"
import Condicional from "./components/modulo1/Condicional"
import ListsAndKeys from "./components/modulo1/ListasEChaves"
import Eventos from "./components/modulo1/Eventos"
import EventDelete from "./components/modulo1/EventDelete"

//módulo aplicado a internet
import TodoListStateful from './components/modulo2/TodoListStatefull'
import TodoListFuncional from './components/modulo2/TodoListFuncional'
import NameForm from './components/modulo2/FormCompControlado'
import SorveteForm from './components/modulo2/SorveteFormControlado'
import FileInput from './components/modulo2/ComponenteNãoControlado'

function App() {
  return (
    <div className="App">
      {/*
      <PrimeiroJSX />
      <Element />
      <Button onClick={() => Clique(5,5)} name="Clicar" />
      <ComponenteA>
        <ComponenteB>
          <Button onClick={() => Clique(10,10)} name="Clicar2"/>
        </ComponenteB>
      </ComponenteA>
      <Ciclo />
      <Condicional />
      <ListsAndKeys />
      <Eventos />
      <EventDelete />
      */}
      <TodoListStateful />
      <TodoListFuncional />
      <NameForm />
      <SorveteForm />
      <FileInput />
    </div>
  );
}

export default App;
