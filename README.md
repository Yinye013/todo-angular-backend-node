# Todo Backend API

A RESTful API for managing todos built with Node.js, Express, TypeScript, and MongoDB.

## Features

- ✅ Create, read, update, and delete todos
- ✅ MongoDB integration with Mongoose
- ✅ TypeScript for type safety
- ✅ RESTful API design
- ✅ Input validation and error handling
- ✅ CORS enabled
- ✅ API versioning (v1)

## Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **TypeScript** - Type-safe JavaScript
- **MongoDB** - Database
- **Mongoose** - MongoDB object modeling
- **Nodemon** - Development auto-restart

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

## Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd todo-backend-node
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create environment file**

   ```bash
   cp .env.example .env
   ```

4. **Configure environment variables**

   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/todo-db
   NODE_ENV=development
   ```

5. **Start MongoDB**

   ```bash
   # If using local MongoDB
   mongod
   ```

6. **Run the application**

   ```bash
   # Development mode
   npm run dev

   # Production mode
   npm start
   ```

## API Endpoints

Base URL: `http://localhost:3000/api/v1`

### Todos

| Method | Endpoint     | Description             |
| ------ | ------------ | ----------------------- |
| GET    | `/todos`     | Get all todos           |
| GET    | `/todos/:id` | Get a specific todo     |
| POST   | `/todos`     | Create a new todo       |
| PUT    | `/todos/:id` | Update a todo           |
| PATCH  | `/todos/:id` | Partially update a todo |
| DELETE | `/todos/:id` | Delete a todo           |

### API Information

| Method | Endpoint | Description             |
| ------ | -------- | ----------------------- |
| GET    | `/`      | API welcome message     |
| GET    | `/api`   | API version information |

## Request/Response Examples

### Create a Todo

```http
POST /api/v1/todos
Content-Type: application/json

{
  "text": "Learn TypeScript"
}
```

**Response:**

```json
{
  "success": true,
  "message": "Todo created successfully",
  "data": {
    "_id": "64f8b1c8e1a2b3c4d5e6f7g8",
    "text": "Learn TypeScript",
    "completed": false,
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T10:30:00.000Z"
  }
}
```

### Get All Todos

```http
GET /api/v1/todos
```

**Response:**

```json
{
  "success": true,
  "message": "Todos fetched successfully",
  "count": 2,
  "data": [
    {
      "_id": "64f8b1c8e1a2b3c4d5e6f7g8",
      "text": "Learn TypeScript",
      "completed": false,
      "createdAt": "2024-01-15T10:30:00.000Z",
      "updatedAt": "2024-01-15T10:30:00.000Z"
    }
  ]
}
```

### Update a Todo

```http
PUT /api/v1/todos/64f8b1c8e1a2b3c4d5e6f7g8
Content-Type: application/json

{
  "text": "Learn TypeScript and Express",
  "completed": true
}
```

### Delete a Todo

```http
DELETE /api/v1/todos/64f8b1c8e1a2b3c4d5e6f7g8
```

## Error Responses

The API returns appropriate HTTP status codes and error messages:

```json
{
  "success": false,
  "message": "Error description"
}
```

### Common Status Codes

- `200` - Success
- `201` - Created
- `400` - Bad Request (validation errors)
- `404` - Not Found
- `500` - Internal Server Error

## Project Structure

```
todo-backend-node/
├── config/
│   └── db.config.ts         # Database configuration
├── controllers/
│   └── todo.controller.ts   # Todo business logic
├── models/
│   └── todo.model.ts        # Todo schema definition
├── routes/
│   └── todo.routes.ts       # API routes
├── .env                     # Environment variables
├── .gitignore              # Git ignore rules
├── nodemon.json            # Nodemon configuration
├── package.json            # Project dependencies
├── server.ts               # Application entry point
├── tsconfig.json           # TypeScript configuration
└── README.md               # Project documentation
```

## Development

### Available Scripts

```bash
# Start development server with auto-reload
npm run dev

# Build TypeScript to JavaScript
npm run build

# Start production server
npm start

# Run tests (not implemented yet)
npm test
```

### Code Style

This project uses TypeScript with strict type checking enabled. Make sure to:

- Use proper TypeScript types
- Handle errors appropriately
- Follow RESTful API conventions
- Validate input data

## Environment Variables

| Variable      | Description               | Default                           |
| ------------- | ------------------------- | --------------------------------- |
| `PORT`        | Server port               | 3000                              |
| `MONGODB_URI` | MongoDB connection string | mongodb://localhost:27017/todo-db |
| `NODE_ENV`    | Environment mode          | development                       |

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Todo

- [ ] Add user authentication
- [ ] Add request rate limiting
- [ ] Add API documentation with Swagger
- [ ] Add unit tests
- [ ] Add Docker support
- [ ] Add logging middleware
- [ ] Add data pagination
- [ ] Add todo categories/tags
