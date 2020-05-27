import React, { useState, Component } from 'react';
import { FormGroup, Input, Button, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';

import * as todoListAction from '../Action/todoListAction';

class FormCreate extends Component {
    handleChange = (e) => {
        const { setTodo } = this.props;
        setTodo(e.target.value)
    }

    handleAddNew = () => {
        const { createTodo, todoList, todoItem, setTodo, idEdit,editTodo } = this.props;
        if(idEdit || idEdit == 0) {
            editTodo(idEdit);
        }
        else {
            createTodo({
                id: todoList.length,
                todo: todoItem
            })
            setTodo("")
        }
    }
    render() {
        const { todoItem , idEdit} = this.props;
        return (
            <FormGroup>
                <Row>
                    <Col sm={6}>
                        <Input
                            type="text"
                            name="todo"
                            id="todo"
                            onChange={this.handleChange}
                            value={todoItem}
                        />
                    </Col>
                    <Col sm={1}>
                        <Button
                            onClick={this.handleAddNew}
                        >
                            {(idEdit || idEdit == 0) ? "Edit" : "Add"}
                        </Button>
                    </Col>
                </Row>
            </FormGroup>
        )
    }
}
const mapStateToProps = (state) => ({
    todoList: state.todo.todoList,
    todoItem: state.todo.todoItem,
    idEdit: state.todo.idEdit
})

const mapDispatchToProps = (dispatch) => ({
    createTodo: (todo) => {
        dispatch(todoListAction.createTodo(todo))
    },
    setTodo: (e) => {
        dispatch(todoListAction.setTodo(e))
    },
    editTodo: (id) => {
        dispatch(todoListAction.editTodo(id))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(FormCreate)
