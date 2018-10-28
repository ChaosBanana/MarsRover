const DIRECTIONS = ['N', 'E', 'S', 'W'];

class Rover {
  constructor({ x, y, direction }, plateau) {
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.plateau = plateau;
  }

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

const newDirection = (curr, instr) => {
  let index = DIRECTIONS.indexOf(curr);
  index += (instr === 'L') ? -1 : 1;
  index += DIRECTIONS.length;
  return DIRECTIONS[index % DIRECTIONS.length];
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