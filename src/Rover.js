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
      if (this.direction === 'N') this.y += 1;
      else if (this.direction === 'S') this.y -= 1;
      else if (this.direction === 'E') this.x += 1;
      else if (this.direction === 'W') this.x -= 1;
    }
  }
}

const newDirection = (curr, instr) => {
  let index = DIRECTIONS.indexOf(curr);
  index += (instr === 'L') ? -1 : 1;
  index += DIRECTIONS.length;
  return DIRECTIONS[index%DIRECTIONS.length];
}

module.exports = Rover;