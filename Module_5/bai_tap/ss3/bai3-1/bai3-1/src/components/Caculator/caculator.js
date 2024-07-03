import React, { useState } from 'react';

function Calculator() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState(null);

    return (
        <div>
            <h1>Calculator</h1>
            <input
                type="text"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
            />
            <input
                type="text"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
            />
            <button onClick={() => setResult(parseInt(num1) + parseInt(num2))}>+</button>
            <button onClick={() => setResult(parseInt(num1) - parseInt(num2))}>-</button>
            <button onClick={() => setResult(parseInt(num1) * parseInt(num2))}>*</button>
            <button onClick={() => setResult(parseInt(num1) / parseInt(num2))}>/</button>
            <h2>Result: {result}</h2>
        </div>
    );
}

export default Calculator;
