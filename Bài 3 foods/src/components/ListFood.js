import React, { Component } from 'react'
import { Button } from 'reactstrap';

import Food from './Food';
export default class ListFood extends Component {
    render() {
        const { foods, total, setIncreaseCount, setDescreaseCount, reset, resetCount } = this.props;
        return (
            <>
                <div className="header">
                    <h5>Your pizza</h5>
                    <p className="total">{total + " $"}</p>
                    <Button
                        className="reset"
                        onClick={resetCount}
                    >
                        Reset pizza
                    </Button>
                </div>
                <div className="list">
                    {foods.map((food, index) => <Food
                        key={index}
                        id={food.id}
                        name={food.name}
                        price={food.price}
                        count={food.count}
                        setIncreaseCount={setIncreaseCount}
                        setDescreaseCount={setDescreaseCount}
                        reset={reset}
                    />)}
                </div>
            </>
        )
    }
}
