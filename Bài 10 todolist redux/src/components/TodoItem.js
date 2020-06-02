import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Context from './Context';

export default class TodoItem extends Component {
    render() {
        const { todo } = this.props;
        return (

            <Context.Consumer>
                {
                    context => {
                        return (
                            <>
                                <tr>
                                    <td>{todo.id}</td>
                                    <td>{todo.name}</td>
                                    <td>
                                        <Button color="primary">Edit</Button>
                                        <Button color="danger" onClick={() => context.deleteTodo(todo.id)} >Delete</Button>
                                    </td>
                                </tr>
                            </>
                        )
                    }
                }
            </Context.Consumer>


        )
    }
}
