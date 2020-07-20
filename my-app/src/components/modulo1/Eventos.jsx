import React from "react"



export default function Eventos() {

    const name = 'ricardo baltazar'

    const handleChange = (e) => {
        const { value } = e.target
        console.log(value)
    }
    
    const showEvent = () => {
        console.log('evento')
        alert(name)
    }
    const button = <button onClick={showEvent}>Mostrar evento</button>

    const buttonDelete = <button onClick={showEvent}>Deletar</button>

    return (
        <div>
            <h1>Eventos</h1>
            <input onChange={handleChange} />
            {button}
        </div>
    )
}