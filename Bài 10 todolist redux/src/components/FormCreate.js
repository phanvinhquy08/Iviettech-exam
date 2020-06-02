import React, { Component } from 'react'
import { Input, Button } from 'reactstrap';
import Context from './Context';

export default class FormCreate extends Component {
    constructor() {
        super();
        this.state = {
            value: ""
        }
    }
    onChange = e => {
        this.setState({
            value: e.target.value
        })
    }
    render() {
        return (    
            <Context.Consumer>
                {
                    context => {
                        return (
                            <div className="form-add" style={{display: "flex"}}>
                            <Input
                                name="add"
                                onChange={this.onChange}
                                value={this.state.value}
                            />
                            <Button
                                onClick={() => {
                                    context.addTodo(this.state.value);
                                    this.setState({
                                        value: ""
                                    })
                                }}
                            >
                                Add
                            </Button>
                        </div>
                        )
                    }
                }
            </Context.Consumer>

        )
    }
}
