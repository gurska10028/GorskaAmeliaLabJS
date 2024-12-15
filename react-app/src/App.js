import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lab7 from './components/Lab7';
import Lab8 from './components/Lab8';
import Lab9 from './components/Lab9';
import About from './pages/About';
import Interests from './pages/Interests';
import Favorite from './pages/Favorite';
import Contact from './pages/Contact';
import NotFound from './components/NotFound';
import './App.css';

export const AppContext = createContext();

const App = () => {
    const [count, setCount] = useState(0); // Dodaj stan, który będzie przekazywany przez kontekst

    return (
        <AppContext.Provider value={{ count, setCount }}>
            <Router>
                <div>
                    <nav>
                        <a href="/">Lab 7</a> | <a href="/lab8">Lab 8</a> | <a href="/lab9">Lab 9</a>
                    </nav>
                    <Routes>
                        <Route path="/" element={<Lab7 />} />
                        <Route path="/lab8" element={<Lab8 />} />
                        <Route path="/lab9" element={<Lab9 />}>
                            <Route path="about" element={<About />} />
                            <Route path="interests" element={<Interests />} />
                            <Route path="favorite" element={<Favorite />} />
                            <Route path="contact" element={<Contact />} />
                        </Route>
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            </Router>
        </AppContext.Provider>
    );
};

export default App;
