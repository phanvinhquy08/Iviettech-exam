import * as type from '../Type/type';

const initialState = {
    idEdit: undefined,
    todoItem: "",
    todoList: [
        { id: 0, todo: "đi chợ" },
        { id: 1, todo: "nấu cơm" },
    ]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case type.GET_ALL_TODO:
            return {...state}
        case type.CREATE_TODO:
            return {...state, todoList : [...state.todoList, action.payload]}
        case type.DELETE_TODO:
            return {...state, todoList: state.todoList.filter(item => item.id !== action.payload)}
        case type.SET_TODO:
            return {...state, todoItem: action.payload}
        case type.GET_ONE_TODO:
            return {...state, todoItem: state.todoList.find(item => item.id === action.payload).todo, idEdit: action.payload}
        case type.EDIT_TODO: 
            return {...state, idEdit:undefined, todoItem:"", todoList: state.todoList.map(item => {
                if(item.id === action.payload) return {...item, todo: state.todoItem}
                else return {...item}
            })}
        default:
            return state
    }
}
