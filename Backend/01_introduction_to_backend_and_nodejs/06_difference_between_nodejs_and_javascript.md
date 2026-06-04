## Why do we need node.js and how is it different from javascript in browser?
We need Node.js because it allows JavaScript to perform server-side tasks that browsers cannot, such as accessing the file system, managing databases, and creating web servers. While both run JavaScript, they operate in completely different environments with unique capabilities and security restrictions.

## Why we need node.js
- **Server-Side Execution**:It lets you run JavaScript on a computer or server instead of just inside a web browser.

- **System Access**:Node.js can read and write files, handle network requests directly, and interact with the operating system—all of which are blocked in browsers for security.

- **High Performance**:It uses an asynchronous, non-blocking I/O model, making it extremely efficient for real-time applications like chat apps and streaming services.

- **Unified Language**:It allows developers to use JavaScript for both the frontend and backend, simplifying the development process.

## Key Differences:Node.js vs Browser
|Feature|Browser JavaScript|Node.js|
|**Purpose**|Frontend/UI Interaction|Backend/Server Logic|
|**Global Object**|`window`or`document`|`global`or`process`|
|**File Access**|No (Sandboxed for security)|Yes (Full access to local files)|
|**APIs**|DOM, Fetch, Geolocation|`fs`,`http`,`path`,`os`|
|**Environment Control**|Dependent on user's browser|Fixed (Developer picks the version)|
|**Module System**|ES Modules (`import`/`export`)|CommonJS(`require`)& ES Modules|

## Core Concept: The Ecosystem shift
In a browser, your code is primarily about the DOM (Document Object Model)—changing colors, handling clicks, and showing popups. In Node.js, there is no screen or DOM. Your code is about data processing, communicating with databases, and serving information to clients.