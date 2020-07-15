import React from 'react'
import "./button.css"

//props
export default function Button(props){

    //const name = props.name
        const { name, onClick } = props

    return (
        <button onClick={onClick} className="button">
            {name}
        </button>
    )
}