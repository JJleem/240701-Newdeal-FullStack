// express로 서버 만들기
const express = require("express");
const app = express();
const dbConnect = require("./config/dbConnect");

app.get("/", (req, res) => {
  res.status(200).send("Hello");
});
dbConnect();
app.use(express.json());
app.use("/contacts", require("./routes"));

app.listen(3000, () => {
  console.log("Server 실행중...");
});
