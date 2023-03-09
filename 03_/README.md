## MERN stack in Hindi

### Express JS

<details><summary>index.js</summary>

```
const fs = require("fs");

const index = fs.readFileSync("./02_/index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("./02_/data.json", "utf-8"));
const products = data.products;
```

</details>

---

#### Installing Express

```
$ npm i express
```

package.json

```
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js",
  "test": "echo \"Error: no test specified\" && exit 1"
}
```

```
$ npm run dev
```

<details><summary>index.js</summary>

```
const fs = require("fs");

const index = fs.readFileSync("./02_/index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("./02_/data.json", "utf-8"));
const products = data.products;

const express = require("express");

const server = express();

server.listen(8080);
```

```
**At Browser**
http://localhost:8080/

// Notice page and inspect to see Network then see at localhost, After that try to see Headers and Response
```

</details>

---

#### Useing ExpressJS

```
https://expressjs.com/en/4x/api.html#res

https://expressjs.com/en/4x/api.html#res.send
```

##### res.send([body])

<details><summary>index.js</summary>

```
const fs = require("fs");

const index = fs.readFileSync("./02_/index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("./02_/data.json", "utf-8"));
const products = data.products;

const express = require("express");

const server = express();
server.get("/", (req, res) => {
  //res.send("hello");             //-- Notice this : use res.send
  res.send("<h1>hello</h1>");
});

server.listen(8080, () => {
  console.log("Server started"); //-- Notice this : use callback
});
```

</details>

##### res.sendFile(path [, options] [, fn])

<details><summary>index.js</summary>

```
server.get("/", (req, res) => {
  // res.send("<h1>hello</h1>");
  res.sendFile("/home/solokope/Desktop/hindiMERN/03_/index.html"); //-- Notice this
});
```

</details>

##### res.json([body])

<details><summary>index.js</summary>

```
const fs = require("fs");

const index = fs.readFileSync("./02_/index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("./02_/data.json", "utf-8"));
const products = data.products;

const express = require("express");

const server = express();
server.get("/", (req, res) => {
  res.json(products); //-- Notice this
});

server.listen(8080, () => {
  console.log("Server started");
});
```

</details>

##### res.sendStatus(statusCode)

<details><summary>index.js</summary>

```
server.get("/", (req, res) => {
  res.sendStatus(404); //-- Notice this
});
```

```
server.get("/", (req, res) => {
  res.sendStatus(201).res.send("<h1>hello</h1>"); //-- Notice this
});
```

</details>

---

##### API - Endpoint - Route

<details><summary>index.js</summary>

```
const fs = require("fs");

const index = fs.readFileSync("./02_/index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("./02_/data.json", "utf-8"));
const products = data.products;

const express = require("express");

const server = express();

// API - Endpoint - Route
server.get("/", (req, res) => {
  res.json({ type: "GET" });
});

server.post("/", (req, res) => {
  res.json({ type: "POST" });
});

server.put("/", (req, res) => {
  res.json({ type: "PUT" });
});

server.delete("/", (req, res) => {
  res.json({ type: "DELETE" });
});

server.patch("/", (req, res) => {
  res.json({ type: "PATCh" });
});

server.get("/demo", (req, res) => {
  res.sendStatus(201).res.send("<h1>hello</h1>");
});

server.listen(8080, () => {
  console.log("Server started");
});
```

</details>

---

#### Using middleware

```
https://expressjs.com/en/guide/using-middleware.html
```

#### server.use((req, res, next){})

<details><summary>index.js</summary>

```
const fs = require("fs");

const index = fs.readFileSync("./02_/index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("./02_/data.json", "utf-8"));
const products = data.products;

const express = require("express");

const server = express();

// Notice this
server.use((req, res, next) => {
  console.log(req.method, req.ip, req.hostname);
});

// API - Endpoint - Route
server.get("/", (req, res) => {
  res.json({ type: "GET" });
});

server.post("/", (req, res) => {
  res.json({ type: "POST" });
});

server.put("/", (req, res) => {
  res.json({ type: "PUT" });
});

server.delete("/", (req, res) => {
  res.json({ type: "DELETE" });
});

server.patch("/", (req, res) => {
  res.json({ type: "PATCh" });
});

server.get("/demo", (req, res) => {
  res.sendStatus(201).res.send("<h1>hello</h1>");
});

server.listen(8080, () => {
  console.log("Server started");
});
```

</details>

```
**At Browser**
http://localhost:8080/

**Error after refresh**

**At Terminal**
GET ::1 localhost
```

##### next()

<details><summary>index.js</summary>

```
// Notice this
server.use((req, res, next) => {
  console.log(req.method, req.ip, req.hostname);
  next();
});
```

</details>

```
**At Browser**
http://localhost:8080/

**At Terminal**
GET ::1 localhost
```

##### req.get("User-Agent")

<details><summary>index.js</summary>

```
// Notice this
server.use((req, res, next) => {
  console.log(req.get("User-Agent"), req.method, req.ip, req.hostname);
  next();
});
```

</details>

```
**At Browser**
http://localhost:8080/

**At Terminal**
Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36 GET ::1 localhost
```

##### new Date()

<details><summary>index.js</summary>

```
server.use((req, res, next) => {
  console.log(
    req.method,
    req.ip,
    req.hostname,
    new Date(),           // Notice this
    req.get("User-Agent")
  );
  next();
});
```

</details>

```
**At Browser**
http://localhost:8080/

**At Terminal**
GET ::1 localhost 2023-03-09T15:09:27.018Z Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36
```

#### Router-level middleware

<details><summary>index.js</summary>

```
const fs = require("fs");

const index = fs.readFileSync("./02_/index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("./02_/data.json", "utf-8"));
const products = data.products;

const express = require("express");

const server = express();

server.use((req, res, next) => {
  console.log(
    req.method,
    req.ip,
    req.hostname,
    new Date(),
    req.get("User-Agent")
  );
  next();
});

// Notice this
const auth = (req, res, next) => {
  console.log(req.query);

  if (req.query.password) {
    next();
  } else {
    res.sendStatus(401);
  }
};

server.use(auth);

// API - Endpoint - Route
server.get("/", (req, res) => {
  res.json({ type: "GET" });
});

server.post("/", (req, res) => {
  res.json({ type: "POST" });
});

server.put("/", (req, res) => {
  res.json({ type: "PUT" });
});

server.delete("/", (req, res) => {
  res.json({ type: "DELETE" });
});

server.patch("/", (req, res) => {
  res.json({ type: "PATCh" });
});

server.get("/demo", (req, res) => {
  res.sendStatus(201).res.send("<h1>hello</h1>");
});

server.listen(8080, () => {
  console.log("Server started");
});
```

</details>

```
**At Browser**
http://localhost:8080/?password=123

**At Terminal**
{ password: '123' }
```

<details><summary>index.js</summary>

```
// Notice this
const auth = (req, res, next) => {
  console.log(req.query);

  if (req.query.password == "123") {
    next();
  } else {
    res.sendStatus(401);
  }
};
```

</details>

<details><summary>index.js : get() </summary>

```
const auth = (req, res, next) => {
  console.log(req.query);

  if (req.query.password == "123") {
    next();
  } else {
    res.sendStatus(401);
  }
};

// API - Endpoint - Route
// Notice this
server.get("/", auth, (req, res) => {
  res.json({ type: "GET" });
});
```

</details>

```
**At Terminal**
GET ::1 localhost 2023-03-09T15:27:33.019Z Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Mobile Safari/537.36
```

<details><summary>index.js : post() </summary>

```
server.post("/", auth, (req, res) => {
  res.json({ type: "POST" });
});
```

</details>

```
**At Postman**
POST : http://localhost:8080/?password=123
Params --> Query Params --> KEY = password, VALUE = 123

**At Terminal**
POST ::1 localhost 2023-03-09T15:35:31.217Z PostmanRuntime/7.29.2
{ password: '123' }

```

```

**At Postman**
POST : http://localhost:8080/?password=123
Body --> raw --> JSON -->
{
"password": "123"
}

Status : 401 Unauthorized

**At Terminal**
POST ::1 localhost 2023-03-09T15:35:31.217Z PostmanRuntime/7.29.2
{}

```

#### Built-in middleware

<details><summary>index.js </summary>

```

const fs = require("fs");

const index = fs.readFileSync("./02*/index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("./02*/data.json", "utf-8"));
const products = data.products;

const express = require("express");

const server = express();

//bodyParser
server.use(express.json()); // Notice this

server.use((req, res, next) => {
console.log(
req.method,
req.ip,
req.hostname,
new Date(),
req.get("User-Agent")
);
next();
});

const auth = (req, res, next) => {
// Notice this
if (req.body.password == "123") {
next();
} else {
res.sendStatus(401);
}
};

// API - Endpoint - Route
server.get("/", auth, (req, res) => {
res.json({ type: "GET" });
});

server.post("/", auth, (req, res) => {
res.json({ type: "POST" });
});

server.put("/", (req, res) => {
res.json({ type: "PUT" });
});

server.delete("/", (req, res) => {
res.json({ type: "DELETE" });
});

server.patch("/", (req, res) => {
res.json({ type: "PATCh" });
});

server.get("/demo", (req, res) => {
res.sendStatus(201).res.send("<h1>hello</h1>");
});

server.listen(8080, () => {
console.log("Server started");
});

```

</details>

```

**At Postman**
POST : http://localhost:8080/?password=123
Body --> raw --> JSON -->
{
"password": "123"
}

Status : 200 OK

```

##### express.static("public")

Create folder name : "public", And then copy "index.html" to this folder.

<details><summary>index.js </summary>

```

//bodyParser
server.use(express.json()); // Notice this
// server.use(express.urlencoded());
server.use(express.static("public"));

```

</details>

```

**At Browser**
http://localhost:8080/index.html

http://localhost:8080

```

Copy "data.json" to this folder "public".

```

**At Browser**
http://localhost:8080/data.json

```

#### Third-party middleware

```

https://expressjs.com/en/resources/middleware.html

```

##### morgan

```

https://expressjs.com/en/resources/middleware.html

```

Installation

```

$ npm install morgan

```

<details><summary>index.js </summary>

```

const fs = require("fs");

const index = fs.readFileSync("./02*/index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("./02*/data.json", "utf-8"));
const products = data.products;

const express = require("express");
const morgan = require("morgan"); // Notice this
const server = express();

//bodyParser
server.use(express.json());
// server.use(express.urlencoded());
server.use(morgan); // Notice this
server.use(express.static("public"));

// server.use((req, res, next) => {
// console.log(
// req.method,
// req.ip,
// req.hostname,
// new Date(),
// req.get("User-Agent")
// );
// next();
// });

const auth = (req, res, next) => {
if (req.body.password == "123") {
next();
} else {
res.sendStatus(401);
}
};

// API - Endpoint - Route
server.get("/", auth, (req, res) => {
res.json({ type: "GET" });
});

server.post("/", auth, (req, res) => {
res.json({ type: "POST" });
});

server.put("/", (req, res) => {
res.json({ type: "PUT" });
});

server.delete("/", (req, res) => {
res.json({ type: "DELETE" });
});

server.patch("/", (req, res) => {
res.json({ type: "PATCh" });
});

server.get("/demo", (req, res) => {
res.sendStatus(201).res.send("<h1>hello</h1>");
});

server.listen(8080, () => {
console.log("Server started");
});

```

</details>

```

**At Terminal**
morgan deprecated morgan(options): use morgan("default", options) instead node_modules/express/lib/router/layer.js:95:5
morgan deprecated default format: use combined format node_modules/express/lib/router/layer.js:95:5

```

<details><summary>index.js : dev </summary>

```

server.use(morgan("dev")); // Notice this

```

</details>

```

**At Browser**
http://localhost:8080/data.json
http://localhost:8080/

**At Terminal**
GET /data.json 304 2.952 ms - -
GET / 304 0.817 ms - -
GET /**url** 404 2.029 ms - 146

```

<details><summary>index.js : default </summary>

```

server.use(morgan("default")); // Notice this

```

</details>

```

**At Browser**
http://localhost:8080/

**At Terminal**
::1 - - [Thu, 09 Mar 2023 16:53:36 GMT] "GET / HTTP/1.1" 304 - "-" "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Mobile Safari/537.36"
::1 - - [Thu, 09 Mar 2023 16:53:36 GMT] "GET /**url** HTTP/1.1" 404 146 "http://localhost:8080/" "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Mobile Safari/537.36"

```

---

<details><summary>index.js </summary>

```

const fs = require("fs");

const index = fs.readFileSync("./02_/index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("./02_/data.json", "utf-8"));
const products = data.products;

const express = require("express");
const morgan = require("morgan");
const server = express();

//bodyParser
server.use(express.json());
// server.use(express.urlencoded());
server.use(morgan("default"));
server.use(express.static("public"));

// server.use((req, res, next) => {
//   console.log(
//     req.method,
//     req.ip,
//     req.hostname,
//     new Date(),
//     req.get("User-Agent")
//   );
//   next();
// });

const auth = (req, res, next) => {
  // if (req.body.password == "123") {
  //   next();
  // } else {
  //   res.sendStatus(401);
  // }
  next();
};

// API - Endpoint - Route // Notice this
server.get("/product/:id", auth, (req, res) => {
  console.log(req.params); // Notice this
  res.json({ type: "GET" });
});

server.post("/", auth, (req, res) => {
  res.json({ type: "POST" });
});

server.put("/", (req, res) => {
  res.json({ type: "PUT" });
});

server.delete("/", (req, res) => {
  res.json({ type: "DELETE" });
});

server.patch("/", (req, res) => {
  res.json({ type: "PATCh" });
});

server.get("/demo", (req, res) => {
  res.sendStatus(201).res.send("<h1>hello</h1>");
});

server.listen(8080, () => {
  console.log("Server started");
});

```

</details>

```

**At Browser**
http://localhost:8080/product/5

**At Terminal**
{ id: '5' }

```
