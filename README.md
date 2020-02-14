# Find the Treasure

Try to write a command line game, which can be controlled with the commands `"up"`, `"down"`, `"left"` and `"right"` from the command line, to lead a character from his current position to the treasure.

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
3. Modify your program so that `render` no longer gets the parameters as arguments, but `size`, `position_x`, `position_y`, `target_x` and `target_y` are available as global variables
4. Create a new function `process_action`, which gets `action` as parameter. `action` can be `"up"`, `"down"`, `"left"`, `"right"` or any other string.
    - For known actions, it should adjust the parameters (`position_x` and `position_y`)
    - for unknown actions do nothing.
