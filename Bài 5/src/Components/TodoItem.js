import React from 'react';
import { Button } from 'reactstrap';

const TodoItem = props => {
    const { editTodo, deleteTodo, todo } = props;

    return (
        <>
            <tr>
                <td>{todo.id}</td>
                <td>{todo.todo}</td>
                <td>
                    <Button color="primary" onClick={() => editTodo(todo.id)}>Edit</Button>
                    <Button color="danger" onClick={() => deleteTodo(todo.id)}>Delete</Button>
                </td>
            </tr>
        </>
    )
}

export default TodoItem
