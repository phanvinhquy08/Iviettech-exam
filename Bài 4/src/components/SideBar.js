import React, { Component } from 'react'

import Item from './Item';
import "./SideBar.css"
export default class SideBar extends Component {
    constructor() {
        super();
        this.state = {
            show: false
        }
    }
    handleShow = () => {
        this.setState({
            show: !this.state.show
        })
    }

    handleCheckOut = () => {
        const { handleShowMessageClick } = this.props;
        handleShowMessageClick();
        this.setState({show: false})
    }

    render() {
        const { carts, onDeleteItem } = this.props;
        const { show } = this.state;
        const subtotal = carts.reduce((sum, item) => sum + item.price * item.count, 0)
        const totalProduct = carts.reduce((sum, item) => sum + item.count, 0)
        return (
            <div className={`side-bar ${show ? "show" : ""}`}>
                <div className="cart-button">
                    <i className={`fas fa-2x fa-shopping-bag ${show ? "show" : ""}`} onClick={this.handleShow}></i>
                    <span className={show ? "show" : ""}>{totalProduct}</span>
                </div>
                <div className="order">
                    {carts.map((item, index) => (<Item
                        key={index}
                        cart={item}
                        onDeleteItem={onDeleteItem}
                    />))}
                </div>
                <div className="subtotal">
                    <h4 id="subtotal">SUBTOTAL</h4>
                    <h2>{"$ " + subtotal.toFixed(2)}</h2>
                </div>
                <div className="check-out" onClick={this.handleCheckOut}>
                    <button>CHECKOUT</button>
                </div>
            </div>
        )
    }
}
