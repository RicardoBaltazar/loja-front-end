import React from 'react'
import "./primeiro.css"

function soma(a, b) {
    return a + b
}


export default function PrimeiroJSX() {
    return (
        <div className="teste">
            <h1>Olá Mundo</h1>
            <h2>Soma: {soma(10, 10)}</h2>
            
        </div>
    )
}
