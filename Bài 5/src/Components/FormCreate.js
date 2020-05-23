import React, { useState } from 'react';
import { FormGroup, Input, Button, Row, Col } from 'reactstrap';
import axios from 'axios';
import qs from 'querystring'

const FormCreate = props => {
    const { setTodoList, todoList, isEdit, setIsEdit, todo, setTodo, idItem, setIdItem, setIsAdd, loader, setLoader } = props;
    const addNewTodo = id => {
        setLoader(true)
        if (id || id == 0) {
            axios.put("https://5e633910f48bc60014536a40.mockapi.io/api/todoLists/" + id, { todo })
                .then(res => {
                    const newTodoList = todoList.map(item => {
                        if (item.id === id) return { ...item, todo: res.data.todo }
                        else return { ...item }
                    })
                    setTodoList(newTodoList)
                    setTodo("")
                    setIdItem(null)
                    setIsEdit(false)
                    setLoader(false)
                })
        }
        else {
            if (!todo) {
                alert("Please input todo");
                return;
            }
            axios.post("https://5e633910f48bc60014536a40.mockapi.io/api/todoLists", qs.stringify({ todo }), {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
                .then(todo => {
                    setTodoList([...todoList, todo.data])
                    setTodo("")
                    setIdItem(null)
                    setIsEdit(false)
                    setLoader(false)
                    setIsAdd(true)
                    setTimeout(() => {
                        setIsAdd(false)
                    }, 2000);
                })
        }
    }
    const onChangeInput = (e) => {
        setTodo(e.target.value)
    }
    return (
        <FormGroup>
            <Row>
                <Col sm={6}>
                    <Input
                        type="text"
                        name="todo"
                        id="todo"
                        placeholder="add todo"
                        onChange={onChangeInput}
                        value={todo}
                    />
                </Col>
                <Col sm={1}>
                    <Button
                        color="dark"
                        onClick={() => addNewTodo(idItem)}
                    >
                        {isEdit ? "Edit" : "Add"}
                    </Button>
                </Col>
            </Row>
        </FormGroup>
    )
}

export default FormCreate
