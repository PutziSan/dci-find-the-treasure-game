// state of the program (state of the game)
let size = 4;
let position_x = 3;
let position_y = 1;
let target_x = 2;
let target_y = 2;

function render() {
  let first_line = "";
  for (let i = 0; i < size + 2; i++) {
    first_line += "+";
  }
  console.log(first_line);
  // render the area with left and right bounds:
  for (let x = 0; x < size; x++) {
    let line = "";
    line += "|";
    for (let y = 0; y < size; y++) {
      // print the actual area:
      // area logic: if the position matches our character,
      // print the x, if the position matches our target,
      // print the o and if nothing of the two matches, print the empty space
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

// ++++++
// |x   |
// |    |
// |  o |
// |    |
// ++++++
function process_action(action) {
  switch (action) {
    case "up":
      if (position_x > 0) {
        position_x = position_x - 1;
      }
      break;
    case "down":
      if (position_x < size - 1) {
        position_x = position_x + 1;
      }
      break;
    case "left":
      if (position_y > 0) {
        position_y = position_y - 1;
      }
      break;
    case "right":
      if (position_y < size - 1) {
        position_y = position_y + 1;
      }
      break;
  }
}

render();
process_action("steve");
render();
