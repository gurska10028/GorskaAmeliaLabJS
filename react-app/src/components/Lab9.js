import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Lab9 = () => {
    return (
        <div>
            <h1>Lab 9</h1>
            <nav className="lab9">
                <Link to="about">About</Link>
                <Link to="interests">Interests</Link>
                <Link to="favorite">Favorite</Link>
                <Link to="contact">Contact</Link>
            </nav>
            <Outlet />
        </div>
    );
};

export default Lab9;
