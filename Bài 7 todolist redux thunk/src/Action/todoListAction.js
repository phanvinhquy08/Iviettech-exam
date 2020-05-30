import axios from 'axios';
import qs from 'querystring';

import * as type from '../Type/type';
// GET DATA
export const startSpinLoading = () => {
    return {
        type: type.START_SPIN
    }
}
export const getDataSuccess = (todos) => {
    return {
        type: type.GET_DATA_SUCCESS,
        todos
    }
}

export const getDataFail = () => {
    return {
        type: type.GET_DATA_FAIL
    }
}
export const showModal = () => {
    return {
        type: type.SHOW_MODAL
    }
}
// GET DATA
export const getAllTodo = () => dispatch => {
    dispatch(startSpinLoading());
    axios.get("https://5e633910f48bc60014536a40.mockapi.io/api/todoLists")
        .then(res => {
            dispatch(getDataSuccess(res.data))
        })
        .catch(err => {
            dispatch(getDataFail())
        })
}
export const createTodo = (todo) => dispatch => {
    dispatch(startSpinLoading())
    axios.post("https://5e633910f48bc60014536a40.mockapi.io/api/todoLists", qs.stringify(todo), {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
        .then(res => {
            dispatch({
                type: type.CREATE_TODO,
                payload: todo,
                loading: false
            })
        })
}
export const deleteTodo = (id) => dispatch => {
    dispatch(startSpinLoading());
    axios.delete("https://5e633910f48bc60014536a40.mockapi.io/api/todoLists/" + id)
        .then(res => {
            dispatch({
                type: type.DELETE_TODO,
                payload:id,
            })
        }) 

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