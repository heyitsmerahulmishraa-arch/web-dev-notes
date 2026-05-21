const fs = require("fs");

const textContent = fs.readFileSync("./Backend/01_Introduction_to_backend_and_nodejs/Running_our_first_code/text.txt");

console.log(textContent.toString())