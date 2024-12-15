import React, { useState } from 'react';

const CorrectComponent = () => {
    const [count, setCount] = useState(0); // Stan lokalny

    const increment = () => {
        setCount(count + 1); // Zmiana stanu za pomocą `setCount`
    };

    return (
        <div>
            <h2>Prawidłowy komponent</h2>
            <p>Licznik: {count}</p>
            <button onClick={increment}>Zwiększ</button>
        </div>
    );
};

export default CorrectComponent;
