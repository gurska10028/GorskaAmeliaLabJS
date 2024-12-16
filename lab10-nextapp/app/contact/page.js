export default function Contakt() {
    return (
        <main>
            <h1>Kontakt</h1>
            <form action="/api/contact" method="post">
                <label>
                    Imię:
                    <input type="text" name="name" required />
                </label>
                <br />
                <label>
                    E-mail:
                    <input type="email" name="email" required />
                </label>
                <br />
                <label>
                    Wiadomość:
                    <textarea name="message" required></textarea>
                </label>
                <br />
                <button type="submit">Wyślij</button>
            </form>
        </main>
    );
}
