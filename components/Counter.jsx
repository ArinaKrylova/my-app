import React, {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0)

    function incerement() {
        setCount(count  + 1)
    }

    function decrement() {
        setCount(count  - 1)
    }


    return (
        <div>
            <h1>{count}</h1>
            <button onClick={incerement}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};

export default Counter;