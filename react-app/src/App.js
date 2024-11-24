import React, { useState, useReducer, useEffect, useRef, createContext } from 'react';
import CounterDisplay from './CounterDisplay'; // Import komponentu wielokrotnego użytku

// Kontekst
export const AppContext = createContext();

// Reducer
const counterReducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return 0;
        default:
            return state;
    }
};

const App = () => {
    const [name, setName] = useState('');
    const [showCounter, setShowCounter] = useState(true);
    const [count, dispatch] = useReducer(counterReducer, 0);
    const inputRef = useRef(null);
    const renderCount = useRef(0);

    useEffect(() => {
        renderCount.current += 1;
        console.log(`Name updated: ${name}`);
    }, [name]);

    useEffect(() => {
        console.log('Komponent zamontowany');
        return () => console.log('Komponent odmontowany');
    }, []);

    const focusInput = () => {
        inputRef.current.focus();
    };

    return (
        <AppContext.Provider value={{ count, dispatch }}>
            <div style={{ padding: '16px' }}>
                <h1>Demonstracja hooków React</h1>

                {/* useState */}
                <div>
                    <h2>useState</h2>
                    <input
                        ref={inputRef}
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Wpisz swoje imię"
                    />
                    <button onClick={focusInput}>Ustaw focus</button>
                    <p>Twoje imię: {name}</p>
                </div>

                {/* useReducer */}
                <div style={{ marginTop: '16px' }}>
                    <h2>useReducer</h2>
                    <h3>Licznik: {count}</h3>
                    <button onClick={() => dispatch({ type: 'increment' })}>Zwiększ</button>
                    <button onClick={() => dispatch({ type: 'decrement' })}>Zmniejsz</button>
                    <button onClick={() => dispatch({ type: 'reset' })}>Zresetuj</button>
                </div>

                {/* useContext */}
                <div style={{ marginTop: '16px' }}>
                    <h2>useContext</h2>
                    <CounterDisplay />
                </div>

                {/* useRef */}
                <div style={{ marginTop: '16px' }}>
                    <h2>useRef</h2>
                    <p>Liczba renderów: {renderCount.current}</p>
                </div>

                {/* useEffect */}
                <div style={{ marginTop: '16px' }}>
                    <h2>useEffect</h2>
                    <button onClick={() => setShowCounter(!showCounter)}>
                        {showCounter ? 'Ukryj licznik' : 'Pokaż licznik'}
                    </button>
                    {showCounter && <CounterDisplay />}
                </div>
            </div>
        </AppContext.Provider>
    );
};

export default App;
