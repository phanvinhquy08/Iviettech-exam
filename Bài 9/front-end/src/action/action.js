import axios from 'axios';

import * as type from '../constant/type';
import * as url from '../constant/url';


export const startSpinLoading = () => {
    return {
        type: type.START_LOADING
    }
}
export const getAllProducts = () => dispatch => {
    dispatch(startSpinLoading());
    axios.get(url.urlProduct)
        .then(res => {
            dispatch({
                type: type.LOADING_SUCCESS,
                products: res.data
            })
        })

}
export const sortPrice = (param) => dispatch => {
    dispatch(startSpinLoading());
    axios.get(url.urlProduct + "?_sort=price&_order=" + param)
        .then(res => {
            dispatch({
                type: type.SORT_PRODUCT,
                products: res.data
            })
        })
}
export const filterProduct = arr => dispatch => {
    dispatch(startSpinLoading());
    const queryString = arr.map(item => {
        return "sizeList=" + item
    }).join("&");

    axios.get(url.urlProduct + "?" + queryString)
        .then(res => {
            dispatch({
                type: type.FILTER_PRODUCT,
                products: res.data
            })
        })
}
export const addToCart = id => async dispatch => {
    const res = await axios.get(url.urlCart);
    const idListCart = res.data.map(x => x.product.id)
    if(!idListCart.includes(id)) {
        const res = await axios.get(url.urlProduct + id)
        const item = {product: res.data, count: 1}
        axios.post(url.urlCart, item)
        dispatch(getAllCarts());
    }
    else {
        const res = await axios.get(url.urlCart + "?product.id=" + id);
        const item = {...res.data[0], count: ++res.data[0].count }
        axios.put(url.urlCart + item.id, item);
        dispatch(getAllCarts());
    }
}
export const getAllCarts = () => dispatch => {
    axios.get(url.urlCart)
        .then(res => {
            dispatch({
                type: type.GET_ALL_CART,
                carts: res.data
            })
        })
}
export const deleteCart = id => async dispatch => {
    const res = await axios.get(url.urlCart + "?product.id=" + id);
    axios.delete(url.urlCart + res.data[0].id);
    dispatch(getAllCarts());
}
export const showModal = () => {
    return {
        type: type.SHOW_MODAL
    }
}
export const offModal = () => {
    return {
        type: type.OFF_MODAL
    }
}