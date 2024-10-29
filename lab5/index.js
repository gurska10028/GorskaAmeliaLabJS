const readline = require("readline");
const math1 = require("./myMathModule1");
const MyMathModule = require("./myMathModule2");
const math2 = new MyMathModule();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Podaj pierwszą liczbę: ", (num1) => {
  rl.question("Podaj drugą liczbę: ", (num2) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    console.log("\nWyniki myMathModule1:");
    console.log(`Dodawanie: ${a} + ${b} = ${math1.add(a, b)}`);
    console.log(`Odejmowanie: ${a} - ${b} = ${math1.subtract(a, b)}`);
    console.log(`Mnożenie: ${a} * ${b} = ${math1.multiply(a, b)}`);
    console.log(`Dzielenie: ${a} / ${b} = ${math1.divide(a, b)}`);
    console.log(`Potęgowanie: ${a} ^ ${b} = ${math1.power(a, b)}`);

    console.log("\nWyniki myMathModule2:");
    console.log(`Dodawanie: ${a} + ${b} = ${math2.add(a, b)}`);
    console.log(`Odejmowanie: ${a} - ${b} = ${math2.subtract(a, b)}`);
    console.log(`Mnożenie: ${a} * ${b} = ${math2.multiply(a, b)}`);
    console.log(`Dzielenie: ${a} / ${b} = ${math2.divide(a, b)}`);
    console.log(`Potęgowanie: ${a} ^ ${b} = ${math2.power(a, b)}`);

    rl.close();
  });
});

rl.on("close", function() {
  console.log("\nKoniec");
  process.exit(0);
});
