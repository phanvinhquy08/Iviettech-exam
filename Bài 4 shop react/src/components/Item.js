import React, { Component } from 'react'

import "./Item.css"
export default class Item extends Component {
    render() {
        const { cart, onDeleteItem } = this.props;
        const total = cart.count * cart.price;
        return (
            <div className="item" >
                <img src={cart.img} alt={cart.id} />
                <div className="cart-content" >
                    <h4 className="cart-name"> {cart.size + " | " + cart.name} </h4>
                    <h4 className="quantity">{"Quantity: " + cart.count}</h4>
                </div>
                <div className="price">
                    <h4>{"$ " + total.toFixed(2)}</h4>
                </div>
                <i className="fas fa-times" onClick={() => onDeleteItem(cart.id)}></i>
            </div>
        )
    }
}