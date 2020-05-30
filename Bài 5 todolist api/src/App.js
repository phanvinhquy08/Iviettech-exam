import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col, Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import Todolist from './Components/Todolist';
import FormCreate from './Components/FormCreate';
import FormSearch from './Components/FormSearch';

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [todo, setTodo] = useState("");
  const [idItem, setIdItem] = useState(null);
  const [todoSearch, setTodoSearch] = useState("");
  const [loader, setLoader] = useState(false);
  const [isAdd, setIsAdd] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  useEffect(() => {
    setLoader(true);
    axios.get("https://5e633910f48bc60014536a40.mockapi.io/api/todoLists")
      .then(todoLists => {
        setTodoList(todoLists.data);
        setLoader(false)
      })
  }, [])
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
              setIsAdd={setIsAdd}
              loader={loader}
              setLoader={setLoader}
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
          loader={loader}
          setLoader={setLoader}
          isAdd={isAdd}
          isDelete={isDelete}
          setIsDelete={setIsDelete}
        />
      </Container>
    </div>
  );
}

export default App;
