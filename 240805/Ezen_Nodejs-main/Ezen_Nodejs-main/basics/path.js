// path 모듈 연습하기

const path = require("path");

const parsedPath = path.parse(__filename);
const fn = path.basename(__filename);
const ex = path.extname(__filename);
console.log(fn);
console.log(ex);
