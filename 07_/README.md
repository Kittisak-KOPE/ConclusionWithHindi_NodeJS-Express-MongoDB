## MERN stack in Hindi

### Mongoose, Schema, Model and CRUD operations

#### Mongoose, mongoose.connect()

```
https://mongoosejs.com/docs/index.html
```

```
$ npm install mongoose
```

<details><summary>index.js</summary>

```
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose"); // Notice this
const server = express();
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");

console.log("env", process.env.DB_PASSWORD);

//db connection // Notice this
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");
  console.log("database connected");
}

//bodyParser
server.use(express.json());
server.use(morgan("default"));
server.use(express.static(process.env.PUBLIC_DIR));
server.use("/products", productRouter.router);
server.use("/user", userRouter.router);

server.listen(process.env.PORT, () => {
  console.log("Server started");
});
```

</details>

#### Schema

```
https://mongoosejs.com/docs/guide.html

Constructing Documents
https://mongoosejs.com/docs/models.html
```

<details><summary>index.js</summary>

```
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const { Schema } = mongoose; // Notice

const server = express();
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");

console.log("env", process.env.DB_PASSWORD);

//db connection
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");
  console.log("database connected");
}

// Schema //Notice
const productSchema = new Schema({
  title: String,
  description: String,
  price: Number,
  discountPercentage: Number,
  rating: Number,
  stock: Number,
  brand: String,
  category: String,
  thumbnail: String,
  images: [String],
});

const Product = mongoose.model("Product", productSchema); //Notice

//bodyParser
server.use(express.json());
server.use(morgan("default"));
server.use(express.static(process.env.PUBLIC_DIR));
server.use("/products", productRouter.router);
server.use("/user", userRouter.router);

server.listen(process.env.PORT, () => {
  console.log("Server started");
});
```

</details>

#### Model, CRUD : Create

Create Folder name model, Then create file name "product.js" in the model.

<details><summary>product.js - model</summary>

```
const mongoose = require("mongoose");
const { Schema } = mongoose; // Notice

const productSchema = new Schema({
  title: String,
  description: String,
  price: Number,
  discountPercentage: Number,
  rating: Number,
  stock: Number,
  brand: String,
  category: String,
  thumbnail: String,
  images: [String],
});

exports.Product = mongoose.model("Product", productSchema);
```

</details>

<details><summary>product.js - controller</summary>

```
const fs = require("fs");
const model = require("../model/product");
const Product = model.Product;

// Notice
exports.createProduct = async function createProduct(req, res) {
  const product = new Product();
  product.title = "PhoneX";
  product.price = 9999;
  product.ratings = 5;

  product.save((err, doc) => {
    console.log({ err, doc });
  });

  res.status(201).json(req.body);
};

exports.getAllProduct = (req, res) => {
  res.json(products);
};

exports.getProduct = (req, res) => {
  const id = +req.params.id;
  const product = products.find((p) => p.id === id);
  res.json(product);
};

exports.replaceProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  products.splice(productIndex, 1, { ...req.body, id: id });
  res.status(201).json();
};

exports.updateProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  const product = products[productIndex];
  products.splice(productIndex, 1, { ...product, ...req.body });
  res.status(201).json();
};

exports.deleteProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  const product = products[productIndex];
  products.splice(productIndex, 1);
  res.status(201).json(product);
};
```

</details>

```
** Postman **
POST : http://localhost:8080/products
Body --> raw --> JSON
{
    "price": 999
}

** Terminal **
{
  err: null,
  doc: {
    images: [],
    _id: new ObjectId("640e23e2152508f3fe39e7d1"),
    title: 'PhoneX',
    price: 9999,
    __v: 0
  }
}
```

<details><summary>product.js - controller</summary>

```
exports.createProduct = async function createProduct(req, res) {
  const product = new Product();
  product.title = "PhoneX";
  product.price = 9999;
  product.rating = 5;

  product.save((err, doc) => {
    console.log({ err, doc });
    res.status(201).json(doc);  // Notice
  });
};
```

</details>

```
** Postman **
POST : http://localhost:8080/products
Body --> raw --> JSON
{
    "price": 999
}

Response
{
    "images": [],
    "_id": "640e258222d00870dc93273d",
    "title": "PhoneX",
    "price": 9999,
    "rating": 5,
    "__v": 0
}
```

req.body

<details><summary>product.js - controller</summary>

```
exports.createProduct = async function createProduct(req, res) {
  const product = new Product(req.body); // Notice

  product.save((err, doc) => {
    console.log({ err, doc });
    res.status(201).json(doc);
  });
};
```

</details>

```
** Postman **
POST : http://localhost:8080/products
Body --> raw --> JSON
{
    "title": "iPhone 9",
    "description": "An apple mobile which is nothing like apple",
    "price": 549,
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
}

**See Response **

**MongoDB Compass**
Delete all data except for iPhone 9
```

---

#### Validation

```
https://mongoosejs.com/docs/validation.html
```
