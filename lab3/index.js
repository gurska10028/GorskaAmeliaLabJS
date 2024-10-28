/*
//zadanie 1
const wait = 3000;
console.log("Początek skryptu...");

setTimeout(function() {
  console.log("Upłynęły minimum 3 sek...");
}, wait);

console.log("Koniec skryptu...");
console.log("Czekam na upływ czasu...");


//zadanie 2
const fs = require("fs");
const data = fs.readFileSync('package.json');
console.log("Początek skryptu.");
console.log(data.toString());
console.log("Koniec skryptu.");

//zadanie 3.1
//utworzenia serwera www
const http = require('http');
const hostname = '127.0.0.1';
const port = 8888;
const server = http.createServer(function(request, response) {
 response.statusCode = 200;
 response.setHeader('Content-Type', 'text/plain');
 response.end('Hello, Node.js is awesome!\n');


});
server.listen(port, hostname, () => {
 console.log(`Server running at http://${hostname}:${port}/`);
});


//zadanie 3.2
const http = require('http');
const path = require("path");
const util = require("util");
const v8 = require("v8");
const hostname = '127.0.0.1';
const port = 8888;
const server = http.createServer((request, response) => {
 response.statusCode = 200;
 response.setHeader('Content-Type', 'text/plain');
 response.end('Hello, from node.js serwer !\n');

});
server.listen(port, hostname, () => {
 util.log(v8.getHeapStatistics());
 console.log(path.basename(__filename));
 util.log(path.join(__dirname, 'uploads','images'));
 console.log(`Server running at http://${hostname}:${port}/`);
});
*/


const String = require('string');
const myString = "  Hello, World!  ";

// Usuwam białe znaki na początku i końcu
const cleanedString = String(myString).trim();

// Zmieniam wszystkie litery na wielkie
const upperCaseString = String(myString).toUpperCase();

// Wypisuję oryginalny string i przetworzone wersje
console.log("Oryginalny string: ", myString);
console.log("String po usunięciu białych znaków: ", cleanedString);
console.log("String w wielkich literach: ", upperCaseString);

// Opis 
console.log(`Moduł 'string' pomaga w pracy z tekstem. 
Zawiera przydatne funkcje, takie jak:
- Usuwanie białych znaków
- Zmiana liter na wielkie
Można go używać do różnych operacji na stringach w JavaScript.`);
