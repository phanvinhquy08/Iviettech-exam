import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div className="navigation">
                <div className="logo">
                    <h1>LOGO</h1>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">All Dish</Link>
                        </li>
                        <li>
                            <Link to="/add">Add New</Link>
                        </li>
                        <li>
                            <Link to="/search">Search</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}
