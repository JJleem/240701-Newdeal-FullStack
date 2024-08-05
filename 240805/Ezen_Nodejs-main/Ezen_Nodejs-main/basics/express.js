// express로 서버 만들기
const express = require("express");
const app = express();

// app.get("/", (req, res) => {
//   res.status(200);
//   res.sendFile(__dirname + "/sample.html");
// });
// app.get("/home", (req, res) => {
//   res.send("hi Home");
// });
// app.get("/about", (req, res) => {
//   res.send("hi About");
// });
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Hello");
});
app.use("/contacts", require("./routes"));
// // 모든 연락처 보기
// app.get("/contacts", (req, res) => {
//   res.status(200).send("Contacts Page");
// });
// // 연락처 추가하기
// app.post("/contacts", (req, res) => {
//   res.status(201).send("Create New Contacts");
// });
// // 연락처 상세보기 (조회)
// app.get("/contacts/:id", (req, res) => {
//   res.status(200).send(`View Page ID: ${req.params.id}`);
// });
// // 연락처 수정하기
// app.put("/contacts/:id", (req, res) => {
//   res.status(200).send(`Update Page ID: ${req.params.id}`);
// });
// // 연락처 삭제하기
// app.delete("/contacts/:id", (req, res) => {
//   res.status(200).send(`Delete Page ID: ${req.params.id}`);
// });
// //

app.listen(3000, () => {
  console.log("Server 실행중...");
});
