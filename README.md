# Basic Node.js Server

## Project Overview
This project demonstrates a simple Node.js server that handles HTTP requests and responses using the built-in `http` module. The server can process both GET and POST requests, handle basic routing, and respond with appropriate status codes and messages.

### Task Objective
- Build a basic HTTP server in Node.js.
- Handle different HTTP methods (GET, POST).
- Respond with appropriate status codes and messages.
- Manage errors for invalid routes and malformed JSON input.

## Requirements

1. **Set up Node.js Environment**
   - Ensure Node.js is installed on your machine.
   - Initialize the project using `npm init` to manage dependencies and scripts.

2. **Create HTTP Server**
   - Use Node.js' built-in `http` module to create the server.
   - Handle incoming requests and responses for different routes.

3. **Define Basic Routes**
   - **Root Route (`/`)**: Responds with a welcome message using the GET method.
   - **Submit Route (`/submit`)**: Handles data submission via POST requests.
   - Handle other routes by responding with a 404 status code and a "Route not found" message.

4. **Start the Server**
   - The server listens on port `3000` and responds to incoming requests.

5. **Test the Server**
   - Use a browser, Postman, or curl to test GET and POST requests.

6. **Handle Errors**
   - Manage invalid routes by responding with a 404 status code.
   - Implement error handling for invalid JSON input during POST requests.

## Features

### Routes

- **GET `/`**: Returns a welcome message.
- **POST `/submit`**: Accepts a JSON payload and responds with the received data. Handles invalid JSON inputs with an error response.
- **404 for other routes**: Returns a 404 error with a message for unhandled routes.

### Error Handling

- **404 Not Found**: Returns a 404 status code for unhandled routes.
- **400 Bad Request**: Returns a 400 status code for invalid JSON inputs during POST requests.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
