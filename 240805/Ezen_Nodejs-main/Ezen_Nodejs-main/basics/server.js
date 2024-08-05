// HTTP 모듈로 서버 만들고 실행하기

const http = require("http");

const server = http.createServer((req, res) => {
  const method = req.method.toLowerCase();
  const url = req.url;
  if (method === "get" && url === "/") {
    res.end("Node Server");
    res.statusCode = 200;
  } else if (method === "get" && url === "/home") {
    res.write("home");
    res.end();
  } else if (method === "get" && url === "/about") {
    res.write("about");
    res.end();
  } else {
    res.statusCode = 404;
    res.write("not found");
    res.end();
  }
});

server.listen(3000, () => {
  console.log("서버 실행 중");
});
