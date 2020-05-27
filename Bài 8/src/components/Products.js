import React, { Component } from 'react';
import { connect } from 'react-redux';

import Card from './Card';
import "./Products.css";
import * as act from '../action/action';

class Products extends Component {
    componentDidMount() {
        const { getAllProduct } = this.props;
        getAllProduct();
    }
    onChange = (e) => {
        const { onSort, productshow } = this.props
        if (e.target.value === 'asc') {
            onSort(productshow.sort((x, y) => x.price - y.price))
        }
        if (e.target.value === 'des') {
            onSort(productshow.sort((x, y) => y.price - x.price))
        }
    }

    render() {
        const { productshow } = this.props;
        return (
            <div>
                <div className="order-by">
                    <h4 style={{ marginLeft: "16px" }}>{productshow.length + " Product(s) found"}</h4>
                    <h5>Order By :</h5>
                    <select id="cars" onChange={this.onChange}>
                        <option>select</option>
                        <option value="des">Highest to Lowest</option>
                        <option value="asc">Lowest to Highest</option>
                    </select>
                </div>
                <div className="products">
                    {productshow.map((product, index) => (
                        <Card
                            key={index}
                            product={product}
                        />
                    ))}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    productshow: state.productshow
})

const mapDispatchToProps = dispatch => ({
    getAllProduct: () => {
        dispatch(act.getAllProduct())
    },
    onSort: (arr) => {
        dispatch(act.onSort(arr))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Products) 
