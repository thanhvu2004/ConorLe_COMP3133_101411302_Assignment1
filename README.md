# Employee Management System

This is a backend application for managing employee records using Node.js, Express, GraphQL, and MongoDB.

## Features

- Create, read, update, and delete employee records.
- GraphQL API for flexible data querying.
- MongoDB for data storage.

## Project Structure

```
employee-management-system
├── src
│   ├── app.js                  # Entry point of the application
│   ├── controllers             # Contains controllers for handling requests
│   │   └── employeeController.js
│   ├── models                  # Contains Mongoose models
│   │   └── employeeModel.js
│   ├── resolvers               # GraphQL resolvers for queries and mutations
│   │   └── index.js
│   ├── schemas                 # GraphQL schemas
│   │   └── employeeSchema.js
│   ├── routes                  # RESTful routes for employee operations
│   │   └── employeeRoutes.js
│   └── config                  # Configuration files
│       └── db.js
├── package.json                # NPM configuration file
├── .env                        # Environment variables
├── .gitignore                  # Files to ignore in Git
└── README.md                   # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd employee-management-system
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Set up your environment variables in the `.env` file.

## Usage

1. Start the application:
   ```
   npm start
   ```
2. Access the GraphQL API at `http://localhost:4000/graphql`.

## Contributing

Feel free to submit issues and pull requests for improvements or bug fixes.