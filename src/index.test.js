const handleInput = require('./index');


test('adds 1 + 2 to equal 3', () => {
  expect(handleInput(`5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM`)).toBe(`1 3 N
5 1 E`);
});