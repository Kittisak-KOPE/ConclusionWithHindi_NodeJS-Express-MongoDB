## MERN stack in Hindi

### Mongo DB and Mongo Atlas

#### Start and enable the MongoDB service

##### Problem and Solution

<details><summary>Problem</summary>

```
connect ECONNREFUSED 127.0.0.1:27017
```

```
$ mongo
MongoDB shell version v5.0.9
connecting to: mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb
Error: couldn't connect to server 127.0.0.1:27017, connection attempt failed: SocketException: Error connecting to 127.0.0.1:27017 :: caused by :: Connection refused :
connect@src/mongo/shell/mongo.js:372:17
@(connect):2:6
exception: connect failed
exiting with code 1
```

</details>

<details><summary>Solution</summary>

```
$ sudo systemctl status mongod
[sudo] password for solokope:
○ mongod.service - MongoDB Database Server
     Loaded: loaded (/lib/systemd/system/mongod.service; disabled; vendor preset: enabled)
     Active: inactive (dead)
       Docs: https://docs.mongodb.org/manual

$ sudo systemctl start mongod

$ sudo systemctl status mongod
● mongod.service - MongoDB Database Server
     Loaded: loaded (/lib/systemd/system/mongod.service; disabled; vendor preset: enabled)
     Active: active (running) since Sat 2023-03-11 15:20:57 +07; 24s ago
       Docs: https://docs.mongodb.org/manual
   Main PID: 32157 (mongod)
     Memory: 216.4M
        CPU: 531ms
     CGroup: /system.slice/mongod.service
             └─32157 /usr/bin/mongod --config /etc/mongod.conf

มี.ค. 11 15:20:57 solokope-Latitude-3420 systemd[1]: Started MongoDB Database Server.
```

</details>

#### MongoDB Shell

```
$ mongosh
```

##### Show Database

```
test> show dbs
admin       40.00 KiB
config      36.00 KiB
local       72.00 KiB
mydb       104.00 KiB
productDB   72.00 KiB
```

##### Use Database

```
test> use local
switched to db local
```

##### Show collections

```
local> show collections
startup_log
```

##### Show data in collections

```
local> db.startup_log.find()
```

##### Create collections

```
local> use ecommerce
switched to db ecommerce
ecommerce> exit()

solokope@solokope-Latitude-3420:~/Desktop/hindiMERN$ mongosh

test> show databases
admin       40.00 KiB
config     108.00 KiB
local       72.00 KiB
mydb       104.00 KiB
productDB   72.00 KiB

test> use ecommerce
switched to db ecommerce

ecommerce> db.products.insertOne({'title': 'iphone'})
{
  acknowledged: true,
  insertedId: ObjectId("640c92d210e1abbb4be945df")
}

ecommerce> db.products.find()
[ { _id: ObjectId("640c92d210e1abbb4be945df"), title: 'iphone' } ]

```

```
ecommerce> db.products.insertOne({'title': 'iphone'})
{
  acknowledged: true,
  insertedId: ObjectId("640c939510e1abbb4be945e0")
}

ecommerce> db.products.find()
[
  { _id: ObjectId("640c92d210e1abbb4be945df"), title: 'iphone' },
  { _id: ObjectId("640c939510e1abbb4be945e0"), title: 'iphone' }
]
```

Drop Database in MongoDB Compass

##### db.products.insertOne({})

<details><summary>Example</summary>

```
ecommerce> db.products.insertOne({
...       "id": 1,
...       "title": "iPhone 9",
...       "description": "An apple mobile which is nothing like apple",
...       "price": 549,
...       "discountPercentage": 12.96,
...       "rating": 4.69,
...       "stock": 94,
...       "brand": "Apple",
...       "category": "smartphones",
...       "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
...       "images": [
...         "https://i.dummyjson.com/data/products/1/1.jpg",
...         "https://i.dummyjson.com/data/products/1/2.jpg",
...         "https://i.dummyjson.com/data/products/1/3.jpg",
...         "https://i.dummyjson.com/data/products/1/4.jpg",
...         "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
...       ]
...     }
... )
{
  acknowledged: true,
  insertedId: ObjectId("640c95a510e1abbb4be945e1")
}


ecommerce> db.products.find()
[
  {
    _id: ObjectId("640c95a510e1abbb4be945e1"),
    id: 1,
    title: 'iPhone 9',
    description: 'An apple mobile which is nothing like apple',
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: 'Apple',
    category: 'smartphones',
    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    images: [
      'https://i.dummyjson.com/data/products/1/1.jpg',
      'https://i.dummyjson.com/data/products/1/2.jpg',
      'https://i.dummyjson.com/data/products/1/3.jpg',
      'https://i.dummyjson.com/data/products/1/4.jpg',
      'https://i.dummyjson.com/data/products/1/thumbnail.jpg'
    ]
  }
]
```

</details>

##### db.products.insertMany([{}])

<details><summary>Example</summary>

```
ecommerce> db.products.insertMany([{
...       "id": 2,
...       "title": "iPhone X",
...       "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
...       "price": 899,
...       "discountPercentage": 17.94,
...       "rating": 4.44,
...       "stock": 34,
...       "brand": "Apple",
...       "category": "smartphones",
...       "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
...       "images": [
...         "https://i.dummyjson.com/data/products/2/1.jpg",
...         "https://i.dummyjson.com/data/products/2/2.jpg",
...         "https://i.dummyjson.com/data/products/2/3.jpg",
...         "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
...       ]
...     },
...     {
...       "id": 3,
...       "title": "Samsung Universe 9",
...       "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
...       "price": 1249,
...       "discountPercentage": 15.46,
...       "rating": 4.09,
...       "stock": 36,
...       "brand": "Samsung",
...       "category": "smartphones",
...       "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
...       "images": ["https://i.dummyjson.com/data/products/3/1.jpg"]
...     },
...     {
...       "id": 4,
...       "title": "OPPOF19",
...       "description": "OPPO F19 is officially announced on April 2021.",
...       "price": 280,
...       "discountPercentage": 17.91,
...       "rating": 4.3,
...       "stock": 123,
...       "brand": "OPPO",
...       "category": "smartphones",
...       "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
...       "images": [
...         "https://i.dummyjson.com/data/products/4/1.jpg",
...         "https://i.dummyjson.com/data/products/4/2.jpg",
...         "https://i.dummyjson.com/data/products/4/3.jpg",
...         "https://i.dummyjson.com/data/products/4/4.jpg",
...         "https://i.dummyjson.com/data/products/4/thumbnail.jpg"
...       ]
...     },
...     {
...       "id": 5,
...       "title": "Huawei P30",
...       "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
...       "price": 499,
...       "discountPercentage": 10.58,
...       "rating": 4.09,
...       "stock": 32,
...       "brand": "Huawei",
...       "category": "smartphones",
...       "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
...       "images": [
...         "https://i.dummyjson.com/data/products/5/1.jpg",
...         "https://i.dummyjson.com/data/products/5/2.jpg",
...         "https://i.dummyjson.com/data/products/5/3.jpg"
...       ]
...     },
...     {
...       "id": 6,
...       "title": "MacBook Pro",
...       "description": "MacBook Pro 2021 with mini-LED display may launch between September, November",
...       "price": 1749,
...       "discountPercentage": 11.02,
...       "rating": 4.57,
...       "stock": 83,
...       "brand": "Apple",
...       "category": "laptops",
...       "thumbnail": "https://i.dummyjson.com/data/products/6/thumbnail.png",
...       "images": [
...         "https://i.dummyjson.com/data/products/6/1.png",
...         "https://i.dummyjson.com/data/products/6/2.jpg",
...         "https://i.dummyjson.com/data/products/6/3.png",
...         "https://i.dummyjson.com/data/products/6/4.jpg"
...       ]
...     }]
... )
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId("640c972b10e1abbb4be945e2"),
    '1': ObjectId("640c972b10e1abbb4be945e3"),
    '2': ObjectId("640c972b10e1abbb4be945e4"),
    '3': ObjectId("640c972b10e1abbb4be945e5"),
    '4': ObjectId("640c972b10e1abbb4be945e6")
  }
}


ecommerce> db.products.insertMany([{ "id": 2, "title": "iPhone X", "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED tech
ecommerce> db.products.find()
[
  {
    _id: ObjectId("640c95a510e1abbb4be945e1"),
    id: 1,
    title: 'iPhone 9',
    description: 'An apple mobile which is nothing like apple',
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: 'Apple',
    category: 'smartphones',
    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    images: [
      'https://i.dummyjson.com/data/products/1/1.jpg',
      'https://i.dummyjson.com/data/products/1/2.jpg',
      'https://i.dummyjson.com/data/products/1/3.jpg',
      'https://i.dummyjson.com/data/products/1/4.jpg',
      'https://i.dummyjson.com/data/products/1/thumbnail.jpg'
    ]
  },
  {
    _id: ObjectId("640c972b10e1abbb4be945e2"),
    id: 2,
    title: 'iPhone X',
    description: 'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',
    price: 899,
    discountPercentage: 17.94,
    rating: 4.44,
    stock: 34,
    brand: 'Apple',
    category: 'smartphones',
    thumbnail: 'https://i.dummyjson.com/data/products/2/thumbnail.jpg',
    images: [
      'https://i.dummyjson.com/data/products/2/1.jpg',
      'https://i.dummyjson.com/data/products/2/2.jpg',
      'https://i.dummyjson.com/data/products/2/3.jpg',
      'https://i.dummyjson.com/data/products/2/thumbnail.jpg'
    ]
  },
  {
    _id: ObjectId("640c972b10e1abbb4be945e3"),
    id: 3,
    title: 'Samsung Universe 9',
    description: "Samsung's new variant which goes beyond Galaxy to the Universe",
    price: 1249,
    discountPercentage: 15.46,
    rating: 4.09,
    stock: 36,
    brand: 'Samsung',
    category: 'smartphones',
    thumbnail: 'https://i.dummyjson.com/data/products/3/thumbnail.jpg',
    images: [ 'https://i.dummyjson.com/data/products/3/1.jpg' ]
  },
  {
    _id: ObjectId("640c972b10e1abbb4be945e4"),
    id: 4,
    title: 'OPPOF19',
    description: 'OPPO F19 is officially announced on April 2021.',
    price: 280,
    discountPercentage: 17.91,
    rating: 4.3,
    stock: 123,
    brand: 'OPPO',
    category: 'smartphones',
    thumbnail: 'https://i.dummyjson.com/data/products/4/thumbnail.jpg',
    images: [
      'https://i.dummyjson.com/data/products/4/1.jpg',
      'https://i.dummyjson.com/data/products/4/2.jpg',
      'https://i.dummyjson.com/data/products/4/3.jpg',
      'https://i.dummyjson.com/data/products/4/4.jpg',
      'https://i.dummyjson.com/data/products/4/thumbnail.jpg'
    ]
  },
  {
    _id: ObjectId("640c972b10e1abbb4be945e5"),
    id: 5,
    title: 'Huawei P30',
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
  },
  {
    _id: ObjectId("640c972b10e1abbb4be945e6"),
    id: 6,
    title: 'MacBook Pro',
    description: 'MacBook Pro 2021 with mini-LED display may launch between September, November',
    price: 1749,
    discountPercentage: 11.02,
    rating: 4.57,
    stock: 83,
    brand: 'Apple',
    category: 'laptops',
    thumbnail: 'https://i.dummyjson.com/data/products/6/thumbnail.png',
    images: [
      'https://i.dummyjson.com/data/products/6/1.png',
      'https://i.dummyjson.com/data/products/6/2.jpg',
      'https://i.dummyjson.com/data/products/6/3.png',
      'https://i.dummyjson.com/data/products/6/4.jpg'
    ]
  }
]
```

</details>

##### find(), findOne(), .sort(), .limit(), countDocuments()

<details><summary>Example</summary>

```
ecommerce> db.products.find()

ecommerce> db.products.findOne({"id": 1})

ecommerce> db.products.findOne({title: 'iPhone 9'})

ecommerce> db.products.find({title: 'iPhone 9'})

ecommerce> db.products.find({title: {$eq:'OPPOF19'}})

ecommerce> db.products.find({title: {$gt:'OPPOF19'}})

ecommerce> db.products.find({rating: {$gt:4}})

ecommerce> db.products.find({rating: {$lt:4.5}})

ecommerce> db.products.find({rating: {$gt:4.5}, id:{$gt:1}})

ecommerce> db.products.find({$and:[{rating: {$gt:4.5}}, {id:{$gt:1}}]})

ecommerce> db.products.find({$or:[{rating: {$gt:4.5}}, {id:{$gt:1}}]})
```

```
ecommerce> db.products.find({$or:[{rating: {$gt:4.5}}, {id:{$gt:1}}]}).sort({"price":1})

ecommerce> db.products.find({$or:[{rating: {$gt:4.5}}, {id:{$gt:1}}]}).sort({"price":-1})

ecommerce> db.products.find({$or:[{rating: {$gt:4.5}}, {id:{$gt:1}}]}).sort({"price":1}).limit(2)

ecommerce> db.products.find().sort({"price":1}).limit(2)
```

```
ecommerce> db.products.countDocuments()

ecommerce> db.products.countDocuments({'price':{$gt:600}})
```

```
ecommerce> db.products.find({'price':{$gt:600}}, {'title':1})
[
  { _id: ObjectId("640c972b10e1abbb4be945e2"), title: 'iPhone X' },
  {
    _id: ObjectId("640c972b10e1abbb4be945e3"),
    title: 'Samsung Universe 9'
  },
  { _id: ObjectId("640c972b10e1abbb4be945e6"), title: 'MacBook Pro' }
]
```

```
ecommerce> db.products.find({'price':{$gt:600}}, {'title':1, 'price':1})

ecommerce> db.products.find({'price':{$gt:600}}, {'title':1, 'price':1, '_id':0})
```

</details>

##### updateOne(), updateMany(), replaceOne()

```
https://www.mongodb.com/docs/manual/crud/

https://www.mongodb.com/docs/manual/reference/method/db.collection.updateOne/#mongodb-method-db.collection.updateOne
```

<details><summary>Example</summary>

```
ecommerce> db.products.updateOne({'id':1}, {$set:{'price':999}})
ecommerce> db.products.findOne()

ecommerce> db.products.updateOne({'id':1}, {'price':1199})
MongoInvalidArgumentError: Update document requires atomic operators

ecommerce> db.products.updateOne({'id':1}, {$set:{'amount':999}})
ecommerce> db.products.findOne()

ecommerce> db.products.updateOne({'id':7}, {$set:{'price':999}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 0,
  modifiedCount: 0,
  upsertedCount: 0
}

ecommerce> db.products.updateOne({'id':7}, {$set:{'price':999}}, {'upsert':true})
{
  acknowledged: true,
  insertedId: ObjectId("640d3074706a05691b26dd2e"),
  matchedCount: 0,
  modifiedCount: 0,
  upsertedCount: 1
}
ecommerce> db.products.find()

ecommerce> db.products.updateMany({'id':{$gt:3}}, {$set:{'price':999}})

ecommerce> db.products.replaceOne({'id':3}, {'price':999})

ecommerce> db.products.find()
{ _id: ObjectId("640c972b10e1abbb4be945e3"), price: 999 }
```

</details>

##### deleteOne(), deleteMany()

<details><summary>Example</summary>

```
ecommerce> db.products.deleteOne({ 'id': 3 })
{ acknowledged: true, deletedCount: 0 }

ecommerce> db.products.deleteOne({ '_id': ObjectId('640c972b10e1abbb4be945e3') })
{ acknowledged: true, deletedCount: 1 }

ecommerce> db.products.deleteMany({ price: 999 })

```

</details>

---

#### Cloud MongoDB

<details><summary>At cloud MongoDB</summary>

1 Go to Organization
2 Create a New Project, It name is "EcommerceTest"
3 In The project go to "Database Access" --> "Add New Database User"

```
Password Authentication
solokope
zzzzzzzzzzz

Built-in Role : Atlas admin
```

4 In The project go to "Network Access" --> "Add IP Address" --> ALLOW ACCESS FROM ANYWHERE

5 In The project go to "Database" --> "Build a Database" --> "M0 FREE" --> Provider: AWS --> Create

```
Security Quickstart
Username : solokope
Password : zzzzzzzzzz // db password
```

6 In The project choose "Connect", Then choose "Connect with the MongoDB Shell", Next, Copy script

```
$ mongosh "mongodb+srv://cluster0.xwj54tv.mongodb.net/myFirstDatabase" --apiVersion 1 --username solokope
Enter password: ****************
Current Mongosh Log ID: 640d3d1b15753f68fce50bfc
Connecting to:          mongodb+srv://<credentials>@cluster0.xwj54tv.mongodb.net/myFirstDatabase?appName=mongosh+1.8.0
Using MongoDB:          5.0.15 (API Version 1)
Using Mongosh:          1.8.0

For mongosh info see: https://docs.mongodb.com/mongodb-shell/

Warning: Found ~/.mongorc.js, but not ~/.mongoshrc.js. ~/.mongorc.js will not be loaded.
  You may want to copy or rename ~/.mongorc.js to ~/.mongoshrc.js.
Atlas atlas-1xll6m-shard-0 [primary] myFirstDatabase>

$ mongosh "mongodb+srv://cluster0.xwj54tv.mongodb.net/ecommerceDatabase" --apiVersion 1 --username solokope
```

</details>

---

#### Set Environment

<details><summary>Try insertOne()</summary>

```
Atlas atlas-1xll6m-shard-0 [primary] ecommerceDatabase> show dbs

Atlas atlas-1xll6m-shard-0 [primary] ecommerceDatabase> db.products.insertOne({
...       "id": 1,
...       "title": "iPhone 9",
...       "description": "An apple mobile which is nothing like apple",
...       "price": 549,
...       "discountPercentage": 12.96,
...       "rating": 4.69,
...       "stock": 94,
...       "brand": "Apple",
...       "category": "smartphones",
...       "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
...       "images": [
...         "https://i.dummyjson.com/data/products/1/1.jpg",
...         "https://i.dummyjson.com/data/products/1/2.jpg",
...         "https://i.dummyjson.com/data/products/1/3.jpg",
...         "https://i.dummyjson.com/data/products/1/4.jpg",
...         "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
...       ]
...     }
... )
{
  acknowledged: true,
  insertedId: ObjectId("640d3f5902796d3c9ac6a1e1")
}
Atlas atlas-1xll6m-shard-0 [primary] ecommerceDatabase> db.products.find()

```

</details>

<details><summary>Try insertMany()</summary>

```
Atlas atlas-1xll6m-shard-0 [primary] ecommerceDatabase> db.products.insertMany([{
...       "id": 2,
...       "title": "iPhone X",
...       "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
...       "price": 899,
...       "discountPercentage": 17.94,
...       "rating": 4.44,
...       "stock": 34,
...       "brand": "Apple",
...       "category": "smartphones",
...       "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
...       "images": [
...         "https://i.dummyjson.com/data/products/2/1.jpg",
...         "https://i.dummyjson.com/data/products/2/2.jpg",
...         "https://i.dummyjson.com/data/products/2/3.jpg",
...         "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
...       ]
...     },
...     {
...       "id": 3,
...       "title": "Samsung Universe 9",
...       "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
...       "price": 1249,
...       "discountPercentage": 15.46,
...       "rating": 4.09,
...       "stock": 36,
...       "brand": "Samsung",
...       "category": "smartphones",
...       "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
...       "images": ["https://i.dummyjson.com/data/products/3/1.jpg"]
...     },
...     {
...       "id": 4,
...       "title": "OPPOF19",
...       "description": "OPPO F19 is officially announced on April 2021.",
...       "price": 280,
...       "discountPercentage": 17.91,
...       "rating": 4.3,
...       "stock": 123,
...       "brand": "OPPO",
...       "category": "smartphones",
...       "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
...       "images": [
...         "https://i.dummyjson.com/data/products/4/1.jpg",
...         "https://i.dummyjson.com/data/products/4/2.jpg",
...         "https://i.dummyjson.com/data/products/4/3.jpg",
...         "https://i.dummyjson.com/data/products/4/4.jpg",
...         "https://i.dummyjson.com/data/products/4/thumbnail.jpg"
...       ]
...     },
...     {
...       "id": 5,
...       "title": "Huawei P30",
...       "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
...       "price": 499,
...       "discountPercentage": 10.58,
...       "rating": 4.09,
...       "stock": 32,
...       "brand": "Huawei",
...       "category": "smartphones",
...       "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
...       "images": [
...         "https://i.dummyjson.com/data/products/5/1.jpg",
...         "https://i.dummyjson.com/data/products/5/2.jpg",
...         "https://i.dummyjson.com/data/products/5/3.jpg"
...       ]
...     },
...     {
...       "id": 6,
...       "title": "MacBook Pro",
...       "description": "MacBook Pro 2021 with mini-LED display may launch between September, November",
...       "price": 1749,
...       "discountPercentage": 11.02,
...       "rating": 4.57,
...       "stock": 83,
...       "brand": "Apple",
...       "category": "laptops",
...       "thumbnail": "https://i.dummyjson.com/data/products/6/thumbnail.png",
...       "images": [
...         "https://i.dummyjson.com/data/products/6/1.png",
...         "https://i.dummyjson.com/data/products/6/2.jpg",
...         "https://i.dummyjson.com/data/products/6/3.png",
...         "https://i.dummyjson.com/data/products/6/4.jpg"
...       ]
...     }
... ])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId("640d40e502796d3c9ac6a1e2"),
    '1': ObjectId("640d40e502796d3c9ac6a1e3"),
    '2': ObjectId("640d40e502796d3c9ac6a1e4"),
    '3': ObjectId("640d40e502796d3c9ac6a1e5"),
    '4': ObjectId("640d40e502796d3c9ac6a1e6")
  }
}
```

</details>

---

#### Cloud MongoDB with MongoBD Compass

<details><summary>Connect Using MongoDB Compass</summary>

1 In The project choose "Connect", Then choose "Connect Using MongoDB Compass", Next, Copy script

2 Ad MongoDB Compass --> "New Connection"

```
URI
mongodb+srv://solokope:<password>@cluster0.xwj54tv.mongodb.net/test

```

</details>

---

#### ENV, dotenv

```
$ node

> process.env

> process.env.DB_PASSWORD = 'zzzzzzzzzz' // password for Authentication
```

<details><summary>index.js</summary>

```
const express = require("express");
const morgan = require("morgan");
const server = express();
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");

console.log("env", process.env.DB_PASSWORD); // Notice this

//bodyParser
server.use(express.json());
server.use(morgan("default"));
server.use(express.static("public"));
server.use("/products", productRouter.router);
server.use("/user", userRouter.router);

// MVC

server.listen(8080, () => {
console.log("Server started");
});
```

</details>

```

$ DB_PASSWORD=zzzzzzzzzzz node index.js
env zzzzzzzzzzzzz
```

##### Install dotenv

```
$ npm install dotenv
```

Create file name ".env" in the project directory

<details><summary>.env</summary>

```
DB_PASSWORD = 'zzzzzzzzzz'
```

</details>

<details><summary>index.js</summary>

```
require("dotenv").config(); // Notice this
const express = require("express");
const morgan = require("morgan");
const server = express();
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");

console.log("env", process.env.DB_PASSWORD);

//bodyParser
server.use(express.json());
server.use(morgan("default"));
server.use(express.static("public"));
server.use("/products", productRouter.router);
server.use("/user", userRouter.router);

// MVC

server.listen(8080, () => {
  console.log("Server started");
});
```

</details>

```
$ node index.js
```

---

<details><summary>.env</summary>

```
DB_PASSWORD = 'zzzzzzzzzz'
PUBLIC_DIR=zzzzz
```

</details>

<details><summary>index.js</summary>

```
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const server = express();
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");

console.log("env", process.env.DB_PASSWORD);

//bodyParser
server.use(express.json());
server.use(morgan("default"));
server.use(express.static(process.env.PUBLIC_DIR)); // Notice this
server.use("/products", productRouter.router);
server.use("/user", userRouter.router);

// MVC

server.listen(8080, () => {
  console.log("Server started");
});

```

</details>

---

<details><summary>.env</summary>

```
DB_PASSWORD = 'zzzzzzzzzz'
PUBLIC_DIR=zzzzz
PORT=1234
```

</details>

<details><summary>index.js</summary>

```
server.listen(process.env.PORT, () => {
  console.log("Server started");
});

```

</details>

---
