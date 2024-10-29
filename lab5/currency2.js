let Currency = function(rates) {
    this.exchangeRates = rates;
  };
  
  Currency.prototype.roundTwoDecimals = function(amount) {
    return Math.round(amount * 100) / 100;
  };
  
  Currency.prototype.usdToPLN = function(usd) {
    return this.roundTwoDecimals(usd * this.exchangeRates.usd);
  };
  
  Currency.prototype.eurToPLN = function(eur) {
    return this.roundTwoDecimals(eur * this.exchangeRates.eur);
  };
  
  Currency.prototype.gbpToPLN = function(gbp) {
    return this.roundTwoDecimals(gbp * this.exchangeRates.gbp);
  };
  
  Currency.prototype.jpyToPLN = function(jpy) {
    return this.roundTwoDecimals(jpy * this.exchangeRates.jpy);
  };
  
  Currency.prototype.cadToPLN = function(cad) {
    return this.roundTwoDecimals(cad * this.exchangeRates.cad);
  };
  
  module.exports = Currency;
  