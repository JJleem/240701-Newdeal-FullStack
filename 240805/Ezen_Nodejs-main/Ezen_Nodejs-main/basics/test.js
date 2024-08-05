// const c = require("ansi-colors");

// console.log(c.bold.italic.red("This is a red string!"));
// console.log(c.underline.green("This is a red string!"));
// console.log(c.bgCyanBright("This is a cyan string!"));
// console.log(c.yellow("This is a yellow string!"));

// function hello(name) {
//   console.log(name);
// }
// hello("jaejun");

const { user1, user2 } = require("./user");
const hello = require("./hello");

hello(user1);
hello(user2);
