const Plateau = require('./Plateau');
const Rover = require('./Rover');

const handleInput = (input) => {
  console.log(input);

  const rows = input.split('\n');
  const plateau = createPlateau(rows[0]);
  const { rovers, roverMoves } = createRovers(rows.slice(1), plateau);

  for (let i = 0; i < rovers.length; i++) {
    const rover = rovers[i];
    const moves = roverMoves[i];
    for (let move of moves) {
      rover.move(move)
    }
  }

  const output = rovers.map(x => roverOutput(x)).join('\n');
  return output;
}

const createPlateau = (plateauInput) => {
  const plateauCmd = plateauInput.split(' ');
  const plateau = new Plateau(parseInt(plateauCmd[0]), parseInt(plateauCmd[1]));
  return plateau;
}

const createRovers = (roverInputs, plateau) => {
  const rovers = [];
  const roverMoves = [];
  for (let i = 0; i < roverInputs.length; i += 2) {
    const posCmd = roverInputs[i].split(' ');
    const moves = roverInputs[i + 1].split('');

    const x = parseInt(posCmd[0]);
    const y = parseInt(posCmd[1]);
    const direction = posCmd[2];

    const rover = new Rover({ x, y, direction }, plateau);
    rovers.push(rover);
    roverMoves.push(moves);
  }
  return { rovers: rovers, roverMoves: roverMoves };
}

const roverOutput = (rover) => {
  return [rover.x, rover.y, rover.direction].join(' ');
}

module.exports = handleInput;