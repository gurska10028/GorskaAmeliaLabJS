import React, { useState, useReducer, useEffect, useContext, useRef, createContext } from 'react';

// Kontekst dla useContext
const Lab7Context = createContext();

// Reducer dla useReducer
const counterReducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return 0;
        default:
            throw new Error('Nieznana akcja');
    }
};

const Lab7 = () => {
    // Hooki dla zadania nr 2
    const [name, setName] = useState('');
    const [count, dispatch] = useReducer(counterReducer, 0);
    const inputRef = useRef(null);
    const renderCount = useRef(0);
    const [showCounter, setShowCounter] = useState(true);

    // useContext - wartość globalna
    const contextValue = { count, dispatch };

    // useEffect: Śledzenie zmian w polu tekstowym
    useEffect(() => {
        renderCount.current += 1;
        console.log(`Name updated: ${name}`);
    }, [name]);

    // useEffect: Komponent montowany/odmontowany
    useEffect(() => {
        console.log('Komponent został zamontowany');
        return () => console.log('Komponent został odmontowany');
    }, []);

    return (
        <Lab7Context.Provider value={contextValue}>
            <div style={{ padding: '16px', fontFamily: 'Arial, sans-serif' }}>
                <h1>Lab 7</h1>

                {/* Zadanie 1: Własny komponent funkcyjny z props */}
                <ReusableComponent name={name} />
                <input
                    ref={inputRef}
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Wpisz swoje imię"
                />

                {/* Zadanie 2: Hooki */}
                <section style={{ marginTop: '16px' }}>
                    <h2>useReducer</h2>
                    <h3>Licznik: {count}</h3>
                    <button onClick={() => dispatch({ type: 'increment' })}>Zwiększ</button>
                    <button onClick={() => dispatch({ type: 'decrement' })}>Zmniejsz</button>
                    <button onClick={() => dispatch({ type: 'reset' })}>Resetuj</button>
                </section>

                <section style={{ marginTop: '16px' }}>
                    <h2>useContext</h2>
                    <CounterDisplay />
                </section>

                <section style={{ marginTop: '16px' }}>
                    <h2>useRef</h2>
                    <p>Liczba renderów: {renderCount.current}</p>
                    <button onClick={() => inputRef.current.focus()}>Ustaw fokus</button>
                </section>

                <section style={{ marginTop: '16px' }}>
                    <h2>useEffect</h2>
                    <button onClick={() => setShowCounter(!showCounter)}>
                        {showCounter ? 'Ukryj licznik' : 'Pokaż licznik'}
                    </button>
                    {showCounter && <CounterDisplay />}
                </section>
            </div>
        </Lab7Context.Provider>
    );
};

// Własny komponent funkcyjny z props
const ReusableComponent = ({ name }) => {
    return (
        <div style={{ marginBottom: '16px' }}>
            <h2>Witaj, {name || 'nieznajomy'}!</h2>
        </div>
    );
};

// Komponent wyświetlający licznik z kontekstu
const CounterDisplay = () => {
    const { count } = useContext(Lab7Context);
    return <h3>Globalny licznik: {count}</h3>;
};

export default Lab7;
