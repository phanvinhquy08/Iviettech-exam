import React, { Component } from 'react'
import { connect } from 'react-redux';

import "./Item.css";
import * as act from '../action/action';

class Item extends Component {
    onDeleteItem = (id) => {
        const { deleteCart } = this.props;
        deleteCart(id)
    }
    
    render() {
        const { cart } = this.props;
        const total = cart.count * cart.product.price;
        return (
            <div className="item" >
                <img src={cart.product.img} alt={cart.id} />
                <div className="cart-content" >
                    <h4 className="cart-name"> {cart.product.sizeList + " | " + cart.product.name} </h4>
                    <h4 className="quantity">{"Quantity: " + cart.count}</h4>
                </div>
                <div className="price">
                    <h4>{"$ " + total.toFixed(2)}</h4>
                </div>
                <i className="fas fa-times" onClick={() => this.onDeleteItem(cart.product.id)}></i>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    carts: state.carts,

})

const mapDispatchToProps = dispatch => ({
    deleteCart: id => {
        dispatch(act.deleteCart(id))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Item)