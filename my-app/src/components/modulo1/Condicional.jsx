import React from 'react';


const buttonA = <button>Histórico de clientes</button>
const buttonB = <button>Cadastrar cliente</button>

const hasCustomer = false

//se houver histórico, então mostre o botão
export default function Condicional() {


  const renderShowHistory = () => (
    <div>
      Clique para visualizar o histórico de clientes
      <br />
      {buttonA}
    </div>
  )

  const renderAddCustomer = () => (
    <div>
      Clique para cadastrar cliente
      <br />
      {buttonB}
    </div>
  )

    const customer = 'Ricardo'

    const showCustomer = () => {
        if(!hasCustomer){
          return null 
        } else {
          return (
          <h1>Nome do cliente: {customer}</h1>
          )
        }
    }

  return (
    <div>
      <h2>Aula 2</h2>
      {hasCustomer ? renderShowHistory() : renderAddCustomer()}
      <div>
        {showCustomer()}
      </div>
    </div>
  );
}