function sum(a, b) {
  return a + b;
}

function substract(a, b) {
  const result = a - b;
  return result > 0 ? result : result * -1;
}

function multiply(a, b) {
  // Esta funcion deberia retornar la multiplicacion de dos numeros
  return a * b;
}

// A todo mi proyecto, le comparto la funcion sum();
module.exports = {
  sum: sum,
  substract: substract,
  multiply: multiply,
};
