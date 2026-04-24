[<-- back to Topics](../README.md)

[<-- about Node.js](./about_nodejs.md)

[Why We Need Node.js -->](./why_we_need_nodejs.md)

# First Node.js Code

```javascript
import fs from "node:fs";

fs.writeFileSync("./text.txt","Testing Data ");
console.log("File Created with data")

const data = fs.readFileSync("./text.txt");
console.log("Reading file's data: ")
console.log(`Data: ${data}`)

fs.appendFileSync("./text.txt", "New Data Added");

const newData = fs.readFileSync("./text.txt");
console.log("Reading file's data again with new content: ")
console.log(`Data: ${newData}`)

fs.unlinkSync("./text.txt");
console.log("File Deleted")
```

[Why We Need Node.js -->](./why_we_need_nodejs.md)

[<-- about Node.js](./about_nodejs.md)

[<-- back to Topics](../README.md)