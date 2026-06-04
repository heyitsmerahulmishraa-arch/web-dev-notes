## What is Backend & Client Server Architecture?
**Client-server architecture is a networking model where a centralized server provides resources or services to multiple clients**. The backend refers specifically to the server-side part of this system, encompassing the logic, databases, and processes that run "behind the scenes" to fulfill those client requests.

## The Client-Server Model (Request-Response)
This architecture operates on a **request-response protocol**. Think of it like a restaurant:

- **The Client (YOU)**:The device or application (like a web browser or mobile app) that initiates a request, such as clicking a link or logging in.

- **The Server (The Kitchen)**:A powerful machine or software that waits for requests, processes them, and sends back the required data (like an HTML page or a JSON response).

- **The Network (The Waiter)**:The communication channel, typically the Internet, that carries the request to the server and the response back to the client.

## What is the Backend?
The backend (or server-side) is the part of the system that the user never interacts with directly. It is responsible for:

- **Application Logic**:The core code that decides how to process data (e.g., checking if a password is correct).

- **Database Management**:Storing and retrieving information, such as user profiles or product listings, using systems like MySQL or PostgreSQL.

- **Security & Authentication**:Ensuring only authorized clients can access specific data.

## Summary Table: Client vs Server
|Feature|Client (Frontend)|Server (Backend)|
|-------|-----------------|----------------|
|**Role**|Requests services/data|Provides services/data|
|**Primary Goal**|User interaction & display|Processing,storage & security|
|**Example**|Google Chrome,Instagram app|Web servers,database servers|
|**Visibility**|What the user sees|"Behind the scenes" operations|

## Common Architecture Types
- **2-Tier**:The client connects directly to the server.

- **3-Tier**:Adds a middle "Application" layer between the user interface and the database for better security and scalability.

![client-server architecture](https://miro.medium.com/v2/0*aIXS3CxF17KrIgts.png)

![3-Tier architecture](https://media.geeksforgeeks.org/wp-content/uploads/20240907155153/3.png)