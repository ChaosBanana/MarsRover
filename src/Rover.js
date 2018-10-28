class Rover {
  constructor({x, y, direction}, plateau) {
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.plateau = plateau;
  }
}

module.exports = Rover;