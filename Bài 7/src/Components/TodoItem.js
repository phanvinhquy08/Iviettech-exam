import React, { Component } from 'react';
import { Button } from 'reactstrap';

import * as todoListAction from '../Action/todoListAction';
import { connect } from 'react-redux';

class TodoItem extends Component {
    handleDelete = (id) => {
        const { deleteTodo } = this.props;
        deleteTodo(id)
    }
    getOneTodo = id => {
        const { getOneTodo, todoItem, setTodo } = this.props;
        if(todoItem) {
            setTodo("")
        }
        else {
            getOneTodo(id)
        }
    }
    render() {
        const { todo } = this.props;
        return (
            <>
                <tr>
                    <td>{todo.id}</td>
                    <td>{todo.todo}</td>
                    <td>
                        <Button color="primary" onClick={() => this.getOneTodo(todo.id)}>Edit</Button>
                        <Button color="danger" onClick={() => this.handleDelete(todo.id)}>Delete</Button>
                    </td>
                </tr>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    todoItem: state.todo.todoItem
})


const mapDispatchToProps = dispatch => ({
    deleteTodo: id => {
        dispatch(todoListAction.deleteTodo(id))
    },
    getOneTodo : id => {
        dispatch(todoListAction.getOneTodo(id))
    },
    setTodo : (todo) => {
        dispatch(todoListAction.setTodo(todo))
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(TodoItem) 
