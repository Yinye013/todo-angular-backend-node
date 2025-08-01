import { Router } from "express";
import {
  createTodo,
  getTodoById,
  getTodos,
  updateTodo,
  deleteTodo,
} from "../controllers/todo.controller";
const router = Router();

// @route   POST /api/todos
// @desc    Create a new todo
// @access  Public
router.post("/", createTodo);

// @route   GET /api/todos
// @desc    Get all todos
// @access  Public
router.get("/", getTodos);

// @route   GET /api/todos/:id
// @desc    Get a single todo by ID
// @access  Public
router.get("/:id", getTodoById);

// @route   PUT /api/todos/:id
// @desc    Update a todo by ID
// @access  Public
router.put("/:id", updateTodo);

// @route   DELETE /api/todos/:id
// @desc    Delete a todo by ID
// @access  Public
router.delete("/:id", deleteTodo);

export default router;
