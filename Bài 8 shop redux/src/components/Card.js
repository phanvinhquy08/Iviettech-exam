import React, { Component } from 'react'
import { connect } from 'react-redux';

import * as act from '../action/action';

class Card extends Component {
    onChooseSize = (e) => {
        const { onChooseSize } = this.props;
        onChooseSize(e.target.innerHTML.toUpperCase());
    }
    addToCart = (id) => {
        let { products, size, addToCart } = this.props;
        if (!size) {
            alert("Please pick your size")
            return;
        };

        let cartshow = products.map((x => {
            if (x.id === id) return { ...x, size, count: ++x.count }
            else return { ...x }
        }));
        let carts = cartshow.filter(x => x.count > 0)
        addToCart(cartshow, carts)
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
                <div className="btn-group">
                    {product.sizeList.map((x, index) => (<button
                        className="btn-size"
                        onClick={this.onChooseSize}
                        key={index}
                    >
                        {x}
                    </button>))}
                </div>
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
    onChooseSize: (size) => {
        dispatch(act.onChooseSize(size))
    },
    addToCart: (products, carts) => {
        dispatch(act.addToCard(products, carts))
    }  
})

export default connect(mapStateToProps, mapDispatchToProps)(Card)