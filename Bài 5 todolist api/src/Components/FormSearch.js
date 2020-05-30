import React from 'react'
import { FormGroup, Input, Button, Row, Col } from 'reactstrap';
import axios from 'axios';

const FormSearch = props => {
    const { todoList, setTodoList, todoSearch, setTodoSearch } = props;
    const onChangeSearch = (e) => {
        setTodoSearch(e.target.value)
    }
    const onHandleSeacrh = () => {
        const valueSearch = todoSearch.toLowerCase();
        const arrSearch = todoList.filter(x => x.todo.toLowerCase().indexOf(valueSearch) !== -1);
        setTodoList(arrSearch);
        setTodoSearch("")
    }
    
    return (
        <FormGroup>
            <Row>
                <Col sm={6}>
                    <Input
                        type="text"
                        onChange={onChangeSearch}
                        value={todoSearch}
                    />
                </Col>
                <Col sm={1}>
                    <Button
                        onClick={onHandleSeacrh}
                    >
                        Search
                    </Button>
                </Col>
            </Row>
        </FormGroup>
    )
}

export default FormSearch
