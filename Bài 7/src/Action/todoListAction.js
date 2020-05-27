import * as type from '../Type/type';
export const getAllTodo = () => {
    return {
        type: type.GET_ALL_TODO
    }
}
export const createTodo = (todo) => {
    return {
        type: type.CREATE_TODO,
        payload: todo
    }
}
export const deleteTodo = (id) => {
    return {
        type: type.DELETE_TODO,
        payload: id
    }
}
export const getOneTodo = id => {
    return {
        type: type.GET_ONE_TODO,
        payload: id
    }
}
export const setTodo = (todo) => {
    return {
        type: type.SET_TODO,
        payload: todo
    }
}
export const editTodo = (id) => {
    return {
        type: type.EDIT_TODO,
        payload: id
    }
}