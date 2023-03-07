## MERN stack in Hindi

### Modules System, FS, REPL, NPM, Package.json

#### Modules System

index.js

```
function diff(a, b) {
  return a - b;
}
```

---

lib.js

```
const sum = (a, b) => {
  return a + b;
};

const diff = (a, b) => {
  return a - b;
};

export { sum, diff };
```

index.js

```
import { sum, diff } from ".lib.js";

console.log(sum(4, 5), diff(3, 6));
```

Result after run : "(node:19389) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension."

\"Solution\"
Create file name : "package.json"
package.json

```
{
  "type": "module"
}
```

---

#### FS

File System

```
https://nodejs.org/dist/latest-v18.x/docs/api/fs.html
```

---

Create file name : demo.txt

---

index.js

```
const fs = require("fs");

const txt = fs.readFileSync("./01_/demo.txt");

console.log(txt);
```

Result after run : "ReferenceError: require is not defined in ES module scope, you can use import instead
This file is being treated as an ES module because it has a '.js' file extension and '/home/solokope/Desktop/hindiMERN/package.json' contains "type": "module". To treat it as a CommonJS script, rename it to use the '.cjs' file extension."

\"Solution\"
Edit file name : "package.json"
package.json

```
{
  "type": "commonjs"
}
```

Result

```
<Buffer 53 6b 69 70 20 74 6f 20 6d 61 69 6e 20 63 6f 6e 74 65 6e 74 0a 47 65 74 20 53 74 61 72 74 65 64 0a 54 53 20 66 6f 72 20 74 68 65 20 4e 65 77 20 50 72 ... 13616 more bytes>
```

---

utf-8
index.js

```
const fs = require("fs");

const txt = fs.readFileSync("./01_/demo.txt", "utf-8");

console.log(txt);
```

---

index.js

```
const fs = require("fs");

// const txt = fs.readFileSync("./01_/demo.txt", "utf-8");
fs.readFile("./01_/demo.txt", "utf-8", (err, txt) => {
  console.log(txt);
});
```

---

index.js

```
const fs = require("fs");

const t1 = performance.now();

// const txt = fs.readFileSync("./01_/demo.txt", "utf-8");
fs.readFile("./01_/demo.txt", "utf-8", (err, txt) => {
  console.log(txt);
});

const t2 = performance.now();

console.log(t2 - t1);

//0.36363899894058704
```

```
const fs = require("fs");

const t1 = performance.now();

const txt = fs.readFileSync("./01_/demo.txt", "utf-8");

// fs.readFile("./01_/demo.txt", "utf-8", (err, txt) => {
//   console.log(txt);
// });

console.log(txt);

const t2 = performance.now();

console.log(t2 - t1);

//2.0592769999057055
```

---

#### NPM

```
$ npm init
package name: (hindimern) node-expample
version: (1.0.0)
description: a example of node
entry point: (index.js)
test command:
git repository:
keywords:
author: kittisaker
license: (ISC)
```

---

```
$ npm install express
```

Notice at file name "package.json"

```
"dependencies": {
    "express": "^4.18.2"
}
```

index.js

```
const express = require("express");

console.log("hello");

const server = express();
server.listen(8080);
```

---

```
$ npm install nodemon --save-dev
```

Notice at file name "package.json"

```
"devDependencies": {
    "nodemon": "^2.0.21"
}
```

Edit at file name "package.json"

```
"scripts": {
"start" : "node index.js",
"dev" : "nodemon index.js",
"test": "echo \"Error: no test specified\" && exit 1"
}
```

```
$ npm run start
```

---

##### Down package for express

Edit at file name "package.json"

```
"dependencies": {
"express": "^4.18.0"
}
```

```
$ npm outdated
$
```

Delete folder name "node_modules"

```
$ npm run start
Error: Cannot find module 'express'
```

```
$ npm install
```

```
$ npm run start
or
$ npm run dev
// It's work.
```

```
$ npm outdated
Package  Current  Wanted  Latest  Location  Depended by
express  MISSING  4.18.2  4.18.2  -         hindiMERN
```

---

Notice at file name "package-lock.json" ---

```
"node_modules/express": {
      "version": "4.18.2",
    ...
```

Edit at file name "package.json"

```
"dependencies": {
    "express": "4.18.0"
  }
```

```
$ npm install
```

```
$ npm outdated
Package  Current  Wanted  Latest  Location              Depended by
express   4.18.0  4.18.0  4.18.2  node_modules/express  hindiMERN
```

Update the express

```
$ npm update
```

Notice at file name "package-lock.json" ---

```
"node_modules/express": {
      "version": "4.18.0",
      ...
```

##### UP package for express

Edit at file name "package.json"

```
"dependencies": {
    "express": "^4.18.0"
  }
```

```
$ npm install
```

```
$ npm outdated
Package  Current  Wanted  Latest  Location              Depended by
express   4.18.0  4.18.0  4.18.2  node_modules/express  hindiMERN
```

```
$ npm update
```

Notice at file name "package-lock.json" ---

```
"node_modules/express": {
      "version": "4.18.2",
      ...
```

---

Uninstall package

```
$ npm uninstall express
$ npm uninstall nodemon
```

Install package

```
$ npm i express
$ npm i nodemon --save-dev
```

---

Create file name ".gitignore"

```
node_modules
```

---
