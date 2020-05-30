import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from 'reactstrap';
import { v4 as uuidv4 } from 'uuid';

import ListFood from './components/ListFood';
import Order from './components/Order';
import img0 from "./img/beff.jpg";
import img1 from "./img/pho.jpg";
import img2 from "./img/salad.jpg";
import img3 from "./img/soup.jpg";
import img4 from "./img/sushi.jpg";
import img5 from "./img/udon.jpg";
import img6 from "./img/pizza.jpg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      foods: [
        { id: 0, name: "Cold cuts", price: 5, count: 0, img: img0 },
        { id: 1, name: "Pepperoni", price: 3.5, count: 0, img: img1 },
        { id: 2, name: "Feta", price: 2.5, count: 0, img: img2 },
        { id: 3, name: "Mozzarella", price: 1.5, count: 0, img: img3 },
        { id: 4, name: "Swiss cheese", price: 1.5, count: 0, img: img4 },
        { id: 5, name: "Spices", price: 0.5, count: 0, img: img5 },
        { id: 6, name: "Vegetable", price: 0.5, count: 0, img: img6 },
      ],
      reset: false,
      foodsOrder: []
    }
  }
  setIncreaseCount = (id) => {
    const { foods, foodsOrder } = this.state;
    const sttMax = foodsOrder.length;
    this.setState({
      foods: foods.map(item => {
        if (item.id === id) {
          return { ...item, count: item.count + 1 }
        }
        else return { ...item }
      }),
      reset: false,
      foodsOrder: [...foodsOrder, { ...foods.find(item => item.id === id), stt: sttMax + 1 }]
    }, this.setTotal)
  }

  setDescreaseCount = (idFood) => {
    const { foods, foodsOrder } = this.state;
    const foodAtid = foodsOrder.filter(item => item.id === idFood);
    console.log(foodAtid)
    const max = Math.max(...foodAtid.map(x => x.stt))
    this.setState({
      foods: foods.map(item => {
        if (item.id === idFood) {
          return { ...item, count: item.count <= 0 ? 0 : item.count - 1 }
        }
        else return { ...item }
      }),
      reset: false,
      foodsOrder: [...foodsOrder.slice(0, max - 1), ...foodsOrder.slice(max)]
    }, this.setTotal)
  }

  setTotal = () => {
    const { foods } = this.state;
    const total = foods.reduce((sum, item) => {
      return sum + item.price * item.count
    }, 0)
    this.setState({
      total: total
    })
  }

  resetCount = () => {
    const { foods } = this.state;
    this.setState({
      total: 0,
      foods: foods.map(item => ({ ...item, count: 0 })),
      reset: true,
      count: 0,
      foodsOrder: []
    })
  }

  render() {
    const { foods, total, count, reset } = this.state
    return (
      <div className="App">
        <Container>
          <Row>
            <Col md={9}>
              <Order
                foodsOrder={this.state.foodsOrder}
              />
            </Col>
            <Col md={3}>
              <ListFood
                foods={foods}
                total={total}
                reset={reset}
                count={count}
                setDescreaseCount={this.setDescreaseCount}
                setIncreaseCount={this.setIncreaseCount}
                resetCount={this.resetCount}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
