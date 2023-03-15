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
exports.createProduct = (req, res) => {
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
exports.createProduct = (req, res) => {
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
exports.createProduct = (req, res) => {
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

#### Validation and Create or POST or new XXXX()

```
https://mongoosejs.com/docs/validation.html
```

<details><summary>product.js - model</summary>

```
const mongoose = require("mongoose");
const { Schema } = mongoose; // Notice

const productSchema = new Schema({
  title: { type: String, require: true },
  description: String,
  price: { type: Number, min: [0, "wrong min price"] },
  discountPercentage: {
    type: Number,
    min: [0, "wrong min discoung"],
    max: [50, "wrong max discoung"],
  },
  rating: {
    type: Number,
    min: [0, "wrong min rating"],
    max: [5, "wrong max rating"],
  },
  brand: { type: String, require: true },
  category: { type: String, require: true },
  thumbnail: { type: String, require: true },
  images: [String],
});

exports.Product = mongoose.model("Product", productSchema);
```

</details>

```
** Postman **
POST : http://localhost:8080/products
Body --> raw --> JSON
{
    "title": "iPhone X",
    "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    "price": -100,
    "discountPercentage": 99.94,
    "rating": 4.44,
    "stock": 34,
    "brand": "Apple"
}

Response
Status: 201 Created

**Terminal**
err: Error: Product validation failed: price: wrong min price, discountPercentage: wrong max discoung
```

<details><summary>product.js - controller</summary>

```
const fs = require("fs");
const model = require("../model/product");
const Product = model.Product;

// Notice
exports.createProduct = (req, res) => {
  const product = new Product(req.body);

  product.save((err, doc) => {
    console.log({ err, doc });
    if (err) {
      res.status(404).json(err);
    } else {
      res.status(201).json(doc);
    }
  });
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
    "title": "iPhone X",
    "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    "price": -100,
    "discountPercentage": 99.94,
    "rating": 4.44,
    "stock": 34,
    "brand": "Apple"
}

Response
Status: 400 Error

**Try**
{
    "title": "iPhone X",
    "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    "price": 100,
    "discountPercentage": 9.94,
    "rating": 4.44,
    "stock": 34,
    "brand": "Apple",
    "category": "smartphones",
    "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
}
```

<details><summary>product.js - model</summary>

```
const mongoose = require("mongoose");
const { Schema } = mongoose; // Notice

const productSchema = new Schema({
  title: { type: String, require: true, unique: true },
  description: String,
  price: { type: Number, min: [0, "wrong min price"] },
  discountPercentage: {
    type: Number,
    min: [0, "wrong min discount"],
    max: [50, "wrong max discount"],
  },
  rating: {
    type: Number,
    min: [0, "wrong min rating"],
    max: [5, "wrong max rating"],
  },
  brand: { type: String, require: true },
  category: { type: String, require: true },
  thumbnail: { type: String, require: true },
  images: [String],
});

exports.Product = mongoose.model("Product", productSchema);
```

</details>

#### Read or GET or Model.find()

```
https://mongoosejs.com/docs/api/model.html#model_Model-find
```

<details><summary>product.js - controller</summary>

```
exports.getAllProduct = (req, res) => {
  const products = await Product.find();
  res.json(products);
};
```

</details>

```
** Postman **
GETS : http://localhost:8080/products

** Terminal **
SyntaxError: await is only valid in async functions and the top level bodies of modules
```

<details><summary>product.js - controller</summary>

```
exports.getAllProduct = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};
```

</details>

```
** Postman **
GETS : http://localhost:8080/products

** Notice Result **
```

<details><summary>product.js - controller</summary>

```
exports.getAllProduct = async (req, res) => {
  const products = await Product.find({ price: { $gt: 500 } });
  res.json(products);
};
```

</details>

```
** Postman **
GETS : http://localhost:8080/products

** Notice Result **
```

#### Read or GET or Model.findById()

```
https://mongoosejs.com/docs/api/model.html#model_Model-findById
```

<details><summary>product.js - controller</summary>

```
exports.getProduct = async (req, res) => {
  const id = +req.params.id;
  const product = await Product.findById(id);
  res.json(product);
};
```

</details>

```
** Postman **
GET : http://localhost:8080/products/640e275ed6dc98b0394ed2d1

** Terminal **
CastError: Cast to ObjectId failed for value "NaN" (type number) at path "_id" for model "Product"
```

```
https://mongoosejs.com/docs/api/mongoose.html#mongoose_Mongoose-ObjectId
```

<details><summary>product.js - controller</summary>

```
exports.getProduct = async (req, res) => {
  const id = req.params.id; // Notice
  const product = await Product.findById(id);
  res.json(product);
};
```

</details>

```
** Postman **
GET : http://localhost:8080/products/640e275ed6dc98b0394ed2d1

** Notice Result **
```

#### Model.findOneAndReplace()

```
https://mongoosejs.com/docs/api/model.html#model_Model-findOneAndReplace
```

<details><summary>product.js - controller</summary>

```
exports.replaceProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Product.findOneAndReplace({ _id: id }, req.body, {
      new: true,
    });
    res.status(201).json(doc);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};
```

</details>

```
** Postman **
PUT : http://localhost:8080/products/6411dc873958e3ac3acfde0f
Body --> raw --> JSON
{
    "title": "iPhone 12",
    "description": "An apple mobile which is nothing like apple",
    "price": 222,
    "discountPercentage": 12.96,
    "rating": 2.44,
    "brand": "Apple",
    "category": "smartphones",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
}

** Notice Response **
```

#### findOneAndUpdate()

<details><summary>product.js - controller</summary>

```
exports.updateProduct = async (req, res) => {
  const id = req.params.id;
  try{
  const doc = await Product.findOneAndUpdate({_id:id},req.body,{new:true})
  res.status(201).json(doc);
  }
  catch(err){
    console.log(err);
    res.status(400).json(err);
  }
};
```

</details>

```
** Postman **
PATCH : http://localhost:8080/products/http://localhost:8080/products/6411e3425035c91ffaea190d
Body --> raw --> JSON
{
    "discountPercentage": 11.11
}

** Notice Response **
```

#### findOneAndDelete()

<details><summary>product.js - controller</summary>

```
exports.deleteProduct = async (req, res) => {
  const id = req.params.id;
  try{
  const doc = await Product.findOneAndDelete({_id:id})
  res.status(201).json(doc);
  }
  catch(err){
    console.log(err);
    res.status(400).json(err);
  }
};
```

</details>

```
** Postman **
DELETE : http://localhost:8080/products/http://localhost:8080/products/6411e3425035c91ffaea190d

** Notice Response **
```

---
