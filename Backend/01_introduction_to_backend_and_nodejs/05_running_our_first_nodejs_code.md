## Running our first node.js code

- create text.txt file

```js
const fs = require("fs");
const textContent = fs.readFileSync("./text.txt"); // it gives buffer
console.log(textContent.toString()); // its convert buffer to string

// hex values show in buffer
```