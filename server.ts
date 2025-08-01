import { Request, Response } from "express";
import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import connectDB from "./config/db.config";
import todoRoutes from "./routes/todo.routes";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(bodyParser.json());
app.use(cors());

app.use("/api/v1/todos", todoRoutes); // Routes after middleware: made a mistake here, put routes before middleware. wondered why the create route was throwing 500 FIXME: fix this

app.get("/", (req: Request, res: Response): void => {
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

app.get("/api", (req: Request, res: Response): void => {
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

app.get("/", (req: Request, res: Response): void => {
  res.send("Welcome to the Todo API");
});
