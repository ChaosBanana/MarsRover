const Rover = require('./Rover');
const Plateau = require('./Plateau');

const defaultPlateau = new Plateau(5, 5);
const defaultRoverParams = [
  { x: 1, y: 1, direction: 'E' },
  defaultPlateau,
];

test('turn rover right', () => {
  const rover = new Rover(...defaultRoverParams);
  rover.move('R');
  expect(rover.direction).toBe('S');
});

test('move rover forward', () => {
  const rover = new Rover(...defaultRoverParams);
  rover.move('M');
  expect(rover.x).toBe(2);
});

test('move rover out of plateau', () => {
  const rover = new Rover(...defaultRoverParams);
  rover.move('M');
  rover.move('M');
  rover.move('M');
  rover.move('M');
  expect(() => rover.move('M')).toThrow();
});