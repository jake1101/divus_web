import React, { useState, useReducer } from 'react';

import Menu from '../../public/Menu';
import Footer from '../../public/Footer';

function reducer(state, action) {
    switch(action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        default:
            return state;
    }
}

export default function Products() {
    const [number, setNumber] = useState(0);
    const stateIncrease = () => {
        setNumber(prevNumber => prevNumber + 1);
    };
    const stateDecrease = () => {
        setNumber(prevNumber => prevNumber - 1);
    };

    const [num, dispatch] = useReducer(reducer, 0);
    const reducerIncrease = () => {
        dispatch({ type: "INCREMENT" });
    };
    const reducerDecrease = () => {
        dispatch({ type: "DECREMENT"});
    };

    return (
        <div id="content">
            <Menu opa={1}/>
            <div>
                <h1>useState{number}</h1>
                <button onClick={stateIncrease}>+1</button>
                <button onClick={stateDecrease}>+1</button>
            </div>
            <div>
                <h1>useReducer{num}</h1>
                <button onClick={reducerIncrease}>+1</button>
                <button onClick={reducerDecrease}>+1</button>
            </div>
            <Footer />
        </div>
    )
}
