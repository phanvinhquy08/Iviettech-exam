import * as type from '../constant/type';

const initialState = {
    products: [],
    carts: [],
    showModal: false,
    loading: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case type.START_LOADING:
            return {...state, loading: true}
        case type.LOADING_SUCCESS:
            return {...state, loading: false, products: action.products}
        case type.SORT_PRODUCT:
            return {...state, loading: false, products: action.products}
        case type.FILTER_PRODUCT:
            return {...state, loading: false, products: action.products}
        case type.GET_ALL_CART:
            return {...state, loading: false, carts: action.carts}
        case type.SHOW_MODAL:
            return {...state, showModal: true}
        case type.OFF_MODAL:
            return {...state, showModal: false}
        default:
            return state
    }
}
