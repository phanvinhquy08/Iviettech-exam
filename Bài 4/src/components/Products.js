import React, { Component } from 'react';

import Card from './Card';
import "./Products.css"

export default class Products extends Component {
    onChange = (e) => {
        const { onSort } = this.props
        onSort(e.target.value)
    }

    render() {
        const { products, onChooseSize, addToCart } = this.props;
        return (
            <div>
                <div className="order-by">
                    <h4 style={{ marginLeft: "16px" }}>{products.length + " Product(s) found"}</h4>
                    <h5>Order By :</h5>
                    <select id="cars" onChange={this.onChange}>
                        <option>select</option>
                        <option value="des">Highest to Lowest</option>
                        <option value="asc">Lowest to Highest</option>
                    </select>
                </div>
                <div className="products">
                    {products.map((product, index) => (
                        <Card
                            key={index}
                            product={product}
                            onChooseSize={onChooseSize}
                            addToCart={addToCart}
                        />
                    ))}
                </div>
            </div>
        )
    }
}
