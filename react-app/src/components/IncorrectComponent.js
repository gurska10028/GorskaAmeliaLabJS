import React from 'react';

const IncorrectComponent = () => {
    let count = 0; // Zwykła zmienna, brak stanu

    const increment = () => {
        count += 1; // Zmiana zmiennej bez użycia stanu
        console.log(`Aktualna wartość licznika: ${count}`);
    };

    return (
        <div>
            <h2>Nieprawidłowy komponent</h2>
            <p>Licznik: {count} (nie odświeży się)</p>
            <button onClick={increment}>Zwiększ</button>
        </div>
    );
};

export default IncorrectComponent;
