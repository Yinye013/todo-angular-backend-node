import mongoose from "mongoose";
import Todo from "../models/todo.model";
import { Request, Response } from "express";

const createTodo = async (req: Request, res: Response) => {
  try {
    const { text } = req.body;
    if (!text || text.trim() === "") {
      return res.status(400).json({ message: "Text is required" });
    }
    const newTodo = new Todo({ text: text.trim() });
    await newTodo.save();
    res.status(201).json({
      success: true,
      message: "Todo created successfully",
      data: newTodo,
    });
  } catch (error) {
    res.status(500).json({ message: "Error creating todo" });
  }
};

const getTodos = async (req: Request, res: Response) => {
  try {
    const todos = await Todo.find().sort({ createdAt: 1 }); //I am sorting here: 1 means ascending(oldest first), -1 means descending (newest newest first)
    res.status(200).json({
      success: true,
      message: "Todos fetched successfully",
      data: todos,
      count: todos.length,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching todos" });
  }
};

const getTodoById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }

    const todo = await Todo.findById(id);

    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res.status(200).json({
      success: true,
      message: "Todo fetched successfully",
      data: todo,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching todo" });
  }
};

const updateTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { text, completed } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }
    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { text, completed },
      { new: true }
    );
    if (!updatedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res.status(200).json(updatedTodo);
  } catch (error) {
    res.status(500).json({ message: "Error updating todo" });
  }
};

const deleteTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedTodo = await Todo.findByIdAndDelete(id);
    if (!deletedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Error deleting todo" });
  }
};

export { createTodo, getTodos, getTodoById, updateTodo, deleteTodo };
