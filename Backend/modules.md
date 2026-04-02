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

[<-- back to file permission](./file_permission.md)

[<-- back to main](./README.md)