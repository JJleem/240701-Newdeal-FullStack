// 파일 기록하기

const fs = require("fs");

fs.readFile("./example.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  fs.writeFile("./text.txt", data, (err) => {
    if (err) {
      console.log(err);
    }
    console.log("text.txt is saved!");
  });
});
