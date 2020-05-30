import React, { Component } from 'react'

export default class ModalItem extends Component {
    render() {
        const { cart } = this.props;
        const total = cart.count * cart.product.price;
        return (
            <div className="modal-item">
                <div className="modal-image">
                    <img src={cart.product.img} alt={cart.product.id}/>
                </div>
                <div className="modal-content">
                    <h4 className="modal-name"> {cart.product.sizeList + " | " + cart.product.name} </h4>
                    <h4 className="modal-quantity">{"Quantity: " + cart.count}</h4>
                </div>
                <div className="modal-price">
                    <h4>{"$ " + total.toFixed(2)}</h4>
                </div>
            </div>

        )
    }
}
