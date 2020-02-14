# Find the Treasure

Try to write a command line game, which can be controlled with the commands 'up', 'down', 'left' and 'right' from the command line, to lead a character from his current position to the treasure.

## tasks

1. Write a function `render` that draws an area of size `size x size` for a number `size` (via `console.log`)
    - example input: `4`
    - expected output:
      ```
      ++++++
      |    |
      |    |
      |    |
      |    |
      ++++++
      ```
2. Adjust the `render`-function so that the function processes 4 additional parameters (`position_x`, `position_y`, `target_x` and `target_y`).
    - example input: `size: 4`, `position_x: 0`, `position_y: 0`, `target_x: 2`, `target_y: 2`
    - expected output:
      ```
      ++++++
      |x   |
      |    |
      |  o |
      |    |
      ++++++
      ```
3. to be continued...

