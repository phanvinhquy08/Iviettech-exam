import * as type from '../Type/type';

const initialState = {
    idEdit: undefined,
    todoItem: "",
    todoList: [],
    loading: false,
    AddSuccess: false,
    DeleteSuccess: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case type.START_SPIN:
            return { ...state, loading: true }
        case type.GET_DATA_SUCCESS:
            return { ...state, loading: false, todoList: action.todos }
        case type.GET_DATA_FAIL:
            return { ...state, loading: false }
        case type.CREATE_TODO:
            return { ...state, todoList: [...state.todoList, action.payload], loading: action.loading , AddSuccess: true}
        case type.DELETE_TODO:
            return { ...state, todoList: state.todoList.filter(item => item.id !== action.payload), loading: false, DeleteSuccess: true }
        case type.SET_TODO:
            return { ...state, todoItem: action.payload }
        case type.GET_ONE_TODO:
            return { ...state, todoItem: state.todoList.find(item => item.id === action.payload).todo, idEdit: action.payload }
        case type.EDIT_TODO:
            return {
                ...state, idEdit: undefined, todoItem: "", todoList: state.todoList.map(item => {
                    if (item.id === action.payload) return { ...item, todo: state.todoItem }
                    else return { ...item }
                })
            }
        case type.SHOW_MODAL: 
            return {...state, todoItem}
        default:
            return state
    }
}
