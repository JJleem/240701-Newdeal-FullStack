// express로 서버 만들기
const express = require("express");
const app = express();
const dbConnect = require("./config/dbConnect");
const methodOverride = require("method-override");

dbConnect();
app.set("view engine", "ejs");
app.set("views,", "./views");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public"));
app.use(methodOverride("_method"));
app.get("/", (req, res) => {
  res.render("getAll");
});
app.get("/home", (req, res) => {
  res.render("home");
});
app.use("/register", require("./registerRoutes"));
app.use("/contacts", require("./routes"));
app.use("/home", require("./homeRoutes"));

app.listen(3000, () => {
  console.log("Server 실행중...");
});
