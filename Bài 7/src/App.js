import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';
import { Row, Col, Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import Todolist from './Components/Todolist';
import FormCreate from './Components/FormCreate';
import FormSearch from './Components/FormSearch';


class App extends Component {

  render() {
    return (
      <div className="App">

        <Container>
          <Row>
            <Col sm={6}>
              <FormCreate />
            </Col>
            {/* <Col sm={6}>
              <FormSearch
              />
            </Col> */}
          </Row>
          <Todolist />
        </Container>
      </div>
    );

  }
}

export default App;
