const http = require("http");
const fs = require("fs");

const index = fs.readFileSync("./02_/index.html", "utf-8");
const data = fs.readFileSync("./02_/data.json", "utf-8");

const server = http.createServer((req, res) => {
  console.log(req.url);

  switch (req.url) {
    case "/":
      res.setHeader("Content-Type", "text/html");
      res.end(index);
      break;
    case "/api":
      res.setHeader("Content-Type", "application/json");
      res.end(data);
      break;
    case "/product":
      res.setHeader("Content-Type", "text/html");
      res.end(data);
      break;
    default:
      res.writeHead(404, "Not Found");
      res.end();
  }
});

server.listen(8080);
