import React, { Component } from 'react'
import { connect } from 'react-redux';

import "./Filter.css";
import * as act from '../action/action';


class Filter extends Component {
    constructor() {
        super();
        this.state = {
            active: {
                XS: false,
                S: false,
                M: false,
                ML: false,
                L: false,
                XL: false,
                XXL: false
            }
        }
    }

    onFilter = (arr) => {
        const { products, onFilter } = this.props;
        let newProducts = [];
        for (let item of arr) {
            for (let product of products) {
                if (product.sizeList.map(x => x.toUpperCase()).includes(item)) {
                    newProducts.push(product)
                    newProducts = [...new Set(newProducts)];
                }
            }
        }
        if (newProducts.length < 1) {
            onFilter(products)
        }
        else {
            onFilter(newProducts)
        }
    }

    onChangeActive = (e) => {
        const { active } = this.state;
        const { onFilter } = this.props;
        this.setState({
            active: { ...active, [e.target.innerHTML]: !active[e.target.innerHTML] }
        }, () => {
            const { active } = this.state;
            let arrFilter = [];
            for(let key in active) {
                if(active[key]) {
                    arrFilter.push(key)
                }
            } 
            this.onFilter(arrFilter)
        })
    }
    render() {
        const { active } = this.state
        return (
            <div className="filter">
                <h4>Sizes:</h4>
                <div className="button-group">
                    <button onClick={this.onChangeActive} className={active.XS ? "active" : ""}>XS</button>
                    <button onClick={this.onChangeActive} className={active.S ? "active" : ""}>S</button>
                    <button onClick={this.onChangeActive} className={active.M ? "active" : ""}>M</button>
                    <button onClick={this.onChangeActive} className={active.ML ? "active" : ""}>ML</button>
                    <button onClick={this.onChangeActive} className={active.L ? "active" : ""}>L</button>
                    <button onClick={this.onChangeActive} className={active.XL ? "active" : ""}>XL</button>
                    <button onClick={this.onChangeActive} className={active.XXL ? "active" : ""}>XXL</button>
                </div>
                <div className="content">
                    <p>Leave a star on GitHub if this repository was useful</p>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    products: state.products
})

const mapDispatchToProps = dispatch => ({
    onFilter: (products) => {
        dispatch(act.onFilter(products))
    }  
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter)