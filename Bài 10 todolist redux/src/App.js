import React, { Component } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './components/TodoList';
import Context from './components/Context';
import FormCreate from './components/FormCreate';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoList : [
        {id: 0, name: "Nấu cơm"},
        {id: 1, name: "Đi chợ"},
        {id: 2, name: "Ngủ"}
      ]
    }
  }
  deleteTodo = id => {
    const { todoList } = this.state;
    this.setState({
      todoList: todoList.filter(todo => todo.id !== id)
    })
  }
  addTodo = name => {
    const { todoList } = this.state;
    if(name) {
      this.setState({
        todoList: [...todoList, {id: todoList.length, name}]
      })
    }
    else alert("Pls input your todo")
  }
  render() {
    return (
      <div className="App">
        <Context.Provider 
          value={
            {
            todoList: this.state.todoList,
            deleteTodo: this.deleteTodo,
            addTodo: this.addTodo
            }
        }
        >
          <FormCreate/>
          <TodoList />
        </Context.Provider>
      </div>
      );
  }
}

export default App;
