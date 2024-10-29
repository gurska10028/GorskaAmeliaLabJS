const currency1 = require('./currency1');
console.log('Przeliczenia walut na PLN za pomocą currency1 (export object):');
console.log('1o0 USD to PLN:', currency1.usdToPLN(100));
console.log('100 EUR to PLN:', currency1.eurToPLN(100));
console.log('100 GBP to PLN:', currency1.gbpToPLN(100));
console.log('100 JPY to PLN:', currency1.jpyToPLN(100));
console.log('100 CAD to PLN:', currency1.cadToPLN(100));

const Currency = require('./currency2');
const exchangeRates = { usd: 4.02, eur: 4.35, gbp: 5.21, jpy: 0.026, cad: 2.89 };
let currency2 = new Currency(exchangeRates);

console.log('\nPrzeliczenia walut na PLN za pomocą currency2 (object-oriented):');
console.log('100 USD to PLN:', currency2.usdToPLN(100));
console.log('100 EUR to PLN:', currency2.eurToPLN(100));
console.log('100 GBP to PLN:', currency2.gbpToPLN(100));
console.log('100 JPY to PLN:', currency2.jpyToPLN(100));
console.log('100 CAD to PLN:', currency2.cadToPLN(100));
