
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('What do you think of Node.js? ', (answer) => {
  // TODO: Log the answer in a database
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.close();
});


// const callback = (input) => {
//   console.log("the input value is ", input);
// };
//
// function caller(another_function) {
//   another_function("some example input");
// }
//
// caller(callback);

// setTimeout(() => {
//   console.log("this is called after some time");
// }, 3000);
//





