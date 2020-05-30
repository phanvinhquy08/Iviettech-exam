import * as type from '../type/type';
export const getAllProduct = () => {
    return {
        type: type.GET_ALL_PRODUCT
    }
}
export const onSort = (productshow) => {
    return {
        type: type.SORT_PRODUCT,
        productshow
    }
}
export const onChooseSize = (size) => {
    return {
        type: type.CHOOSE_SIZE,
        size
    }
}
export const addToCard = (products, carts) => {
    return {
        type: type.ADD_TO_CART,
        products,
        carts
    }
}
export const onDeleteItem = (products, cartshow) => {
    return {
        type: type.DELETE_ITEM,
        products,
        cartshow
    }
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
export const onFilter = (productshow) => {
    return {
        type: type.ON_FILTER,
        productshow
    }
}