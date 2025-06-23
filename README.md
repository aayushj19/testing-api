### 📚 Book Management API
A simple RESTful API server built using Node.js, Express, and MongoDB that allows performing CRUD operations on books.

✅ API Endpoints
Method	Endpoint	Description
GET	/books	Get all books
GET	/books/:id	Get a single book
POST	/books	Create a new book
PUT	/books/:id	Update an existing book
DELETE	/books/:id	Delete a book

🛠️ Tech Stack
- Node.js
- Express.js
- MongoDB with Mongoose
- Jest – Unit Testing
- Supertest – API & Integration Testing
- mongodb-memory-server – In-memory DB for tests

📦 How to Run the App Locally
# Clone the repository
```bash
git clone https:https://github.com/aayushj19/testing-api.git
cd your-testing-api

# Install dependencies
npm install

# Create .env file
echo "MONGO_URI=your_mongodb_uri" > .env

# Start the development server
npm start
```
🧪 How to Run Tests
```bash
# Run unit + integration + coverage report
npm test
```
To generate coverage:
```bash
npm test -- --coverage
```
✅ Testing Summary
## ✅ Testing Summary

| Requirement                         | Status  | Details                                                                 |
|-------------------------------------|----------------|-------------------------------------------------------------------------|
| ✅ Unit Tests                       | ✅              | - Written for controller logic (e.g., `getBooks`)                       |
|                                     |                | - Used mocked Mongoose model                                           |
| ✅ Integration Tests                 | ✅              | - Used `mongodb-memory-server`                                         |
|                                     |                | - Verified CRUD DB interactions                                        |
| ✅ API Tests                         | ✅              | - Used `Supertest` to test `/books` endpoints                          |
|                                     |                | - Tested GET, POST, PUT, DELETE requests                               |
| ✅ Code Coverage ≥ 70%              | ✅              | - Generated using `jest --coverage`                                    |


🧪 Testing Tools Used
-Jest – For unit/integration testing
-Supertest – For HTTP API endpoint testing
-mongodb-memory-server – For isolated MongoDB during tests

📊 Test Coverage Report
![image](https://github.com/user-attachments/assets/d6b1a18b-fa07-421b-8ad6-bfaee1b30889)

