import React from 'react'
import "./element.css"

const element = 'Olá '
const element2 = <h1>Mundo</h1>

export default function Element() {
    return (
        <div>
            <h3 className="element">{element}</h3>
            <h3 className="element2">{element2}</h3>
        </div>
    )
}