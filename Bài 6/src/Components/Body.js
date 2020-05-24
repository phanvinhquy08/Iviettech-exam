import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Dishes from './Dishes';
import Add from './Add';
import Search from './Search'

export default class Body extends Component {
    render() {
        return (
            <div className="body">
                <Switch>
                    <Route exact path="/" component={() => <Dishes search={false}/>}/>
                    <Route path="/add" component={Add}/>
                    <Route path="/search" component={() => <Search/>}/>
                </Switch>
            </div>
        )
    }
}
