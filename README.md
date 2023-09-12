# E-Commerce API

This is an e-commerce API built using Node.js, Express.js, and MongoDB. It provides endpoints to manage products, including adding, updating, listing, and deleting products.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

Before running the project, ensure you have the following prerequisites installed:

- Node.js: [Download Node.js](https://nodejs.org/)
- MongoDB: [Download MongoDB](https://www.mongodb.com/try/download/community)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/e-commerce-api.git
   ```
2. Navigate to the project directory:
 ```bash
cd e-commerce-api
   ```
3. Install dependencies:
 ```bash
npm install
   ```
4. Start the server:
 ```bash
npm Start
   ```
By default, the server will run on port `http://127.0.0.1:8000` You can configure the port and other settings


## Usage
To use this API, you can interact with it using HTTP requests, such as POST, GET, PUT, and DELETE. You can use tools like Postman or curl for testing and integrating the API into your application.


## API Endpoints

### Products
- GET /api/products/getProducts  : Get a list of all products.
- POST /api/products: Add a new product.
```bash
POST /products/create

{
    "productID" : "P1"
    "name": "Product Name",
    "quantity": 100
}

```
- PUT /api/products/:id/update_quantity/?number=10:  
    Update the quantity of a product by ID.
    - Request Parameters:      
       id: productId
    - Query Parameter:                        
      number: New quantity
- DELETE /api/products/:id:  
     Delete a product by productId.
    
   
## Database Schema

The MongoDB database for this project has the following collections:

- product.js : Stores product information
## Dependencies

The main dependencies used in this project are:

- Express.js: Web application framework.
- MongoDB: Database for storing data.
- Mongoose: MongoDB object modeling for Node.js.

For a complete list of dependencies, please refer to the package.json file.