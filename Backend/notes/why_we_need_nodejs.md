[<-- back to Topics](../README.md)

[<-- First Node.js Code](./first_nodejs_code.md)

# Why do we need Node.js & how is it different from JS in browser?

Node.js extends the capabilities of JavaScript beyond what is possible when running JavaScript solely in a browser environment. Here's what Node.js can do that normal JavaScript cannot, which makes it suitable for building backends.

## Access to File System

- **Node.js**: Provides APIs to interact with the file system, allowing you to read, write, delete and manipulate files and directories on the server.

- **Normal JavaScript**: In a browser, JavaScript is sandboxed for security for security reasons, meaning it cannot directly access the file system of the client device.

## Networking Capabilities

- **Node.js**: Enables the creation of web servers, handles network requests, and supports low-level networking features like creating TCP/UDP servers, handling sockets, etc.

- **Normal JavaScript**: In the browser, JavaScript can make HTTP requests (via fetch or XMLHttpRequest), but it cannot create servers or handle low-level networking tasks.

## Process Management

- **Node.js**: Can spawn child processes, manage multiple threads, and handle system-level tasks like interacting with operating system processes.

- **Normal JavaScript**: In the browser, JavaScript is limited to running in a single thread and cannot spawn processes or directly interact with the operating system.

## Interacting with Operating System

- **Node.js**: Can interact with the operating system to perform tasks like reading environment variables, interacting with system processes, scheduling tasks, etc.

- **Normal JavaScript**: In the browser, JavaScript is sandboxed and cannot interact with the operating system directly, limiting its capabilities to browser-realated tasks.

**And more...**


**Open Chrome using Node.js**

```javascript
import {exec} from "child_process"

exec("start chrome")
```

**Starting a server using Node.js**

```javascript
import http from "http"

const server = http.createServer((req, res) => {
    res.end("Hello World");
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
})
```

[<-- First Node.js Code](./first_nodejs_code.md)

[<-- back to Topics](../README.md)