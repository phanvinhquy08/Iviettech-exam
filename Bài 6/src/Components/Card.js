import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        const { dish } = this.props;
        return (
            <div className="card">
                <div className="card-header">
                    <div className="card-number">
                        <h3>{+dish.id}</h3>
                    </div>
                    <div className="card-content">
                        <h3>{dish.name}</h3>
                        <p>{"Price: " + dish.price}</p>
                    </div>
                </div>
                <div className="card-image">
                    <img alt={dish.id} src={dish.src} />
                </div>
                <div className="card-footer">
                    <div className="btn">
                        <button>Order</button>
                    </div>
                    <i className="fas fa-heart"></i>
                    <i className="fas fa-ellipsis-v"></i>
                </div>
            </div>
        )
    }
}
