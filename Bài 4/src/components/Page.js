import React, { Component } from 'react';
import Products from './Products';
import Filter from './Filter';
import SideBar from './SideBar';
import Modal from '../Modal/Modal';


export default class Page extends Component {
    constructor() {
        super();
        this.state = {
            products: [
                {
                    id: 0,
                    name: "Cat tee Black Shirt",
                    price: 10.9, or: "9 x $1.21",
                    freeShip: true,
                    count: 0,
                    sizeList: ["l", "xl", "xxl"],
                    img: require("../img/0.jpg")
                },
                {
                    id: 1,
                    name: "Sphyn Tie Dye Wine T Shirt",
                    price: 9, or: "3 x $3.00",
                    freeShip: true,
                    count: 0,
                    sizeList: ["xs", "s", "m", "ml", "l", "xl"],
                    img: require("../img/1.jpg")
                },
                {
                    id: 2,
                    name: "Skuul",
                    price: 14, or: "5 x $2.80",
                    freeShip: true,
                    count: 0,
                    sizeList: ["ml", "l", "xl"],
                    img: require("../img/2.jpg")
                },
                {
                    id: 3,
                    name: "Short Sleeve T-shirt",
                    price: 75, or: "5 x $15.00",
                    freeShip: true,
                    count: 0,
                    sizeList: ["l", "xl", "xxl"],
                    img: require("../img/3.jpg")
                },
                {
                    id: 4,
                    name: "Tso 3D Black Shirt",
                    price: 18.7, or: "4 x $4.67",
                    freeShip: false,
                    count: 0,
                    sizeList: ["s", "m", "ml", "l", "xl", "xxl"],
                    img: require("../img/4.jpg")
                },
                {
                    id: 5,
                    name: "Crazy Monkey Grey",
                    price: 134, or: "5 x $26.80",
                    freeShip: true,
                    count: 0,
                    sizeList: ["s"],
                    img: require("../img/5.jpg")
                },
                {
                    id: 6,
                    name: "White Skull T-shirt",
                    price: 25, or: "5 x $5.00",
                    freeShip: true,
                    count: 0,
                    sizeList: ["m", "xs"],
                    img: require("../img/6.jpg")
                },
                {
                    id: 7,
                    name: "Dark Thug Blue Navy T-shirt",
                    price: 29.45, or: "5 x $5.89",
                    freeShip: false,
                    count: 0,
                    sizeList: ["ml", "l", "xl", "xxl"],
                    img: require("../img/7.jpg")
                },
                {
                    id: 8,
                    name: "On The Street",
                    price: 49, or: "7 x $7.00",
                    freeShip: true,
                    count: 0,
                    sizeList: ["xs", "ml", "xl"],
                    img: require("../img/8.jpg")
                },
            ],
            carts: [],
            productshow: [],
            size: "",
            showModal: false
        }
    }
    componentDidMount() {
        this.setState({
            productshow: this.state.products
        })
    }
    onSort = (params) => {
        const { productshow } = this.state;
        if (params === 'asc') {
            this.setState({
                productshow: productshow.sort((x, y) => x.price - y.price)
            })
        }
        if (params === 'des') {
            this.setState({
                productshow: productshow.sort((x, y) => y.price - x.price)
            })
        }
    }

    onFilter = (arr) => {
        const { products } = this.state;
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
            this.setState({
                productshow: products
            })
        }
        else {
            this.setState({
                productshow: newProducts
            })
        }
    }

    onChooseSize = (e) => {
        this.setState({
            size: e.target.innerHTML.toUpperCase()
        })
    }

    addToCart = (id) => {
        let { products, size, carts } = this.state;
        if (!size) {
            alert("Please pick your size")
            return;
        };

        let cartshow = products.map((x => {
            if (x.id === id) return { ...x, size, count: ++x.count }
            else return { ...x }
        }));
        this.setState({
            products: cartshow,
            carts: cartshow.filter(x => x.count > 0),
            size: ""
        })
    }

    onDeleteItem = (id) => {
        const { carts, products } = this.state;
        this.setState({
            products: products.map(item => {
                if(item.id === id) return {...item, count:0}
                else return {...item}
            }),
            carts: carts.filter(item => item.id !== id)
        })
    }
    // MODAL
    handleShowMessageClick = () => this.setState({ showModal: true });
    handleCloseModal = () => this.setState({ showModal: false });
    // MODAL
    render() {
        const { productshow, carts, onDeleteItem } = this.state;
        return (
            <>
                <div className="container">
                    <Filter onFilter={this.onFilter} />
                    <Products
                        products={productshow}
                        onSort={this.onSort}
                        onFilter={this.onFilter}
                        onChooseSize={this.onChooseSize}
                        addToCart={this.addToCart}
                    />
                </div>
                <SideBar
                    carts={carts}
                    onDeleteItem={this.onDeleteItem}
                    handleShowMessageClick={this.handleShowMessageClick}
                    handleCloseModal={this.handleCloseModal}
                />
                {
                    this.state.showModal ? (
                        <Modal 
                            onClose={this.handleCloseModal}
                            carts={carts}
                        />
                    ) : null
                }
            </>
        )
    }
}
