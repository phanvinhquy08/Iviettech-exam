import * as type from '../type/type';

const initialState = {
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

export default (state = initialState, action) => {
    switch (action.type) {
        case type.GET_ALL_PRODUCT: 
            return {...state, productshow: state.products}
        case type.SORT_PRODUCT:
            console.log("SORT_PRODUCT")
            return {...state, productshow: [...action.productshow]}
        case type.CHOOSE_SIZE: 
            return {...state, size: action.size}
        case type.ADD_TO_CART: 
            return {...state, productshow: action.products, carts: action.carts, size: ""}
        case type.DELETE_ITEM: 
            return {...state, products: action.products, carts: action.cartshow}
        case type.SHOW_MODAL:
            return {...state, showModal: true}
        case type.OFF_MODAL:
            return {...state, showModal: false}
        case type.ON_FILTER:
            return {...state, productshow: action.productshow}
        default:
            return state
    }
}
