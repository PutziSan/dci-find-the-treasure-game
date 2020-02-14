
// 1. Write a function `render` that draws an area
// of size `size x size` for a number `size` (via `console.log`)
// position_x, position_y, target_x, target_y
// ++++++
// |    |
// |    |
// |    |
// |    |
// ++++++
function render(size) {
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
      line += " ";
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

render(4);
