import { Request, Response } from "express";
import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import connectDB from "./config/db.config";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
console.log(PORT);

connectDB();

app.use(bodyParser.json());
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req: Request, res: Response): void => {
  res.send("Welcome to the Todo API");
});
