import React, { useState } from 'react';
import { FormGroup, Input, Button, Row, Col } from 'reactstrap'

const FormCreate = props => {
    const { setTodoList, todoList, isEdit, setIsEdit, todo, setTodo, idItem, setIdItem } = props;
    const addNewTodo = id => {
        if(id || id == 0) {
            const newTodoList = todoList.map(item => {
                if(item.id === id) return {...item, todo: todo}
                else return {...item}
            })
            setTodoList(newTodoList)
            setTodo("")
            setIdItem(null)
            setIsEdit(false)
        }
        else {
            if(!todo) {
                alert("Please input todo");
                return;
            } 
            const idMax = Math.max(...todoList.map(todo => todo.id));
            setTodoList([...todoList, {id: idMax + 1, todo }])
            setTodo("")
            setIdItem(null)
            setIsEdit(false)
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
