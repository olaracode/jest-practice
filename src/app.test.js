const { getRandomElement } = require("./app");
const randomArray = [
  "Pedro",
  "juan",
  "diego",
  "Pedroa",
  "juana",
  "diegow",
  "Pedroe",
  "juana",
  "diegox",
  "Pedroc",
  "juanx",
  "diegoa",
  "Pedroaa",
  "juanqwe",
  "diegoqwe1",
];

test("Debe retornar un elemento aleatorio del arreglo", () => {
  const randomElement1 = getRandomElement(randomArray);
  const randomElement2 = getRandomElement(randomArray);
  const randomElement3 = getRandomElement(randomArray);
  expect(randomElement1).not.toBe(randomElement2);
  expect(randomElement1).not.toBe(randomElement3);
});
