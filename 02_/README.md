## MERN stack in Hindi

### Web Server using Node JS

From 01\_ Delete file and folder only left ".gitignore" and "index.js"

```
$ npm init -y
```

---

Create Server

```
https://nodejs.org/docs/latest-v17.x/api/http.html
```

```
const http = require("http");

const data = { age: 5 };

const server = http.createServer((req, res) => {
  console.log("server started");
  //   res.setHeader("Content-Type", "application/json");
  res.setHeader("Content-Type", "text/html");
  //   res.end(JSON.stringify(data));
  res.end("<h1>Solo KOPE</h1>");
});

server.listen(8080);
```

---

```
const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);
});

server.listen(8080);
```

```
http://localhost:8080/demo

/demo

http://localhost:8080/
/
```

---

```
https://dummyjson.com/

https://dummyjson.com/products
```

Create file name "data.json" and copy data to the file
Create file name "index.html"
index.html

```
<body>
    <h1>Hello Solo KOPE</h1>
</body>
```

index.js

```
const http = require("http");
const fs = require("fs");

const index = fs.readFileSync("./02_/index.html", "utf-8");

const server = http.createServer((req, res) => {
  console.log(req.url);
  //   res.setHeader("Content-Type", "application/json");
  res.setHeader("Content-Type", "text/html");
  //   res.end(JSON.stringify(data));
  res.end(index);
});

server.listen(8080);
```

```
const http = require("http");
const fs = require("fs");

const index = fs.readFileSync("./02_/index.html", "utf-8");
const data = fs.readFileSync("./02_/data.json", "utf-8");

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.setHeader("Content-Type", "application/json");
  //   res.setHeader("Content-Type", "text/html");
  //   res.end(JSON.stringify(data));
  res.end(data);
});

server.listen(8080);
```

---

Take data from git to file name "index.html"

```
<link
  rel="stylesheet"
  href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
/>
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
/>
<style>
  body {
    background-color: #eee;
  }
  .container {
    width: 900px;
  }

  .card {
    background-color: #fff;
    border: none;
    border-radius: 10px;
    width: 250px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  .image-container {
    position: relative;
  }

  .thumbnail-image {
    border-radius: 10px !important;
  }

  .discount {
    background-color: red;
    padding-top: 1px;
    padding-bottom: 1px;
    padding-left: 4px;
    padding-right: 4px;
    font-size: 10px;
    border-radius: 6px;
    color: #fff;
  }

  .wishlist {
    height: 25px;
    width: 25px;
    background-color: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  .first {
    position: absolute;
    width: 100%;
    padding: 9px;
  }

  .dress-name {
    font-size: 13px;
    font-weight: bold;
    width: 75%;
  }

  .new-price {
    font-size: 13px;
    font-weight: bold;
    color: red;
  }
  .old-price {
    font-size: 8px;
    font-weight: bold;
    color: grey;
  }

  .btn {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    padding: 3px;
  }

  .creme {
    background-color: #fff;
    border: 2px solid grey;
  }
  .creme:hover {
    border: 3px solid grey;
  }

  .creme:focus {
    background-color: grey;
  }

  .red {
    background-color: #fff;
    border: 2px solid red;
  }

  .red:hover {
    border: 3px solid red;
  }
  .red:focus {
    background-color: red;
  }

  .blue {
    background-color: #fff;
    border: 2px solid #40c4ff;
  }

  .blue:hover {
    border: 3px solid #40c4ff;
  }
  .blue:focus {
    background-color: #40c4ff;
  }
  .darkblue {
    background-color: #fff;
    border: 2px solid #01579b;
  }
  .darkblue:hover {
    border: 3px solid #01579b;
  }
  .darkblue:focus {
    background-color: #01579b;
  }
  .yellow {
    background-color: #fff;
    border: 2px solid #ffca28;
  }
  .yellow:hover {
    border-radius: 3px solid #ffca28;
  }
  .yellow:focus {
    background-color: #ffca28;
  }

  .item-size {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #fff;
    border: 1px solid grey;
    color: grey;
    font-size: 10px;
    text-align: center;
    align-items: center;
    display: flex;
    justify-content: center;
  }

  .rating-star {
    font-size: 10px !important;
  }
  .rating-number {
    font-size: 10px;
    color: grey;
  }
  .buy {
    font-size: 12px;
    color: purple;
    font-weight: 500;
  }

  .voutchers {
    background-color: #fff;
    border: none;
    border-radius: 10px;
    width: 190px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    overflow: hidden;
  }
  .voutcher-divider {
    display: flex;
  }
  .voutcher-left {
    width: 60%;
  }
  .voutcher-name {
    color: grey;
    font-size: 9px;
    font-weight: 500;
  }
  .voutcher-code {
    color: red;
    font-size: 11px;
    font-weight: bold;
  }
  .voutcher-right {
    width: 40%;
    background-color: purple;
    color: #fff;
  }

  .discount-percent {
    font-size: 12px;
    font-weight: bold;
    position: relative;
    top: 5px;
  }
  .off {
    font-size: 14px;
    position: relative;
    bottom: 5px;
  }
</style>

<div class="container mt-5">
  <div class="row">
    <div class="col-md-3">
      <div class="card">
        <div class="image-container">
          <div class="first">
            <div class="d-flex justify-content-between align-items-center">
              <span class="discount">-25%</span>
              <span class="wishlist"><i class="fa fa-heart-o"></i></span>
            </div>
          </div>

          <img
            src="https://i.dummyjson.com/data/products/30/thumbnail.jpg"
            class="img-fluid rounded thumbnail-image"
          />
        </div>

        <div class="product-detail-container p-2">
          <div class="d-flex justify-content-between align-items-center">
            <h5 class="dress-name">Key Holder</h5>

            <div class="d-flex flex-column mb-2">
              <span class="new-price">&#8377 30</span>
              <small class="old-price text-right">&#8377 700</small>
            </div>
          </div>



          <div class="d-flex justify-content-between align-items-center pt-1">
            <div>
              <i class="fa fa-star-o rating-star"></i>
              <span class="rating-number">4.92</span>
            </div>

            <span class="buy">BUY +</span>
          </div>
        </div>
      </div>


    </div>

  </div>
</div>
```

---

```
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
    case "/api":
      res.setHeader("Content-Type", "application/json");
      res.end(data);
    default:
      res.writeHead(404, "Not Found");
      res.end();
  }
});

server.listen(8080);
```

```
Error [ERR_HTTP_HEADERS_SENT]: Cannot render headers after they are sent to the client
```

```
switch (req.url) {
    case "/":
      res.setHeader("Content-Type", "text/html");
      res.end(index);
      break;
    case "/api":
      res.setHeader("Content-Type", "application/json");
      res.end(data);
      break;
    default:
      res.writeHead(404, "Not Found");
      res.end();
}
```

---

```
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
```
