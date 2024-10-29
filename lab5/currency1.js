//z dnia 29/10/2024
const exchangeRates = {
    usd: 4.02,
    eur: 4.35,
    gbp: 5.21,
    jpy: 0.026,
    cad: 2.89
  };
  
  function roundTwoDecimals(amount) {
    return Math.round(amount * 100) / 100;
  }
  
  exports.usdToPLN = function(usd) {
    return roundTwoDecimals(usd * exchangeRates.usd);
  };
  
  exports.eurToPLN = function(eur) {
    return roundTwoDecimals(eur * exchangeRates.eur);
  };
  
  exports.gbpToPLN = function(gbp) {
    return roundTwoDecimals(gbp * exchangeRates.gbp);
  };
  
  exports.jpyToPLN = function(jpy) {
    return roundTwoDecimals(jpy * exchangeRates.jpy);
  };
  
  exports.cadToPLN = function(cad) {
    return roundTwoDecimals(cad * exchangeRates.cad);
  };
  