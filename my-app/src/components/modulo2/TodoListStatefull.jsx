//Stateful = usa estado
//stateless = não usa estado e é contruido com funções em javascript, usqado para renderizar componentes simples
//o sestados em react são imutaveis
//com hooks, os componentes functions também possuem estados, tornando eles stateful
import React, { Component } from 'react'


export default class TodoListStatefull extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                'Tomate',
                'Alface',
                'melancia'
            ]
        }
    }

    addItem = (item) => {
        /*
        [...this.state.items, items] é o mesmo que
        let itemsUpdate = this.state.items;
        itemsUpdate.push(item);
        this.setState({items: itemsUpdate });
        */
        this.setState({ items: [...this.state.items, item] })
    }

    removeItem = () => {
        /*
        [...this.state.items.slice(1)] é o mesmo que
        let itemsUpdate = this.state.items;
        itemsUpdate.pop(item);
        this.setState({items: itemsUpdate });
        */
        this.setState({ items: [...this.state.items.slice(1)] })
    }

    render() {
        const { items } = this.state;
        return (
            <div className="bloco-lista">
                <h2>Minha Lista stateful</h2>
                <ul className='lista-estilizada'>
                    {items.map(item => <li>{item}</li>)}
                </ul>
                <button onClick={() => this.addItem('abobora')}>Adicionar Item</button>
                <button onClick={() => this.removeItem()}>Remover Item</button>
            </div>
        )
    }

}