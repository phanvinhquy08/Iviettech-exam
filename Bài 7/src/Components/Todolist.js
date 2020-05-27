import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Table } from 'reactstrap';
import TodoItem from './TodoItem';
import * as todoListAction from '../Action/todoListAction';

class Todolist extends Component {
    componentDidMount() {
        const { getAllTodo } = this.props
        getAllTodo();
    }
    render() {
        const { todoList } = this.props;
        return (
            <>

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
                        />)}
                    </tbody>
                </Table>
            </>
        );
    }
}
const mapStateToProps = (state) => ({
    todoList: state.todo.todoList
})

const mapDispatchToProps = (dispatch) => ({
    getAllTodo: () => {
        dispatch(todoListAction.getAllTodo())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Todolist) 
