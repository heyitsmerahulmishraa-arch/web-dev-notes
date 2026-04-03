[<-- back to main](./README.md)

[<-- back to file permission](./file_permission.md)

## Common JS module

```js
module.exports = product; // <---return value of require function

const product = require("./products"); // <---require is function
```

```js
module.exports = {sum, product}; // <---return value of require function

const {sum, product} = require("./math"); // <---require is function
```

## Module variables

console.log(module);

- `--dirname`
- `--filename`
- `exports = {}`
- `module = module {...}`
- `require`
- `this = Object`

## Module wrapper function

```js
(function (exports, require, module, __filename, __dirname){
    // Code goes here
})(exports, require, module, __filename, __dirname);
```

## Custom require function

```js
function loadModule(path){
    const fs = require("fs");
    const fileContent = fs.readFileSync(path).toString();
    return (function (send){
        eval (fileContent);
        return send;
    })({});
}
```

## sum.js
```js
send.sum = (...nums) => nums.reduce((c,a) => a + c)
```

## app.js
```js
const {sum} = loadModule("./sum.js");
console.log(sum(4,3,2,1,1));
```

## ES6 Module
```js
export const num = 5; // named export

import {num} from "./math.js"; // named import
```

```js
export default num; //default export
import num form "./math.js"; //default import
import num, {a} from "./math.js";
```

## dirname & filename in es6 module

```js
const {filename, dirname} = import.meta;
```

## difference between common js and es6 module

| Common JS | ES6 Modules |
|-----------|-------------|
|synchronous file loading|asynchronous file loading|
|file extension optional|file extension mandatory|
|if we give full file path then we can load any file using cjs|we can not load any file only js and mjs files are allowed|
|it is a convention to add cjs in the file extension|it is a convention to add mjs in the file extension|
|it is optional to set "type":"commonjs" in package.json because commonjs is the default module system of nodejs|we have to set "type":"module" in package.json|
|in cjs this keyword points to module.exports by default|in mjs this keyword is undefined|
|cjs imports are not hoisted|mjs imports are hoisted|
|top level is not allowed|top level is allowed|
|only one value can be exported|multiple value can be exported|
|strict mode is not enabled by default|strict mode is enabled by default|

## difference type of modules

### native module or core module or built-in module
```js
import fs from "node:fs";
```

### user module
```js
import {num} from "./math.js";
```

### npm module
```js
import axios from "axios";
```

[<-- back to file permission](./file_permission.md)

[<-- back to main](./README.md)