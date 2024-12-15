import React, { useState, useEffect, useRef, useContext } from 'react';
import CorrectComponent from './CorrectComponent';
import IncorrectComponent from './IncorrectComponent';
import { AppContext } from '../App';

const Lab8 = () => {
    const [message, setMessage] = useState('');
    const [style, setStyle] = useState({ color: 'black', fontSize: '16px' });
    const [image, setImage] = useState(null);
    const inputRef = useRef(null);
    const { count } = useContext(AppContext);

    useEffect(() => {
        console.log('Lab8 komponent zamontowany.');
        return () => console.log('Lab8 komponent odmontowany.');
    }, []);

    const handleClick = () => {
        setMessage('Przycisk został kliknięty!');
    };

    const handleMouseOver = () => {
        setMessage('Kursor najechał na element!');
    };

    const showImage = () => {
        setImage('/GorskaAmeliaLabJS/kot.jpeg');
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

    return (
        <div>
            <h1>Lab 8 - React</h1>
    
            <section>
                <h2>Zadanie 1: Prawidłowy i Nieprawidłowy Komponent</h2>
                <CorrectComponent />
                <IncorrectComponent />
            </section>
    
            <section>
                <h2>Zadanie 2: Interakcje użytkownika</h2>
                <p>{message}</p>
    
                <div>
                    <button onClick={handleClick}>Kliknij mnie</button>
                    <button onClick={showImage}>Pokaż obrazek</button>
                    <button onClick={loadDataFromJson}>Załaduj dane JSON</button>
                    <button onClick={changeStyle}>Zmień styl</button>
                </div>
    
                <div onMouseOver={handleMouseOver} style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px', margin: '10px auto', display: 'inline-block' }}>
                    Najeżdżaj na mnie
                </div>
    
                <input type="file" onChange={uploadFile} />
                {image && <img src={image} alt="Załadowany obrazek" />}
            </section>
    
            <section>
                <h2>Zadanie 3: Globalny Licznik</h2>
                <p>Globalny licznik: {count}</p>
            </section>
        </div>
    );
    
};

export default Lab8;
