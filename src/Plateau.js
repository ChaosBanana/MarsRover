class Plateau {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  report() {
    console.log("w" + this.width + " h" + this.height)
  }
}

module.exports = Plateau;