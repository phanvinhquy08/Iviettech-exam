import React from 'react';
import axios from 'axios';
import { Table, ToastBody, Toast } from 'reactstrap';

import TodoItem from './TodoItem';

const Todolist = props => {
    const { todoList, setTodoList, isEdit, setIsEdit, todo, setTodo, idItem, setIdItem, loader, isAdd, isDelete, setIsDelete } = props;
    const editTodo = (id) => {
        if (!isEdit) {
            setIsEdit(!isEdit)
            setTodo(todoList.find(item => item.id === id).todo)
            setIdItem(id)
        }
        else {
            setIsEdit(!isEdit)
            setTodo("");
            setIdItem(null)
        }
    }
    const deleteTodo = (id) => {
        setTodoList(todoList.filter(x => x.id !== id))
        axios.delete("https://5e633910f48bc60014536a40.mockapi.io/api/todoLists/" + id)
            .then(res => {
                setIsDelete(true);
                setTimeout(() => {
                    setIsDelete(false)
                }, 2000);
            })
    }

    return (
        <>
            {isAdd && <Toast><ToastBody color="primary">Thêm mới thành công</ToastBody></Toast>}
            {isDelete && <ToastBody color="danger">Xóa thành công</ToastBody>}
            <Table dark>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Todo</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {loader && <div className="loader"></div>}
                <tbody>
                    {todoList.map((item, index) => <TodoItem
                        key={index}
                        todo={item}
                        editTodo={editTodo}
                        deleteTodo={deleteTodo}
                    />)}
                </tbody>
            </Table>
        </>
    );
}

export default Todolist
