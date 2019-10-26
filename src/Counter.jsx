import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    return (<>
        <div style={{ width: '30vw', height: '30vh', backgroundColor: 'white', }}>
            <h2 style={{ color: 'black' }}>Counter</h2>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <button
                    onClick={() => { setCount(count - 1) }}
                    disabled={count < 1}
                >
                    Decrement
                </button>
                <h4 style={{ color: 'black', margin: 'auto 2vw' }}>{count}</h4>
                <button
                    onClick={() => { setCount(count + 1) }}
                >
                    Increment
                </button>
            </div>
        </div>
    </>);
}

export default Counter;