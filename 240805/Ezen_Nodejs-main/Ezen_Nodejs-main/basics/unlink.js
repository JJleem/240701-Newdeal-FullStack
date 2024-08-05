// 파일 삭제하기

const fs = require("fs");

if (!fs.existsSync("./text.txt")) {
  console.log("no exist file");
} else {
  fs.unlinkSync("./text.txt");
  console.log("deleted!");
}
