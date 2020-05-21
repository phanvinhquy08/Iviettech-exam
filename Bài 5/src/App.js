import React, { useState } from 'react';
import { Row, Col, Container } from 'reactstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Todolist from './Components/Todolist';
import FormCreate from './Components/FormCreate';
import FormSearch from './Components/FormSearch';

const App = () => {
  const [todoList, setTodoList] = useState([
    { id: 0, todo: "Nấu cơm" },
    { id: 1, todo: "Ăn cơm" },
    { id: 2, todo: "Học React" },
  ])
  const [isEdit, setIsEdit] = useState(false);
  const [todo, setTodo] = useState("");
  const [idItem, setIdItem] = useState(null);
  const [todoSearch, setTodoSearch] = useState("")
  return (
    <div className="App">
      <Container>
        <Row>
          <Col sm={6}>
            <FormCreate
              setTodoList={setTodoList}
              todoList={todoList}
              isEdit={isEdit}
              setIsEdit={setIsEdit}
              todo={todo}
              setTodo={setTodo}
              idItem={idItem}
              setIdItem={setIdItem}
            />
          </Col>
          <Col sm={6}>
            <FormSearch
              setTodoList={setTodoList}
              todoList={todoList}
              setTodoSearch={setTodoSearch}
              todoSearch={todoSearch}
            />
          </Col>
        </Row>
        <Todolist
          todoList={todoList}
          setTodoList={setTodoList}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          todo={todo}
          setTodo={setTodo}
          idItem={idItem}
          setIdItem={setIdItem}
        />
      </Container>
    </div>
  );
}

export default App;
