import React, { Component } from 'react'
import axios from 'axios';

import Card from './Card';

export default class Dishes extends Component {
    constructor() {
        super();
        this.state = {
            dishes: []
        }
    }
    componentDidMount() {
        axios.get("https://5e633910f48bc60014536a40.mockapi.io/api/dishes")
            .then(res => {
                this.setState({
                    dishes: res.data,
                })
            })
    }
    render() {
        const { dishes } = this.state;
        const { search, dishesSearch } = this.props;
        return (
            <div className="dishes">
                {
                    search ? dishesSearch.map((item, index) => (<Card dish={item} key={index} />))
                    :
                    dishes.map((item, index) => (<Card dish={item} key={index} />))
                }
            </div>
        )
    }
}
