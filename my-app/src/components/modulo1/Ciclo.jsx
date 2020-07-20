import React, { Component } from 'react'
import "./button.css"

class Ciclo extends Component {

    constructor(props) {
        super(props)

        this.state = {
            clock: 1000,
            copo: 'agua'
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                copo: 'cerveja'
            })
        }, 3000)
    }

    alterarCopo = () => {
        this.setState({
            copo: 'suco'
        })
    } 

    render() {
        const {clock, copo} = this.state
        return (
            <div>
                <h1>{clock}</h1>
                <button className="button" onClick={() => this.alterarCopo()}>{copo}</button>
            </div>
        )
    }
}

export default Ciclo