function sum(a, b) {
  return a + b;
}

function divide(a, b) {
  return a / b;
}

function calculate(fn, prev) {
  return function (a) {
    console.log(fn(prev, a));
  };
}

const sumWith100 = calculate(sum, 100);
const divideBy100 = calculate(divide, 100);
sumWith100(20); //120
divideBy100(20); //5
