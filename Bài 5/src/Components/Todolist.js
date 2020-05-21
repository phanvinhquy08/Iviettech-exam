import React from 'react';
import { Table } from 'reactstrap';

import TodoItem from './TodoItem';

const Todolist = props => {
    const { todoList, setTodoList, isEdit, setIsEdit, todo, setTodo, idItem, setIdItem } = props;
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
    }

    return (
        <Table dark>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Todo</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {todoList.map((item, index) => <TodoItem
                    key={index}
                    todo={item}
                    editTodo={editTodo}
                    deleteTodo={deleteTodo}
                />)}
            </tbody>
        </Table>
    );
}

export default Todolist
