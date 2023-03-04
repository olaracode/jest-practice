// const calculator = require("./sum");
// Deestructuracion
const testData = require("./data");
const { sum, substract, multiply } = require("./operations");

test("La suma de 2 mas 2 es 4", () => {
  for (let caso of testData) {
    expect(sum(caso.a, caso.b)).toBe(caso.result);
  }
});

test("La resta de 5 menos 3 es 2", () => {
  expect(substract(5, 3)).toBe(2);
});

// La app no puede devolver numeros negativos
test("La resta de 3 menos 5 es 2", () => {
  expect(substract(3, 5)).not.toBe(-2);
});

test("La multiplicacion de 2 * 2 es 4", () => {
  expect(multiply(2, 2)).toBe(4);
});

// test("");
