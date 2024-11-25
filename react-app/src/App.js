import React, { useState, useReducer, useEffect, useContext, useRef, createContext } from 'react';

// Kontekst dla useContext
const AppContext = createContext();

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

const App = () => {
    // Hooki dla poprzedniego zadania
    const [name, setName] = useState('');
    const [showCounter, setShowCounter] = useState(true);
    const [count, dispatch] = useReducer(counterReducer, 0);
    const inputRef = useRef(null);
    const renderCount = useRef(0);

    // Hooki dla nowych funkcji
    const [message, setMessage] = useState('');
    const [style, setStyle] = useState({ color: 'black', fontSize: '16px' });
    const [image, setImage] = useState(null);

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

    // Funkcje dla nowych interakcji
    const handleClick = () => {
        setMessage('Przycisk został kliknięty!');
    };

    const handleMouseOver = () => {
        setMessage('Kursor najechał na element!');
    };

    const showImage = () => {
        setImage('/logo192.png'); // Przykładowy obrazek
    };

    const loadDataFromJson = () => {
        const jsonData = { name: 'React', version: '18.0.0' };
        setMessage(`Załadowano dane: ${jsonData.name}, wersja ${jsonData.version}`);
    };

    const uploadFile = (event) => {
        const file = event.target.files[0];
        setMessage(`Załadowano plik: ${file.name}`);
    };

    const changeStyle = () => {
        setStyle((prevStyle) => ({
            ...prevStyle,
            color: prevStyle.color === 'black' ? 'blue' : 'black',
        }));
    };

    // Funkcja ustawiająca fokus na polu tekstowym
    const focusInput = () => {
        inputRef.current.focus();
    };

    return (
        <AppContext.Provider value={contextValue}>
            <div style={{ padding: '16px', fontFamily: 'Arial, sans-serif' }}>
                <h1>React Hooks: Połączone Zadania</h1>

                {/* Zadanie 1: Prawidłowy i nieprawidłowy komponent */}
                <section>
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
                </section>

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
                </section>

                <section style={{ marginTop: '16px' }}>
                    <h2>useEffect</h2>
                    <button onClick={() => setShowCounter(!showCounter)}>
                        {showCounter ? 'Ukryj licznik' : 'Pokaż licznik'}
                    </button>
                    {showCounter && <CounterDisplay />}
                </section>

                {/* Zadanie 2: Funkcje dla interakcji */}
                <section style={{ marginTop: '16px' }}>
                    <h2>Interakcje użytkownika</h2>
                    <p style={style}>{message}</p>
                    <button onClick={handleClick}>Kliknij mnie</button>
                    <div
                        onMouseOver={handleMouseOver}
                        style={{ margin: '10px 0', padding: '10px', border: '1px solid black' }}
                    >
                        Najeżdżaj na mnie
                    </div>

                    <button onClick={showImage}>Pokaż obrazek</button>
                    {image && <img src={image} alt="Załadowany obrazek" style={{ display: 'block', margin: '10px 0' }} />}

                    <button onClick={loadDataFromJson}>Załaduj dane JSON</button>

                    <input type="file" onChange={uploadFile} style={{ display: 'block', margin: '10px 0' }} />

                    <button onClick={changeStyle}>Zmień styl</button>
                </section>
            </div>
        </AppContext.Provider>
    );
};

// Komponent wyświetlający licznik z kontekstu
const CounterDisplay = () => {
    const { count } = useContext(AppContext);
    return <h3>Globalny licznik: {count}</h3>;
};

export default App;
