class Rover {
  /**
   * Rover is used to expolore a plateau on Mars.
   * 
   * Rover has a position (xy coordinates) and direction it's heading.
   * It can be controlled to turn left, right or to move ahead.
   * 
   * @param {Object} position x and y coordinates and direction (N, E, S or W) 
   * @param {string} plateau Plateau this rover is placed on
   */
  constructor({ x, y, direction }, plateau) {
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.plateau = plateau;
  }

  /**
   * Give an instruction to turn left, right or to move ahead.
   * @param {*} instr L, R or M
   */
  move(instr) {
    if (['L', 'R'].includes(instr)) {
      this.direction = newDirection(this.direction, instr);
    } else if (instr === 'M') {
      const { x, y } = move(
        this.direction,
        { x: this.x, y: this.y },
        this.plateau
      );
      this.x = x;
      this.y = y;
    }
  }
}

/**
 * Available directions a Rover can face.
 */
Rover.DIRECTIONS = Object.freeze(['N', 'E', 'S', 'W']);

const newDirection = (curr, instr) => {
  let index = Rover.DIRECTIONS.indexOf(curr);
  index += (instr === 'L') ? -1 : 1;
  index += Rover.DIRECTIONS.length;
  return Rover.DIRECTIONS[index % Rover.DIRECTIONS.length];
}

const move = (direction, { x, y }, plateau) => {
  if (direction === 'N') y += 1;
  else if (direction === 'S') y -= 1;
  else if (direction === 'E') x += 1;
  else if (direction === 'W') x -= 1;
  if (x < 0 || x > plateau.width ||
    y < 0 || y > plateau.height) {
    throw new Error("Out of plateau");
  }
  return { x, y };
}

module.exports = Rover;