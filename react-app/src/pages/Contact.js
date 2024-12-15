import React, { useState } from 'react';

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Wiadomość wysłana: ${JSON.stringify(form)}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Kontakt</h2>
            <label>
                Imię:
                <input type="text" name="name" value={form.name} onChange={handleChange} />
            </label>
            <br />
            <label>
                Email:
                <input type="email" name="email" value={form.email} onChange={handleChange} />
            </label>
            <br />
            <label>
                Wiadomość:
                <textarea name="message" value={form.message} onChange={handleChange}></textarea>
            </label>
            <br />
            <button type="submit">Wyślij</button>
        </form>
    );
};

export default Contact;
