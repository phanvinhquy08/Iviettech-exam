import React, { Component } from 'react'
import { connect } from 'react-redux';

import Item from './Item';
import "./SideBar.css";
import * as act from '../action/action';

class SideBar extends Component {
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
        const { showModal } = this.props;
        showModal();
    }

    onDeleteItem = (params) => {
        
    }
    
    render() {
        const { carts } = this.props;
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
                        onDeleteItem={this.onDeleteItem}
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

const mapStateToProps = (state) => ({
    carts: state.carts
})

const mapDispatchToProps = dispatch => ({
    showModal: () => {
        dispatch(act.showModal())
    }  
})

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)