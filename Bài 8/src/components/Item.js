import React, { Component } from 'react'
import { connect } from 'react-redux';

import "./Item.css";
import * as act from '../action/action';

class Item extends Component {
    onDeleteItem = (id) => {
        const { carts, productshow, onDeleteItem } = this.props;
        const products = productshow.map(item => {
            if(item.id === id) return {...item, count:0}
            else return {...item}
        })
        const cartshow = carts.filter(item => item.id !== id)
        onDeleteItem(products, cartshow)
    }
    
    render() {
        const { cart } = this.props;
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
                <i className="fas fa-times" onClick={() => this.onDeleteItem(cart.id)}></i>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    carts: state.carts,
    productshow: state.productshow
})

const mapDispatchToProps = dispatch => ({
    onDeleteItem: (products, cartshow) => {
        dispatch(act.onDeleteItem(products, cartshow))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Item)