import React from "react"

const listCustomer = [
    {
        id: '1',
        name: 'Ricardo'
    },
    {
        id: '2',
        name: 'Vargas'
    },
]

export default function EventDelete() {

    const handleClick = (e, id) => {
        console.log('deletado')
        alert(`Id do cliente: ${id}`)
    }

    const renderListCostumer = (customer, index) => {
        return (
            //o react sempre precisa da key, por isso tem a props index
        <li key={index}>{customer.id} - {customer.name} <button onClick={
            (e) => handleClick(e, customer.id)
        }>Deletar Cliente</button></li>
        )
    }

    return (
        <div>
            <h3>Lista de clientes</h3>
            <div>
                <ul>
                    {listCustomer.map(renderListCostumer)}
                </ul>
            </div>
        </div>
    )
}