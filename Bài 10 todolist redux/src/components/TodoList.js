import React, { Component } from 'react'
import { Table } from 'reactstrap';
import TodoItem from './TodoItem';
import Context from './Context';

export default class TodoList extends Component {
    render() {
        const { todoList } = this.context;
        return (
            <div className="todoList">
                <Table>
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
            </div>
        )
    }
}
TodoList.contextType = Context;