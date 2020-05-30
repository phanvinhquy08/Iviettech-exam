import React, { Component } from 'react'
import { connect } from 'react-redux';

import * as act from '../action/action';

class Card extends Component {
    addToCart = (id) => {
        const { addToCart } = this.props;
        addToCart(id);
    }
    
    render() {
        const { product } = this.props;
        return (
            <div className="card">
                <div className="ship">
                    <span>{product.freeShip ? "Free Shipping" : ""}</span>
                </div>
                <div className="image">
                    <img src={product.img} alt={product.id} />
                </div>
                <h3>{product.name}</h3>
                <div className="stick" />
                <div className="price">
                    <span>$</span><h2>{product.price}</h2>
                    <h4>{product.or}</h4>
                </div>
                <button className="btn-add" onClick={() => this.addToCart(product.id)}>Add to Cart</button>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    products: state.products,
    size: state.size
})

const mapDispatchToProps = dispatch => ({
    addToCart: (id) => {
        dispatch(act.addToCart(id))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Card)