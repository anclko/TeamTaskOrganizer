# Fullstack JavaScript Application

This project is a fullstack JavaScript application designed for educational and development purposes. It uses Node.js and Express for the backend, and React for the frontend. The application demonstrates modern fullstack development practices, including RESTful API integration and reactive user interfaces.

## Features

- **Node.js and Express Backend**: Handles API requests and serves information regarding project assignments.
- **React Frontend**: Provides an interactive user interface.
- **Concurrent Execution**: Uses Concurrently to run both backend and frontend services in development mode.

## Prerequisites

Before running this project, you will need the following installed on your system:
- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://npmjs.com/) (comes with Node.js)
- [MongoDB](https://www.mongodb.com/) (local or remote instance)

## Installation

1. Clone the repository to your local machine:

```bash
git clone https://github.com/anclko/Lab-2-Fullstack-Development.git
```

2. Install dependencies for both server and client:

```bash
# Install dependencies
npm run install-all
```

## Running the Project

To start both the backend server and the frontend client concurrently in development mode, run:

```bash
npm run start
```

This script executes the following tasks:
- **Server**: Runs inside the server directory using `nodemon` for reloading on code changes. This will run on:

```bash
    http://localhost:3000/
```

- **Client**: Runs in the client directory with a development server, reloading for frontend development. This will run on:

```bash
    http://localhost:5173/
```

### Running Server and Client Individually

To run the server independently:

```bash
npm run server
```

To run the client in development mode:

```bash
npm run dev
```

## Building for Production

To build the frontend for production deployment:

```bash
npm run build
```

This will compile the React application to static files located in the `client/build` directory.

## About the project

At the moment, the project simply displays the recent 5 entries concerning project assignments. GET method is implememented, POST is implemented without any interactive way of adding.
Should you want to add project assignments, you have to use either Postman or Thunderclient and format your entry this way:

Change the method to POST and enter the url:

```bash
    http://localhost:3000/api/project_assignments
```

Continue by adding the following information as JSON Content:

```bash
{
    #as JSON Content
    "start_date": #date in following format: "2024-04-25T00:00:00.000Z",
    "employee_id": #employee_id here (range: 1 to 10)
    "project_code": #project_code here (range: 113 to 120)
}
```

Click "Send" and the result should appear within 10 seconds on local

## License

This project is licensed under the terms of the ISC license.

## Authors

- Anne-Claire Koch
