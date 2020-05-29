import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Table } from 'reactstrap';
import TodoItem from './TodoItem';
import * as todoListAction from '../Action/todoListAction';
import ModalDelete from './ModalDelete';

class Todolist extends Component {
    componentDidMount() {
        const { getAllTodo } = this.props
        getAllTodo();
    }
    render() {
        const { todoList, loading, AddSuccess, DeleteSuccess, todoItem } = this.props;
        AddSuccess && toast.success("Add thành công");
        DeleteSuccess && toast.success("Xóa thành công");
        return (
            <>
                {<ToastContainer />}
                {todoItem && <ModalDelete todoItem={todoItem}/>}
                <Table dark>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Todo</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {loading && (<div className="loader"></div>)}
                    <tbody>
                        {todoList.map((item, index) => <TodoItem
                            key={index}
                            todo={item}
                        />)}
                    </tbody>
                </Table>
            </>
        );
    }
}
const mapStateToProps = (state) => ({
    todoList: state.todo.todoList,
    loading: state.todo.loading,
    AddSuccess: state.todo.AddSuccess,
    DeleteSuccess: state.todo.DeleteSuccess,
    todoItem: state.todo.todoItem
})

const mapDispatchToProps = (dispatch) => ({
    getAllTodo: () => {
        dispatch(todoListAction.getAllTodo())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Todolist) 
