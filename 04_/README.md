## MERN stack in Hindi

### REST API and CRUD

##### Read GET /products

<details><summary>index.js </summary>

const fs = require("fs");

const index = fs.readFileSync("./02*/index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("./02*/data.json", "utf-8"));
const products = data.products;

const express = require("express");
const morgan = require("morgan");
const server = express();

//bodyParser
server.use(express.json());
server.use(morgan("default"));
server.use(express.static("public"));

// API - Endpoint - Route

// Read GET /products
server.get("/products", (req, res) => {
res.json(products);
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

</details>

```
**At browser**
http://localhost:8080/product/abc

http://localhost:8080/products
```

##### Read GET /products/:id

<details><summary>index.js </summary>

const fs = require("fs");

const index = fs.readFileSync("./02*/index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("./02*/data.json", "utf-8"));
const products = data.products;

const express = require("express");
const morgan = require("morgan");
const server = express();

//bodyParser
server.use(express.json());
server.use(morgan("default"));
server.use(express.static("public"));

// API - Endpoint - Route

// Products
// API ROOT, base URL, Example - google.com/api/v2/

// Read GET /products
server.get("/products", (req, res) => {
res.json(products);
});
server.get("/products/:id", (req, res) => {
console.log(req.params); //Notice this
res.json(products);
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

</details>

```
**At postman**
GET : http://localhost:8080/products/2

**At Terminal**
{ id: '2' }
```

<details><summary>index.js </summary>

// Read GET /products
server.get("/products", (req, res) => {
res.json(products);
});

// Read GET /products/:id
server.get("/products/:id", (req, res) => {
const id = +req.params.id; //Notice this
const product = products.find((p) => p.id === id);
res.json(product);
});

</details>

```
**At postman**
GET : http://localhost:8080/products/2

GET : http://localhost:8080/products/5
```

##### Create POST /products

<details><summary>index.js </summary>

// Read GET /products/:id
server.get("/products/:id", (req, res) => {
const id = +req.params.id;
const product = products.find((p) => p.id === id);
res.json(product);
});

// Create POST /products
server.post("/products", (req, res) => {
console.log(req.body); //Notice this
res.json({ type: "POST" });
});

</details>

```

**At postman**
POST : http://localhost:8080/products
Body --> raw --> JSON
{
    "id": 31,
    "title": "IPhone 14",
    "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
    "price": 499,
    "discountPercentage": 10.58,
    "rating": 4.09,
    "stock": 32,
    "brand": "Huawei",
    "category": "smartphones",
    "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
    "images": [
        "https://i.dummyjson.com/data/products/5/1.jpg",
        "https://i.dummyjson.com/data/products/5/2.jpg",
        "https://i.dummyjson.com/data/products/5/3.jpg"
    ]
}

**At Terminal**
{
  id: 31,
  title: 'IPhone 14',
  description: 'Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.',
  price: 499,
  discountPercentage: 10.58,
  rating: 4.09,
  stock: 32,
  brand: 'Huawei',
  category: 'smartphones',
  thumbnail: 'https://i.dummyjson.com/data/products/5/thumbnail.jpg',
  images: [
    'https://i.dummyjson.com/data/products/5/1.jpg',
    'https://i.dummyjson.com/data/products/5/2.jpg',
    'https://i.dummyjson.com/data/products/5/3.jpg'
  ]
}
```

<details><summary>index.js </summary>

// Create POST /products
server.post("/products", (req, res) => {
console.log(req.body); //Notice this
products.push(req.body);
res.json(req.body);
});

</details>

```
**At postman**
POST : http://localhost:8080/products
Body --> raw --> JSON
{
    "id": 31,
    "title": "IPhone 14",
    "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
    "price": 499,
    "discountPercentage": 10.58,
    "rating": 4.09,
    "stock": 32,
    "brand": "Huawei",
    "category": "smartphones",
    "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
    "images": [
        "https://i.dummyjson.com/data/products/5/1.jpg",
        "https://i.dummyjson.com/data/products/5/2.jpg",
        "https://i.dummyjson.com/data/products/5/3.jpg"
    ]
}

GET : http://localhost:8080/products
**Notice Result in Postman**

GET : http://localhost:8080/products/31
**Notice Result in Postman**
```

##### Update PUT /products/:id

<details><summary>index.js </summary>

// Create POST /products
server.post("/products", (req, res) => {
console.log(req.body);
products.push(req.body);
res.status(201).json(req.body); //Notice this
});

// Read GET /products
server.get("/products", (req, res) => {
res.json(products);
});

// Read GET /products/:id
server.get("/products/:id", (req, res) => {
const id = +req.params.id;
const product = products.find((p) => p.id === id);
res.json(product);
});

// Update PUT /products/:id
server.put("/products/:id", (req, res) => {
const id = +req.params.id; //Notice this
const productIndex = products.findIndex((p) => p.id === id);
products.splice(productIndex, 1, { ...req.body, id: id });
res.status(201).json(); //Notice this
});

</details>

```
**At postman**
PUT : http://localhost:8080/products/1
Body --> raw --> JSON
{
    "title": "iPhone 99999",
    "description": "An apple mobile which is nothing like apple",
    "price": 999,
    "discountPercentage": 12.99,
    "rating": 4.99,
    "stock": 99
}

GET : http://localhost:8080/products
{
    "title": "iPhone 99999",
    "description": "An apple mobile which is nothing like apple",
    "price": 999,
    "discountPercentage": 12.99,
    "rating": 4.99,
    "stock": 99,
    "id": 1
},
{
    "id": 2,
    "title": "iPhone X",
    "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    "price": 899,
    "discountPercentage": 17.94,
    "rating": 4.44,
    "stock": 34,
    "brand": "Apple",
    "category": "smartphones",
    "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
    "images": [
        "https://i.dummyjson.com/data/products/2/1.jpg",
        "https://i.dummyjson.com/data/products/2/2.jpg",
        "https://i.dummyjson.com/data/products/2/3.jpg",
        "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
    ]
},
```

##### Update PATCH /products/:id

<details><summary>index.js </summary>

// Update PATCH /products/:id
server.patch("/products/:id", (req, res) => {
const id = +req.params.id;
const productIndex = products.findIndex((p) => p.id === id);
const product = products[productIndex];
products.splice(productIndex, 1, { ...product, ...req.body });
res.status(201).json();
});

</details>

```
**At postman**
PATCH : http://localhost:8080/products/1
Body --> raw --> JSON
{
    "price": 999
}

GET : http://localhost:8080/products
{
    "id": 1,
    "title": "iPhone 9",
    "description": "An apple mobile which is nothing like apple",
    "price": 999,
    "discountPercentage": 12.96,
    "rating": 4.69,
    "stock": 94,
    "brand": "Apple",
    "category": "smartphones",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "images": [
        "https://i.dummyjson.com/data/products/1/1.jpg",
        "https://i.dummyjson.com/data/products/1/2.jpg",
        "https://i.dummyjson.com/data/products/1/3.jpg",
        "https://i.dummyjson.com/data/products/1/4.jpg",
        "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ]
},
```

##### Delete DELETE /products/:id

<details><summary>index.js </summary>

// Delete DELETE /products/:id
server.delete("/products/:id", (req, res) => {
const id = +req.params.id;
const productIndex = products.findIndex((p) => p.id === id);
const product = products[productIndex];
products.splice(productIndex, 1);
res.status(201).json(product);
});

</details>

```
**At postman**
DELETE : http://localhost:8080/products/1

GET : http://localhost:8080/products
**Notice Result**
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
server.use(morgan("default"));
server.use(express.static("public"));

// API - Endpoint - Route

// Products
// API ROOT, base URL, Example - google.com/api/v2/

// Create POST /products
server.post("/products", (req, res) => {
  console.log(req.body);
  products.push(req.body);
  res.status(201).json(req.body); //Notice this
});

// Read GET /products
server.get("/products", (req, res) => {
  res.json(products);
});

// Read GET /products/:id
server.get("/products/:id", (req, res) => {
  const id = +req.params.id;
  const product = products.find((p) => p.id === id);
  res.json(product);
});

// Update PUT /products/:id
server.put("/products/:id", (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  products.splice(productIndex, 1, { ...req.body, id: id });
  res.status(201).json();
});

// Update PATCH /products/:id
server.patch("/products/:id", (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  const product = products[productIndex];
  products.splice(productIndex, 1, { ...product, ...req.body });
  res.status(201).json();
});

// Delete DELETE /products/:id
server.delete("/products/:id", (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  const product = products[productIndex];
  products.splice(productIndex, 1);
  res.status(201).json(product);
});

server.get("/demo", (req, res) => {
  res.sendStatus(201).res.send("<h1>hello</h1>");
});

server.listen(8080, () => {
  console.log("Server started");
});

```

</details>
