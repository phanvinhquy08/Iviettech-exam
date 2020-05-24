import React, { Component } from 'react';
import axios from 'axios';
const qs = require('querystring')

export default class Add extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            price: ""
        }
    }
    handleAdd = () => {
        const { name, price } = this.state;
        const { history } = this.props;
        axios.post("https://5e633910f48bc60014536a40.mockapi.io/api/dishes", qs.stringify({ name, price }), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
            .then(() => {
                history.push("/")
            })
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className="add">
                <div className="add-header">
                    <h1>Add new dish</h1>
                </div>
                <div className="add-body">
                    <form action="">
                        <div className="group-field">
                            <input type="text" name="name" id="name" className="input-field" required onChange={this.handleChange} />
                            <label htmlFor="name" className="label-field">Name</label>
                        </div>
                        <div className="group-field">
                            <input type="text" name="price" id="price" className="input-field" required onChange={this.handleChange} />
                            <label htmlFor="price" className="label-field">Price</label>
                        </div>
                        <button type="button" onClick={this.handleAdd}>Add</button>
                    </form>
                </div>
            </div>
        )
    }
}
