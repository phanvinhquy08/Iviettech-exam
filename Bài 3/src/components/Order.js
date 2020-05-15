import React, { Component } from 'react'
import { Row, Col } from 'reactstrap';

export default class Order extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        const { foodsOrder } = this.props;
        return (
            <div className="order">
                <h1>Your Pizza</h1>
                <Row>
                    {foodsOrder.map((item,index) =>
                    <Col key={index} sm={4}>
                        <img src={item.img} />
                    </Col>
                    )}
                </Row>
            </div>
        )
    }
}
