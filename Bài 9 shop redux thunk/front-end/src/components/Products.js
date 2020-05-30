import React, { Component } from 'react';
import { connect } from 'react-redux';

import Card from './Card';
import "./Products.css";
import * as act from '../action/action';

class Products extends Component {

    componentDidMount() {
        const { getAllProducts } = this.props;
        getAllProducts();
    }
    onChange = (e) => {
        const { sortPrice } = this.props
        sortPrice(e.target.value)
    }

    render() {
        const { products, loading } = this.props;
        return (
            <div>
                <div className="order-by">
                    <h4 style={{ marginLeft: "16px" }}>{products.length + " Product(s) found"}</h4>
                    <h5>Order By :</h5>
                    <select id="cars" onChange={this.onChange}>
                        <option>select</option>
                        <option value="desc">Highest to Lowest</option>
                        <option value="asc">Lowest to Highest</option>
                    </select>
                </div>
                <div className="products">
                    {loading && <div className="loader"></div>}
                    {products.map((product, index) => (
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
    products: state.products,
    loading: state.loading
})

const mapDispatchToProps = dispatch => ({
    getAllProducts: () => {
        dispatch(act.getAllProducts())
    },
    sortPrice: (sort) => {
        dispatch(act.sortPrice(sort))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Products) 
