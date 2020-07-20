import React from 'react'

const listCustomer = [
    {
        id: '1',
        name: 'Ricardo'
    },
    {
        id: '2',
        name: 'Vargas'
    },
    {
        id: '3',
        name: 'Baltazar'
    },
    {
        id: '4',
        name: 'Rick'
    },
]

export default function ListsAndKeys() {

    const renderListCostumer = (customer, index) => {
        return (
            //o react sempre precisa da key, por isso tem a props index
        <li key={index}>{customer.id} - {customer.name}</li>
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