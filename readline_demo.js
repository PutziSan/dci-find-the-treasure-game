// example of callbacks:
const callback = input => {
  console.log("the input value is ", input);
};
function caller(fn) {
  fn("some example input");
}
caller(callback);

// example for another callback-usage:
// call a function after a period of time
setTimeout(
  // this function will be called after 3000ms (3 seconds)
  () => {
    console.log("this is called after some time");
  },
  3000
);

// require: use a library, so that we do not need to code everything on our own:
const readline = require("readline");
// connect our command-line with the readline-library
const rl = readline.createInterface({
  input: process.stdin, // process.stdin is the input-stream of the command-line
  output: process.stdout // process.stdout is the output-stream of the commandline
});
// ask a question and wait for the answer:
rl.question(
  // this question will be displayed
  "What do you think of Node.js? ",
  // our callback, when you press enter,
  // the callback-function will be called with everything you typed before
  answer => {
    console.log(`Thank you for your valuable feedback: ${answer}`);
    // for closing and ending the program:
    // close the stream and destroy the stdin-stream
    rl.close();
    process.stdin.destroy();
  }
);