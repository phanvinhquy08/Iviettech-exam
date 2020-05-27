import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        const { product, onChooseSize, addToCart } = this.props;
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
                        onClick={onChooseSize}
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
                <button className="btn-add" onClick={() => addToCart(product.id)}>Add to Cart</button>
            </div>
        )
    }
}
