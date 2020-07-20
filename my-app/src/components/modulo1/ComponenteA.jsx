import React from 'react'

export default function ComponenteA(props){
    return (
        <div>
            <h2>Componente A</h2>
            <div>
                {props.children}
            </div>
        </div>
    )
}