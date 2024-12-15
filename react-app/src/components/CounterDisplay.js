import React, { useContext } from 'react';
import { AppContext } from '../App'; // Import kontekstu

const CounterDisplay = () => {
    const { count } = useContext(AppContext); // Pobieranie wartości z kontekstu
    return <h3>Globalny licznik: {count}</h3>;
};

export default CounterDisplay;
