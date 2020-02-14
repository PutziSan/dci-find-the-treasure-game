// state of the program (state of the game)
let size = 4;
let position_x = 0;
let position_y = 0;
let target_x = 2;
let target_y = 2;

function render() {
  let first_line = "";
  for (let i = 0; i < size + 2; i++) {
    first_line += "+";
  }
  console.log(first_line);
  // render the area with left and right bounds:
  // first loop: loop for every row (y)
  for (let y = 0; y < size; y++) {
    let line = "";
    line += "|";
    // second loop: loop for every column (x)
    for (let x = 0; x < size; x++) {
      // print the actual area:
      // area logic:
      // if the position matches our character, print the x,
      // if the position matches our target, print the o
      // and if nothing of the two matches, print the empty space
      if (x === position_x && y === position_y) {
        line += "x";
      } else if (x === target_x && y === target_y) {
        line += "o";
      } else {
        line += " ";
      }
    }
    line += "|";
    console.log(line);
  }
  let last_line = "";
  for (let i = 0; i < size + 2; i++) {
    last_line += "+";
  }
  console.log(last_line);
}

render();
