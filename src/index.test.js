const handleInput = require('./index');


test('move two rovers', () => {
  expect(handleInput(`5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM`)).toBe(`1 3 N
5 1 E`);
});