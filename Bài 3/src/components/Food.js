import React, { Component } from 'react';
import { Button } from 'reactstrap';

export default class Food extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }
    
    render() {
        const { id, name, price, setDescreaseCount, setIncreaseCount, reset, count } = this.props;
        
        return (
            <div className="food">
                <div className="content">
                    <h6 className="name">{name}</h6>
                    <div className="price">{price + "$"}</div>
                </div>
                <div className="btn-group">
                    <Button 
                        className="left"
                        onClick={() => {
                            setIncreaseCount(id);
                        }}
                    >
                        +
                    </Button>
                    <p>{reset ? 0 : count}</p>
                    <Button
                        className="right"
                        onClick={() => {
                            setDescreaseCount(id);
                        }}
                    >
                        -
                    </Button>
                </div>
            </div>
        )
    }
}
