import React, { Component } from 'react';
import axios from 'axios';

import Dishes from './Dishes';
export default class Search extends Component {
    constructor() {
        super();
        this.state = {
            dishesSearch: [],
            searchValue: ""
        }
    }
    handleChange = (e) => {
        this.setState({
            searchValue: e.target.value
        })

    }
    onKeyUp = (e) => {
        const { searchValue } = this.state;
        if (e.keyCode === 13) {
            axios.get("https://5e633910f48bc60014536a40.mockapi.io/api/dishes")
                .then(res => {
                    this.setState({
                        dishesSearch: searchValue == "" ? [] : res.data.filter(x => x.name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1),
                    })
                })
        }
    }

    render() {
        return (
            <div className="search">
                <div className="group-field">
                    <input type="text" name="search" id="search" className="input-field" required onChange={this.handleChange} onKeyUp={this.onKeyUp} />
                    <label htmlFor="search" className="label-field">Search</label>
                </div>
                <Dishes search={true} dishesSearch={this.state.dishesSearch} />
            </div>
        )
    }
}
