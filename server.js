const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./config/db.config");
const todoRoutes = require("./routes/todo.routes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(bodyParser.json());
app.use(cors());

app.use("/api/v1/todos", todoRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the Todo API",
    apiVersions: {
      v1: "/api/v1/todos",
    },
    endpoints: {
      todos: "/api/v1/todos",
    },
  });
});

app.get("/api", (req, res) => {
  res.json({
    message: "Todo API",
    availableVersions: ["v1"],
    currentVersion: "v1",
    endpoints: {
      v1: {
        todos: "/api/v1/todos",
      },
    },
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
