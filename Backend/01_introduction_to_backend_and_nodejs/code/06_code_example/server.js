const http = require("http");

// http.createServer((req,res) => {
//     res.end("Hello World");
// }).listen(3000);

// console.log("Server is running on port 3000");

// Better version

const server = http.createServer((req,res) => {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Hello World 1");
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
})