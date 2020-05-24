import React, { Component } from 'react';

import Header from '../Components/Header';
import Body from '../Components/Body';
import "../Static/static.css"

export default class Main extends Component {
    render() {
        return (
            <div className="main">
                <Header/> 
                <Body/>
            </div>
        )
    }
}
